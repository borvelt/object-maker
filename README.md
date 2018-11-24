# object-maker

_create object with string and map string to object_

## Installation

```bash 
$ npm install --save object-maker
```

## Usage
##### Create Object
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
#### Map string to object
When you have a deep complex object and you need to access the deepest part 
it's good solution to make string and get equivalent of mapped string to 
object. see this example: 
```javascript
import {mapStringToObject} from 'object-maker'
const info = {
  package: {
      author: {
        email: "borvelt@gmail.com",
        gitRepo: "https://github.com/borvelt",
      }
  }
}
console.log(mapStringToObject('package.author.gitRepo', info))
// -> https://github.com/borvelt
```
Careful `mapStringToObject` works case-sensitive.
## Test
run `npm test` it will pass all test cases.
## license
MIT