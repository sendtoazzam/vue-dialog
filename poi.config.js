module.exports = {
    entry: {
        'vue-dialog': './src/index.js'
    },
    cleanOutDir: true,
    format: 'cjs',
    moduleName: 'vueDialog',
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    }
}