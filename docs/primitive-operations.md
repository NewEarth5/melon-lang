

# Operations on Primitives <!-- {docsify-all} -->

### Strings

Strings in Melon are sequences of characters that allow various operations, making them versatile for text manipulation and processing. Here’s a detailed look at the common operations you can perform on strings in Melon:

#### String Declaration

Strings in Melon are defined using double quotes (`"`). You can assign string values to variables.

**Example:**
```melon
let greeting = "Hello, world!";
```

#### String Operations

1. **Concatenation (`+` Operator)**
   - You can concatenate two strings using the `+` operator.
   
   **Example:**
   ```melon
   let full_name = "John" + " " + "Doe"; // Outputs: "John Doe"
   ```

2. **Comparison (`<=`, `<`, `>=`, `>`)**
   - Strings can be compared lexicographically using comparison operators like `<=`, `<`, `>=`, and `>`.

   **Example:**
   ```melon
   print("apple" < "banana");  // Outputs: true
   ```

3. **Length (`len()` method)** 
   - The `len()` method returns the number of characters in the string.

   **Example:**
   ```melon
   let length = len("Hello");  // Outputs: 5
   ```

4. **Accessing Characters (Indexing)**
   - You can access individual characters in a string using zero-based indexing.

   **Example:**
   ```melon
   let first_char = "Hello"[0]; // Outputs: "H"
   let last_char = "Hello"[4];  // Outputs: "o"
   ```

5. **Containment (`contains` method)**
   - You can check if a string contains another string using the `contains` method.

   **Example:**
   ```melon
   print("Hello, world!".contains("Hello"));  // Outputs: true
   ```

6. **Splitting (`split()` method)**
   - The `split()` method splits a string into a list of substrings based on a delimiter (default is a space).
   
   **Example:**
   ```melon
   let words = "Hello world".split();  // Outputs: ["Hello", "world"]
   ```

7. **Case Conversion (`lower()` and `upper()` methods)**
   - `lower()` converts all characters to lowercase.
   - `upper()` converts all characters to uppercase.

   **Example:**
   ```melon
   let lowercase = "HELLO".lower();  // Outputs: "hello"
   let uppercase = "hello".upper();  // Outputs: "HELLO"
   ```

8. **Trimming (`trim()` method)**
   - The `trim()` method removes any leading or trailing whitespace characters from the string.

   **Example:**
   ```melon
   let trimmed = "  Hello  ".trim();  // Outputs: "Hello"
   ```

9. **Replacing Substrings (`replace()` method)**
   - The `replace()` method replaces all occurrences of a substring with another string.

   **Example:**
   ```melon
   let new_string = "Hello, world".replace("world", "Melon");  // Outputs: "Hello, Melon"
   ```

10. **Reversing a String (`reverse()` method)**
    - The `reverse()` method reverses the characters in the string.

    **Example:**
    ```melon
    let reversed = "Hello".reverse();  // Outputs: "olleH"
    ```

### Numbers

Numbers in Melon represent numeric values and can be either integers or floating-point numbers. These numbers are essential for performing mathematical computations and comparisons. Melon provides a variety of operations that can be performed on numbers, making it versatile for handling arithmetic and logical tasks.

#### 1. Arithmetic Operations

Melon supports several basic arithmetic operations that allow you to perform calculations on numbers. These operations include addition, subtraction, multiplication, division, and modulus.

- **Addition (`+`)**: Adds two numbers together.
- **Subtraction (`-`)**: Subtracts one number from another.
- **Multiplication (`*`)**: Multiplies two numbers.
- **Division (`/`)**: Divides one number by another.
- **Modulus (`%`)**: Returns the remainder of a division operation.
- **Exponentiation (`**`)**: Returns the result of raising the first operand to the power of the second operand.

**Examples:**
```melon
let a = 10;
let b = 3;

let sum = a + b;         // sum is 13
let difference = a - b;  // difference is 7
let product = a * b;     // product is 30
let quotient = a / b;    // quotient is 3.333... (floating-point division)
let remainder = a % b;   // remainder is 1
let exp = 3 ** 2;   // exp is 9
```

#### 2. Comparison Operations

Comparison operations allow you to compare two numbers. These operations are commonly used in conditional statements and loops to control the flow of a program.

- **Equal to (`==`)**: Checks if two numbers are equal.
- **Not equal to (`!=`)**: Checks if two numbers are not equal.
- **Greater than (`>`)**: Checks if one number is greater than another.
- **Less than (`<`)**: Checks if one number is less than another.
- **Greater than or equal to (`>=`)**: Checks if one number is greater than or equal to another.
- **Less than or equal to (`<=`)**: Checks if one number is less than or equal to another.

**Examples:**
```melon
let x = 5;
let y = 10;

let isEqual = (x == y);          // isEqual is false
let isNotEqual = (x != y);       // isNotEqual is true
let isGreater = (x > y);         // isGreater is false
let isLess = (x < y);            // isLess is true
let isGreaterOrEqual = (x >= y); // isGreaterOrEqual is false
let isLessOrEqual = (x <= y);    // isLessOrEqual is true
```

#### 3. Increment and Decrement

Increment and decrement operations are shorthand for adding or subtracting 1 from a number, respectively. These operations are useful for loops and iterative processes.

- **Increment (`++`)**: Increases a number by 1.
- **Decrement (`--`)**: Decreases a number by 1.

**Examples:**
```melon
let count = 0;

count++;  // count is now 1
count--;  // count is back to 0
```

The prefix increment (++variable) or decrement (--variable) operators first modify the variable by increasing or decreasing its value by 1, and then return the updated value. On the other hand, the suffix increment (variable++) or decrement (variable--) operators return the variable's current value before performing the increment or decrement. This distinction can affect the outcome of expressions, especially when these operators are used within more complex statements or function calls.

**Examples:**

```
let i = 0;

let x = i++; // x = 0
```

```
let i = 0;

let x = ++i; // x = 1
```

#### 4. Random Number Generation

Melon provides a built-in `random()` function that generates a random floating-point number between 0 (inclusive) and 1 (exclusive). This can be useful for creating random behavior in programs, such as simulations or games.

**Example:**
```melon
let random_number = random(); // Generates a random number between 0 and 1
```

#### 5. Casting (Planned)

Casting is the process of converting one data type to another. For numbers, this might involve converting an integer to a floating-point number or vice versa. While this feature is not yet implemented in Melon, it is planned for future releases.

**Planned Example:**
```melon
let integer_value = 10;
let float_value = toFloat(integer_value);  // Expected to convert 10 to 10.0

let decimal_value = 3.14;
let int_value = toInt(decimal_value);      // Expected to convert 3.14 to 3
```

#### 6. Mathematical Functions (Planned)

Melon plans to support various mathematical functions to perform more complex calculations. These functions might include absolute value, exponentiation, square root, trigonometric functions, and more.

**Planned Examples:**
```melon
let value = -5;
let abs_value = abs(value); // Expected to be 5

let base = 2;
let exponent = 3;
let power = pow(base, exponent); // For now just use 2**3

let number = 9;
let square_root = sqrt(number); // Expected to be 3
```

#### 7. Rounding (Planned)

Rounding functions are also planned to help round numbers to the nearest integer or to a specified number of decimal places.

**Planned Examples:**
```melon
let float_num = 3.567;
let rounded = round(float_num);     // Expected to be 4
let rounded_down = floor(float_num); // Expected to be 3
let rounded_up = ceil(float_num);    // Expected to be 4
```

### Boolean Operations

Boolean operations in Melon are fundamental for controlling the flow of programs and making decisions. They operate on Boolean values (`true` and `false`) and are essential for creating conditional statements and loops. Here’s a detailed look at the various Boolean operations available in Melon:

#### 1. Logical AND (`&&`)

The logical AND operation returns `true` if both operands are `true`. If either operand is `false`, the result is `false`. This operation is used to combine multiple conditions in a way that all conditions must be met for the overall expression to be true.

**Example:**
```melon
let a = true;
let b = false;
let result = a && b; // result is false
```

#### 2. Logical OR (`||`)

The logical OR operation returns `true` if at least one of the operands is `true`. If both operands are `false`, the result is `false`. This operation is used when only one of multiple conditions needs to be true for the overall expression to be true.

**Example:**
```melon
let a = true;
let b = false;
let result = a || b; // result is true
```

#### 3. Logical NOT (`!`)

The logical NOT operation inverts the Boolean value of its operand. If the operand is `true`, the result is `false`, and if the operand is `false`, the result is `true`. This operation is used to negate conditions and create opposite logical expressions.

**Example:**
```melon
let a = true;
let result = !a; // result is false
```

#### 4. Comparison Operators

Boolean operations are frequently combined with comparison operators to form complex conditions. These operators compare two values and return Boolean results:

- **Equal to (`==`)**: Returns `true` if the values are equal.
- **Not equal to (`!=`)**: Returns `true` if the values are not equal.

**Example:**
```melon
let x = "hello";
let y = "hello";
let comparison_result = (x == y); // comparison_result is true
```

### Lists

#### List Declaration

You can declare lists using square brackets (`[]`). Lists can contain any data type, including other lists.

**Example:**
```melon
let my_list = [1, 2, 3, "hello", [4, 5]];
```

#### List Operations

1. **Accessing Elements (`[]` operator)**
   - Lists are zero-indexed, meaning the first element is at index `0`.
   - You can access elements using the `[]` operator.
   
   **Example:**
   ```melon
   let first_item = my_list[0];  // Outputs: 1
   ```

2. **Setting Elements (`[]` operator)**
   - You can modify elements in a list by setting them at a specific index.
   
   **Example:**
   ```melon
   my_list[1] = 10;  // my_list becomes [1, 10, 3, "hello", [4, 5]]
   ```

3. **Length (`len()` method)**
   - The `len()` method returns the number of elements in the list.
   
   **Example:**
   ```melon
   let length = len(my_list);  // Outputs: 5
   ```

4. **Appending Elements (`+=` or `append()` method)**
   - You can append a new element to the end of a list using the `append()` method or the `+=` operator.
   
   **Example:**
   ```melon
   my_list.append(6);  // my_list becomes [1, 10, 3, "hello", [4, 5], 6]
   my_list += [7];     // my_list becomes [1, 10, 3, "hello", [4, 5], 6, 7]
   ```
   - Beware that += operator adds the items to `my_list`. If you use + operator for two lists, you get a new list with the items.
   **Example:**
   ```melon
   let old_list = [1,2,3];

   old_list  + [4,4,4]; // items don't get added to old_list. This creates a new list.
   ```

5. **Extending Lists (`extend()` method or `+` operator)**
   - The `extend()` method or the `+` operator can be used to concatenate two lists.
   
   **Example:**
   ```melon
   my_list.extend([8, 9]);  // my_list becomes [1, 10, 3, "hello", [4, 5], 6, 7, 8, 9]
   ```

6. **Inserting Elements (`insert()` method)**
   - The `insert()` method inserts an element at a specific index, shifting the rest of the list to the right.
   
   **Example:**
   ```melon
   my_list.insert(2, "new");  // my_list becomes [1, 10, "new", 3, "hello", [4, 5], 6, 7, 8, 9]
   ```

7. **Reversing a List (`reverse()` method)**
   - The `reverse()` method reverses the elements of the list in place.
   
   **Example:**
   ```melon
   my_list.reverse();  // Outputs: [9, 8, 7, 6, [4, 5], "hello", 3, "new", 10, 1]
   ```

8. **Checking for Containment ( `contains()` method)**
   - You can check if a value exists in a list using the `contains()` method.
   
   **Example:**
   ```melon
   print(my_list.contains(3));  // Outputs: true
   ```
9. **Deleting items at Index (`pop()` method)**

   - You can remove an item from a list by using `pop` method. If you don't pass it an argument, it pops the last item. This method returns the removed item.

   ```melon
   let my_list = [1,2,3];
   my_list.pop(2); // returns 3
   ```

### Tuples

Tuples in Melon are immutable ordered collections of elements. Unlike lists, tuples cannot be changed after they are created, meaning that you cannot add, remove, or modify elements. However, you can access elements within a tuple. Here’s a detailed look at tuple operations focusing on accessing elements:

1. **Accessing Elements**
- You can access individual elements of a tuple using zero-based indexing, similar to lists. The index specifies the position of the element within the tuple.

    **Example:**
    ```melon
    let my_tuple = (10, 20, 30, 40);
    let first_element = my_tuple[0]; // first_element is 10
    let third_element = my_tuple[2]; // third_element is 30
    ```

- Tuples, being immutable, do not support operations that alter their contents. You can only read and access the data stored in them. This immutability ensures that tuples are a reliable and consistent way to group related values that should not change throughout the program.

2. **Length**

- The `len` function can be used to determine the number of elements in a tuple.

    **Example:**
    ```melon
    let tuple = (1,2,3);
    let length = len(tuple); // Expected to be 3

### Dictionaries

Dictionaries are a powerful data structure in Melon that store key-value pairs. They provide a way to map unique keys to values, allowing for efficient data retrieval and manipulation.

#### Dictionary Declaration

Dictionaries are created using curly braces (`{}`). Each key-value pair is separated by a colon (`:`), and pairs are separated by commas.

**Example:**
```melon
let my_dict = {"name": "Alice", "age": 30};
```

#### Dictionary Operations

1. **Accessing Values (`[]` operator or `get()` method)**
   - You can retrieve values from a dictionary using the `[]` operator or the `get()` method by specifying the key.
   
   **Example:**
   ```melon
   let name = my_dict["name"];  // Outputs: "Alice"
   let age = my_dict.get("age");  // Outputs: 30
   ```

2. **Setting Values (`[]` operator or `set()` method)**
   - You can set or update values in a dictionary using the `[]` operator or the `set()` method by specifying the key and the new value.
   
   **Example:**
   ```melon
   my_dict["age"] = 31;         // Updates the value associated with key "age"
   my_dict.set("city", "New York");  // Adds a new key-value pair
   ```

3. **Length (`len()` method)**
   - The `len()` method returns the number of key-value pairs in the dictionary.
   
   **Example:**
   ```melon
   let size = len(my_dict);  // Outputs: 3 (after adding "city")
   ```

4. **Getting Keys (`keys()` method)**
   - The `keys()` method returns a list of all keys in the dictionary.
   
   **Example:**
   ```melon
   let keys = my_dict.keys();  // Outputs: ["name", "age", "city"]
   ```

5. **Getting Values (`values()` method)**
   - The `values()` method returns a list of all values in the dictionary.
   
   **Example:**
   ```melon
   let values = my_dict.values();  // Outputs: ["Alice", 31, "New York"]
   ```

9. **Deleting keys (`pop()` method)**
   - You can remove a key from a dictionary by using `pop` method. This method returns the removed value.
   
   **Example:**
   ```melon
   let my_dict = {"name": "John"};
   my_dict.pop("name"); // returns "John"
   ```

10. **Checking Existence of Key (`has()` method)**
      - You can check if a dictionary contains a key by using `has` method. Returns a boolean value.
   
      **Example:**
      ```melon
      let my_dict = {"name": "John"};
      
      if(!my_dict.has("name")){
         print("invalid dictionary!");
         exit();
      }
      
      print("Hello ", my_dict["name"]);
      ```
