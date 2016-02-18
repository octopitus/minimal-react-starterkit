> A minimal starter kit for building React apps

## Why another boilerplate?

Because many projects out there depends on too much technologies, complex structure and with lots of things to care about.
This starter kit aims to give you a good starting point for your projects. No specific implementation of Flux, no data fetching patterns
or universal things inside. **Start small, add what you need.**

## Features
- Include few tools.
- Babel 6 with Webpack and Hot Loader.
- CSS processing with PostCSS.

## Getting started

```bash
npm install
```

### Running development server

```bash
npm start # Navigate to localhost:3000 to view the app
```

This leverages [react-transform-hmr](https://github.com/gaearon/react-transform-hmr) to automatically start a local dev server and refresh file changes on the fly without reloading the page.
It also automatically includes source maps, allowing you to browse code and set breakpoints on the original code.

### Deploy to production

```bash
npm run build
```

Remove old build, runs linter, and then, if success, compiles your application to `dist`. You can just serve this folder and you are good to go.

### Linting

```bash
npm run lint
```

Linting using `eslint` with standard rules and with React plugin.

```bash
npm run lint:fix
```

Fixes linter's common issues ([Learn more](http://eslint.org/docs/user-guide/command-line-interface.html#fix)).

### Test

> Will also be included

## License

MIT
