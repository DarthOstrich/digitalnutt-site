import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const ProjectCard = ({ project }) => (
  <article className="column">
    <Link to={project.fields.slug}>
      <h1>{project.frontmatter.title}</h1>
      <h2>{project.frontmatter.type}</h2>
    </Link>
  </article>
);

class ProjectRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: projects } = data.allMarkdownRemark;

    return (
      <article className="columns">
        {projects.map(project => {
          return <ProjectCard project={project.node} key={project.node.id} />;
        })}
      </article>
    );
  }
}
// class BlogRoll extends React.Component {
//   render() {
//     const { data } = this.props;
//     const { edges: posts } = data.allMarkdownRemark;
//
//     return (
//       <div className="columns is-multiline">
//         {posts &&
//           posts.map(({ node: post }) => (
//             <div className="is-parent column is-6" key={post.id}>
//               <article
//                 className={`blog-list-item tile is-child box notification ${
//                   post.frontmatter.featuredpost ? 'is-featured' : ''
//                 }`}>
//                 <header>
//                   {post.frontmatter.featuredimage ? (
//                     <div className="featured-thumbnail">
//                       <PreviewCompatibleImage
//                         imageInfo={{
//                           image: post.frontmatter.featuredimage,
//                           alt: `featured image thumbnail for post ${post.frontmatter.title}`,
//                         }}
//                       />
//                     </div>
//                   ) : null}
//                   <p className="post-meta">
//                     <Link
//                       className="title has-text-primary is-size-4"
//                       to={post.fields.slug}>
//                       {post.frontmatter.title}
//                     </Link>
//                     <span> &bull; </span>
//                     <span className="subtitle is-size-5 is-block">
//                       {post.frontmatter.date}
//                     </span>
//                   </p>
//                 </header>
//                 <p>
//                   {post.excerpt}
//                   <br />
//                   <br />
//                   <Link className="button" to={post.fields.slug}>
//                     Keep Reading →
//                   </Link>
//                 </p>
//               </article>
//             </div>
//           ))}
//       </div>
//     );
//   }
// }
//
ProjectRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query ProjectRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "project" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                type
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={(data, count) => {
      return <ProjectRoll data={data} count={count} />;
    }}
  />
);
// export default () => (
//   <StaticQuery
//     query={graphql`
//       query BlogRollQuery {
//         allMarkdownRemark(
//           sort: { order: DESC, fields: [frontmatter___date] }
//           filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
//         ) {
//           edges {
//             node {
//               excerpt(pruneLength: 400)
//               id
//               fields {
//                 slug
//               }
//               frontmatter {
//                 title
//                 templateKey
//                 date(formatString: "MMMM DD, YYYY")
//                 featuredpost
//                 featuredimage {
//                   childImageSharp {
//                     fluid(maxWidth: 120, quality: 100) {
//                       ...GatsbyImageSharpFluid
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={(data, count) => <BlogRoll data={data} count={count} />}
//   />
// )
