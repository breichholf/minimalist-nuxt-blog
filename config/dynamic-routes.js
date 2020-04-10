const glob = require("glob")
const path = require("path")

export default function (urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map((url) => {
      return glob
        .sync(urlFilepathTable[url], { cwd: "content" })
        .map((filepath) => `${url}/${path.basename(filepath, ".md")}`)
    })
  )
}
