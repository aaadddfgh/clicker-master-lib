import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import nodePolyfills from "rollup-plugin-polyfill-node";
export default [
	// browser-friendly UMD build
	{
		input: 'dist/index.js',
    
		output: {
            name:"parser",
			file: "./dist/bundle.umd.js",
			format: 'umd'
		},
		plugins: [
			resolve(), // so Rollup can find `ms`
			commonjs(), // so Rollup can convert `ms` to an ES module
            nodePolyfills()
		]
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify
	// `file` and `format` for each target)
	{
		input: './dist/index.js',
       
		output: [
			{ file: "./dist/bundle.cjs", format: 'cjs',plugins:[] },
			{ file: "./dist/bundle.mjs", format: 'esm',plugins:[] }
		]
	}
];