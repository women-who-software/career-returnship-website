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

module.exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions
   //1. Get path to templates
  const projectTemplate = path.resolve('./src/templates/projecttemplate.js')
  //2. Get markdown data, (slugs) to create the new pages based on the slugs
  const res = await graphql(`
      query{
          allMarkdownRemark {
              edges {
                  node {
                      fields {
                          slug
                      }
                  }
              }
          }
      }
  `)

  if(res.errors){
      throw res.errors;
  }
  res.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
        component: projectTemplate,
        path:`/projects/${edge.node.fields.slug}`,
        context: {
            slug: edge.node.fields.slug
        }
    })
});
}