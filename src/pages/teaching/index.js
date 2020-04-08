import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import Layout from "../../components/Layout";

const RecentPostsRoll = () => {
  return (
    <StaticQuery
      query={graphql`
        query allMediumPostsFromUserQuery {
          allMediumUser {
            edges {
              node {
                posts {
                  title
                  uniqueSlug
                }
              }
            }
          }
        }
      `}
      render={(data, count) => {
        return data.allMediumUser.edges[0].node.posts.map(post => {
          return (
            <p>
              <a href={`https://medium.com/@jarednutt27/${post.uniqueSlug}`}>{post.title}</a>
            </p>
          );
        });
      }}
    />
  );
};

export default class TeachingPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="title is-1 has-text-centered">Teaching</h1>
              <div className="columns">
                <div className="column">
                  <h2>Written</h2>
                  <p>
                    I write articles I wish I had when learning. I write on <a href="https://medium.com/@jarednutt27">Medium</a>, <a href="https://dev.to/codenutt">Practical Dev</a> and sometimes on <a href="https://www.freecodecamp.org/news/author/jared/">FreecodeCamp News</a>
                  </p>
                  <h3>Recent Posts</h3>
                  <RecentPostsRoll />
                </div>
                <div className="column">
                  <h2>Video</h2>
                  <h3>YouTube</h3>
                  <p>I have a youtube channel dedicated to web development.</p>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/PlUbYws5Ybw?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <h3>Twitch</h3>
                  <p>
                    Sometimes I stream on Twitch. Check out my channel <a href="https://www.twitch.tv/codenutt">here.</a>
                  </p>
                  <iframe src="https://player.twitch.tv/?channel=codenutt" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
