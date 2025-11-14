import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
      exports: 'named'
    }
  ],
  plugins: [
    // Automatically externalize peerDependencies
    peerDepsExternal(),
    
    // Resolve node_modules
    resolve({
      extensions: ['.js', '.jsx']
    }),
    
    // Transpile JSX and modern JS
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx']
    }),
    
    // Convert CommonJS to ES6
    commonjs(),
    
    // Handle CSS files
    postcss({
      extensions: ['.css'],
      minimize: true,
      inject: true, // Inject CSS into JS
      extract: false // Don't extract CSS to separate file
    }),
    
    // Minify the output
    terser()
  ],
  
  // Don't bundle React and ReactDOM
  external: ['react', 'react-dom']
};