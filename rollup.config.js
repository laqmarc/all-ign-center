import buble from 'rollup-plugin-buble'
import resolve from 'rollup-plugin-node-resolve'

export default { 
  dest: 'index.js',
  entry: 'src/index.js',
  format: 'iife',
  moduleName: 'allignCenter',
  plugins: [
    resolve({
      //browser: true,
      main: true
    }),
    buble({
      // https://buble.surge.sh/guide/#command-line-options
      transforms: {},
      objectAssign: 'Object.assign'
    })
  ],
  sourceMap: true
}
