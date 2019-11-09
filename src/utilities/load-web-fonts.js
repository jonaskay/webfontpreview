const WebFont = typeof window !== "undefined" && require("webfontloader")

export default families => {
  if (typeof window !== "undefined" && families.length > 0) {
    WebFont.load({
      google: {
        families,
      },
    })
  }
}
