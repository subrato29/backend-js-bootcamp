node-tutorial
===================================

What is `node.js`
```
- node.js is a JavaScript runtime built on Google's open-source V8 JS engine.
- It's a Single-threaded, based on event driven, non-blocking I/O model. 

```

How to write code in console
```
- type `node`
- to come out or exit: control + D or .exit
- to clear out console in node: `cmd + K`
- By hitting `tab`, you can all the global varible inside `node`

```

What is `nodemon`
```
`nodemon` is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
To use nodemon, replace the word `node` on the command line when executing your script.

i.e. Instead of using `node index.js`, write `nodemon index.js`

```

What is `slugify`
```
`slugify` is the unique identifying part of a web address, typically at the end of the URL.

var slugify = require('slugify')

slugify('some string', {
  replacement: '-',  // replace spaces with replacement character, defaults to `-`
  remove: undefined, // remove characters that match regex, defaults to `undefined`
  lower: false,      // convert to lower case, defaults to `false`
  strict: false,     // strip special characters except replacement, defaults to `false`
  locale: 'vi',       // language code of the locale to use
  trim: true         // trim leading and trailing replacement chars, defaults to `true`
})

```

