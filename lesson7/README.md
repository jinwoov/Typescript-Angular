# CORE TYPES

- Tuple is an array that is fixed length and type array
- Enum is `enum{ NEW, OLD }` added by typescript: automatically enumerated global constant identifier
- Any is to store any data types
```ts
// any type of the object
// Could use it to validate using runtime check. But being a typescript, it loses the strictness to the types
let favorite = any[];
favorite = ['Sports'];
favorite = [1];
```
- 
