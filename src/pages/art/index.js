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
                I write music using <a href="https://sonic-pi.net/">Sonic Pi</a>. It is available on
                <a href="https://open.spotify.com/artist/1o6CGTMPjk1C0IdK9jV2H1"> Spotify</a> and <a href="https://music.apple.com/us/artist/modulo/1499420471">Apple Music</a>
              </p>
              <h2>Playlists</h2>
              <p>
                I curate playlists on Spotify to serve my musical needs. Also happy to take reccomendations. Shoot them to me on <a href="https://twitter.com/code_nutt">twitter</a>.
              </p>
              <div className="columns">
                <div className="column">
                  <h3>Instrumental Coding Sessions</h3>
                  <p>Curated collection of classical, score, electronic, video game and EPIC music. Best served on Random. Now with extra Jazz. Increases productivity by 1000% guaranteed!* *Unverifiable but possible</p>
                  <iframe src="https://open.spotify.com/embed/playlist/4hwEGdFGfxBiwUbVmjs9RG" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
                <div className="column">
                  <h3>Heavy as a Really Heavy Thing</h3>
                  <p>The heaviest/grooviest metal songs around. </p>
                  <iframe src="https://open.spotify.com/embed/playlist/6OuqEi3fzY8IqA6yBDe6kE" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
