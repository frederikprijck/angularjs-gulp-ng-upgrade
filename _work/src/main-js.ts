// Then we find all the tests.
const context = (require as any).context('./app/', true, /\.module\.js$/);
// And load the modules.
context.keys().map(context);

const context2 = (require as any).context('./app/', true, /\.*\/(?!.*spec).*\js$/);
context2.keys().map(context2);
