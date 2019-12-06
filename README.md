# pika-web-helloworld

This app demonstrates a situation that causes @pika/web to hang.  Note that the app uses es-react.  I've also tried using reactesm but it doesn't seem to help.

### Get the app working
1. `npm install`
2. `npm run pika`
3. Edit `node_modules/@types/react/index.d.ts` to fix error found in [https://github.com/pikapkg/pack/issues/10](https://github.com/pikapkg/pack/issues/10)
4. `npm run build`
5. `npm run server`
6. Go to [http://localhost:8080/index.html](http://localhost:8080/index.html)
7. App works!

### @pika/web will hang if you add @patternfly/react-core components
1. copy `package.json.broken` to `package.json`
2. `npm install`
3. `npm run pika`
4. See it hang forever