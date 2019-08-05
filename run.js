const fs = require('fs');
const bytes = fs.readFileSync('./main.wasm');

(async () => {
  const { instance, module: _module } = await WebAssembly.instantiate(bytes);

  console.log(instance.exports.main(8, 5));
})();
