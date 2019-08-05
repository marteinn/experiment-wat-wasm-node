compile:
	rm -f main.wasm
	wat2wasm main.wat -o main.wasm
	node --expose-wasm run.js
