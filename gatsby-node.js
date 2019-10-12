const path = require("path")

module.exports.onCreateNode = (node, actions) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
  }
}
