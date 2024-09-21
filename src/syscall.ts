import { error } from "console";
import { InvalidType, InvalidTypeMultiple, MelonError, SycallArgumentNumberMismatch, InvalidFormat } from "./error";
import { List } from "./parser";
import {Value, StringValue, ListValue, BooleanValue, TupleValue} from './value'
import { normalize } from "path";

export default {
    'syscall': {
        syscallId: 'is.melon.syscall',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length < 2)
                throw new SycallArgumentNumberMismatch(lineNumber, 'syscall', 2, args.length);

            if (!(args[0] instanceof StringValue))
                throw new InvalidType(lineNumber, StringValue.typeName, args[0].typeName, 'First argument of syscall (syscall id) must be a string');

            return args;
        },
    },
    'print': {
        syscallId: 'is.workflow.actions.showresult',
        preprocessor: (args: Value[], lineNumber: number) => {
            return [new StringValue(args.map(arg => arg.str).join(' '))];
        }
    },
    'input': {
        syscallId: 'is.workflow.actions.prompt',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length > 1)
                throw new SycallArgumentNumberMismatch(lineNumber, 'input', 1, args.length);

            if (args.length === 1 && !(args[0] instanceof StringValue))
                throw new InvalidType(lineNumber, StringValue.typeName, args[0].typeName, 'First argument of input must be a string.');

            return args;
        }
    },
    'exit': {
        syscallId: 'is.workflow.actions.stop',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length > 1)
                throw new SycallArgumentNumberMismatch(lineNumber, 'exit', 1, args.length);
            else if (args.length === 1)
                return [new StringValue(args[0].str)];
            else
                return [new StringValue("")];
        }
    },
    'tts': {
        syscallId: 'is.workflow.actions.speaktext',
        preprocessor: (args: Value[], lineNumber: number) => {
            return [new StringValue(args.map(arg => arg.str).join(' '))];
        }
    },
    'stt': {
        syscallId: 'is.workflow.actions.dictatetext',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length < 1 || args.length > 2)
                throw new SycallArgumentNumberMismatch(lineNumber, 'stt', 2, args.length);
            if (!(args[0] instanceof BooleanValue))
                throw new InvalidType(lineNumber, BooleanValue.typeName, args[0].typeName, 'First argument of stt must be a boolean.');
            if (args[0].value === true)
                return [new StringValue("On Tap")];
            if (args.length != 2)
                return [new StringValue("After Pause")];
            if (!(args[1] instanceof BooleanValue))
                throw new InvalidType(lineNumber, BooleanValue.typeName, args[1].typeName, 'Second argument of stt must be a boolean.');
            if(args[1].value === true)
                return [new StringValue("After Short Pause")];
            return [new StringValue("After Pause")];
        }
    },
    'alert': {
        syscallId: 'is.workflow.actions.alert',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length < 1 || args.length > 3)
                throw new SycallArgumentNumberMismatch(lineNumber, 'alert', 3, args.length);
            let text = args[0].str;
            let title = "";
            let showCancel = true;
            if (args.length > 1) {
                title = args[1].str;
                if (args.length > 2) {
                    if (!(args[2] instanceof BooleanValue))
                        throw new InvalidType(lineNumber, BooleanValue.typeName, args[2].typeName, 'Thrid argument of alert must be a boolean.');
                    showCancel = args[2].value;
                }
            }
            return [new StringValue(text), new StringValue(title), new BooleanValue(showCancel)];
        }
    },
    'choose': {
        syscallId: 'is.workflow.actions.choosefromlist',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length < 1 || args.length > 3)
                throw new SycallArgumentNumberMismatch(lineNumber, 'choose', 3, args.length);
            if (!(args[0] instanceof ListValue) && !(args[0] instanceof TupleValue))
                throw new InvalidTypeMultiple(lineNumber, [ListValue.typeName, TupleValue.typeName], args[0].typeName, 'First argument of choose must be a list or tuple.');
            let list = args[0].value.map(item => item.str);
            let prompt = "";
            let canMultiple = false;
            if (args.length > 1) {
                prompt = args[1].str;
                if (args.length > 2) {
                    if(!(args[2] instanceof BooleanValue))
                        throw new InvalidType(lineNumber, BooleanValue.typeName, args[2].typeName, 'Thrid argument of choose must be a boolean.');
                    canMultiple = args[2].value;
                }
            }
            return [new StringValue(list), new StringValue(prompt), new BooleanValue(canMultiple)]
        }
    },
    'define': {
        syscallId: 'is.workflow.actions.showdefinition',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length != 1)
                throw new SycallArgumentNumberMismatch(lineNumber, 'define', 1, args.length);
            let arg = args[0].str;
            arg.trim;
            if (arg.includes(" "))
                throw new InvalidFormat(lineNumber, `First argument of define must be a single word. Expected 1 word but got ${arg.split(" ").length} words`);
            return new StringValue(arg);
        }
    },
    'emojiName': {
        syscallId: 'is.workflow.actions.getnameofemoji',
        preprocessor: (args: Value[], lineNumber: number) => {
            if (args.length != 1)
                throw new SycallArgumentNumberMismatch(lineNumber, 'emojiName', 1, args.length);
            const regex_emoji = /[\p{Extended_Pictographic}\u{1F3FB}-\u{1F3FF}\u{1F9B0}-\u{1F9B3}]/ug;
            let arg = args[0].str.matchAll(regex_emoji).return;
            if (arg.length != 1)
                throw new InvalidFormat(lineNumber, `First argument of emojiName must be a single emoji. Expected 1 emoji but got ${arg.length} emojis`);
            return new StringValue(arg[0]);

        }
    }
}