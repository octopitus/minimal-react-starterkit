> Inspired by [essential-react](https://github.com/pheuter/essential-react)

## Features
- Include few tools (No bower, no gulp, etc...).
- Babel 6 with Webpack and Hot Loader using [react-transform-hmr](https://github.com/gaearon/react-transform-hmr).
- No specific implementation of Flux, no data fetching patterns or universal things inside.
- CSS processing with PostCSS.
- Fast testing with mocked-out DOM.

## Getting started

```bash
npm install
```

### Running development server

```bash
npm start # Navigate to localhost:3000 to view the app
```

Start a local dev server and refresh file changes on the fly without reloading the page. Even with CSS.

### Deploy to production

```bash
npm run build
```

Compiles your application to `dist` folder. You can just serve this folder and you are good to go.

### Linting

```bash
npm run lint
```

Linting using `eslint` with standard rules and React plugin.

```bash
npm run lint:fix
```

Fixes common issues ([Learn more](http://eslint.org/docs/user-guide/command-line-interface.html#fix)).

### Test

```bash
npm run test
```

Uses [ava](https://github.com/sindresorhus/ava) as test runner and uses [enzyme](https://github.com/airbnb/enzyme)
for testing your React components easier.

## License

MIT
