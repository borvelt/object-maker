# object-maker

_create object with string_

## Installation

```bash 
$ npm install --save object-maker
```

## Usage
If you want to generate deep complex object dynamically, you should use this library

```javascript
import objectMaker from 'object-maker'
import merge from 'lodash.merge'

const info1 = objectMaker('package.author.email', 'borvelt@gmail.com')
const info2 = objectMaker('package.author.gitRepo', 'https://github.com/borvelt')
merge(info1, info2)

// merged object
// Object{
//   package: {
//     author: {
//       email: "borvelt@gmail.com",
//       gitRepo: "https://github.com/borvelt",
//     }
//   }
// }
```
## Test
run `npm test` it will pass all test cases.
## license
MIT