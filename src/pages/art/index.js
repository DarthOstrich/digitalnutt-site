import React from "react";

import Layout from "../../components/Layout";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="title is-1 has-text-centered">Music</h1>
              <h2>Modulo</h2>
              <p>
                I write music using <a href="https://sonic-pi.net/">Sonic Pi</a>. It is available on the following platforms:
              </p>
              <h2>Playlists</h2>
              <p>I curate playlists on Spotify to serve my musical needs.</p>
              <h3>Instrumental Coding Sessions</h3>
              <iframe src="https://open.spotify.com/embed/playlist/4hwEGdFGfxBiwUbVmjs9RG" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              <h3>Heavy as a Really Heavy Thing</h3>
              <iframe src="https://open.spotify.com/embed/playlist/6OuqEi3fzY8IqA6yBDe6kE" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
