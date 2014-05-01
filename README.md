double-to-base-2-string
=======================
Prints out a binary representation of the bits of a floating point number.

# Example

```javascript
var b2str = require("double-to-base-2-string")

console.log(b2str(0.3))
```

Output:

```javascript
1.00110011001100110011110011001100110011001100110011*2^-2
```

# Install

```
npm install double-to-base-2-string
```

# API

#### `require("double-to-base-2-string")(n)`
Converts a number into a radix 2 binary expansion.

* `n` is a double precision number

**Returns** A binary fractional number which represents `n`

# Credits
(c) 2014 Mikola Lysenko. MIT License