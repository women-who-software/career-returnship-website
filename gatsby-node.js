const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

module.exports.onCreateNode = ({ node, actions, getNode  }) => {
  const { createNodeField } = actions;
  

    if(node.internal.type === 'MarkdownRemark'){ 
        //const slug = path.basename(node.fileAbsolutePath, '.md')
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })

        const parent = getNode(node.parent);
        let collections = parent.sourceInstanceName;
        createNodeField({
            node,
            name: "collections",
            value: collections,
        })
    }

}