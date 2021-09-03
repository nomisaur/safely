# safely

[![npm (scoped)](https://img.shields.io/npm/v/@emberscodes/safely)](https://github.com/nomisaur/safely)

errors bad. catch errors. safely makes everything safe.

# Install

```bash
$ npm install @emberscodes/safely
```

# Usage

safely doesnt need to be awaited for syncronous functions:

```javascript
// pass safely a syncronous function!
const [result, error] = safely(() => {
  throw "bonk";
});
// result === undefined
// error === 'bonk'
```

safely can handle async functions too:

```javascript
// pass an asyncronous function and safely await it!!
const [result, error] = await safely(async () => {
  throw "bonk";
});
// result === undefined
// error === 'bonk'
```

safely can also take promises:

```javascript
const bonkPromise = fetch("bonk.com");

// pass a promise and safely await that too!!!
const [result, error] = await safely(bonkPromise);
// result === 'you have been bonked'
// error === undefined
```

safely is very useful:

```javascript
const [[bonkResult, bonkError], [images, imagesError]] = await Promise.all([
  safely(fetch("bonk.com")),
  safely(fetch("bonk.com/images")),
]);
```

pass anything to safely:

```javascript
const [res, err] = safely("anything");
// res === 'anything'
```

# Propoganda

Safely is very safe. Safely handles anything. You can pass anything to safely. Wrap everything in safely. Safely will fix you code. Safely will cure your depression.
