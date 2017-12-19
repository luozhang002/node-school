// const fs = require('fs');
// const asyncHooks = require('async_hooks');

// const hook = asyncHooks.createHook({
//     init(asyncId, type, triggerAsyncId, resource) {
//         fs.writeSync(1, `init: asyncId-${asyncId},type-${type},triggerAsyncId-${triggerAsyncId}\n`);
//     },
//     before(asyncId) {
//         fs.writeSync(1, `before: asyncId-${asyncId}\n`);
//     },
//     after(asyncId) {
//         fs.writeSync(1, `after: asyncId-${asyncId}\n`);
//     },
//     destroy(asyncId) {
//         fs.writeSync(1, `destroy: asyncId-${asyncId}\n`);
//     }
// });

// hook.enable();
// console.log('hello');


const asyncHooks = require('async_hooks');

console.log(`top level: ${asyncHooks.executionAsyncId()}`);

const f = () => {
    console.log(`f: ${asyncHooks.executionAsyncId()}`);
};

f();

const g = () => {
    console.log(`setTimeout: ${asyncHooks.executionAsyncId()}`);
}

setTimeout(g, 0);
setTimeout(g, 0);