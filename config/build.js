import Mode from "frontmatter-markdown-loader/mode"
import MarkdownIt from "markdown-it"
import mip from "markdown-it-prism"
import path from "path"
import mej from "markdown-it-emoji"
import twemoji from "twemoji"

const md = new MarkdownIt({
  html: true,
  typographer: true,
})
  .use(mip)
  .use(mej)

md.renderer.rules.emoji = function (token, idx) {
  return twemoji.parse(token[idx].content, { folder: "svg", ext: ".svg" })
}

export default {
  extractCSS: true,
  quiet: false,

  extend(config) {
    const imgRule = config.module.rules.find(
      (r) => r.test.toString() === "/\\.(png|jpe?g|gif|svg|webp)$/i"
    )
    config.module.rules.splice(config.module.rules.indexOf(imgRule), 1)

    // Frontmatter-markdown-loader
    config.module.rules.push(
      {
        test: /\.md$/,
        loader: "frontmatter-markdown-loader",
        include: path.resolve(__dirname, "../content"),
        options: {
          mode: [Mode.VUE_COMPONENT, Mode.META],
          vue: {
            root: "mdArticle",
          },
          markdown(body) {
            return md.render(body)
          },
        },
      },
      {
        test: /\.(jpe?g|png)$/i,
        loader: "responsive-loader",
        options: {
          placeholder: true,
          quality: 60,
          size: 1400,
          adapter: require("responsive-loader/sharp"),
        },
      },
      {
        test: /\.(gif|svg)$/,
        loader: "url-loader",
        query: {
          limit: 1000,
          name: "img/[name].[hash:7].[ext]",
        },
      },
      {
        // Webpack rules are parsed bottom to top, so this takes precendence over
        // the gif|svg rule
        test: /.*_sprite\.svg$/i,
        include: /.*_sprite\.svg$/i,
        use: [
          {
            loader: "svg-sprite-loader",
            options: {
              extract: true,
              publicPath: "",
            },
          },
        ],
      }
    )
  },
  // postcss: {
  //   // Add plugin names as key and arguments as value
  //   // Install them before as dependencies with npm or yarn
  //   plugins: {
  //     // Disable a plugin by passing false as value
  //     'postcss-url': false,
  //     'postcss-nested': {},
  //     'postcss-responsive-type': {},
  //     'postcss-hexrgba': {}
  //   },
  //   preset: {
  //     // Change the postcss-preset-env settings
  //     autoprefixer: {
  //       grid: true
  //     }
  //   }
  // },
}
