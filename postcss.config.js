const postcssPresetEnv = require(`postcss-preset-env`)

module.exports = () => ({
  plugins: [
    require("tailwindcss"),
    postcssPresetEnv({
      stage: 0,
    }),
  ],
})
