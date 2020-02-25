module.exports = {
  css: {
    sourceMap: true
  },
  publicPath: process.env.BUILD_MODE === "gh-pages" ? 'elections-registration-deadlines' : '',
  outputDir: undefined,
  assetsDir: 'src/assets',
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  lintOnSave: undefined
};
