/* const {daWohneIch} = require('./address'); // common.js
 */

import Zuckerschnecke, { daWohneIch } from "./address.js"

/* Since 2015 the EcmaScript System is standard in JavaScript
- ESM / ES Modules

- for ESM we have to edit the package.json 'type':'module'
 */

let name = 'Leo'

function sayHello() {
    console.log('Hello, ' + name);
}

sayHello()
daWohneIch()