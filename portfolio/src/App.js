import React, { Component } from "react";
import "./styles/main.css";

import logo from "./images/play-button1.png";

import blockAdventure from "./images/block-adventure.png";
import blocks from "./images/blocks.png";
import frogger from "./images/frogger.png";
import crypto from "./images/crypto-app.png";
import news from "./images/nc-news.png";
import ncbuddy from "./images/nc-buddy.png";

import github from "./images/github.png";
import youtube from "./images/youtube.png";
import linkedin from "./images/linkedin.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="wrap">
          <header>
            <div class="image">
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCS_WLqqoaown_s8JZxC8JMw?view_as=subscriber"
              >
                {" "}
                <img src={logo} />
              </a>
            </div>
            <nav>
              <li>
                <a target="_blank" href="https://github.com/hakbar0">
                  Work
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/haseeb-akbar-4a4b56140/"
                >
                  Contact Me
                </a>
              </li>
            </nav>
          </header>

          <content>
            <p class="intro">
              Hi, I’m Haseeb Akbar, a junior
              <span styles={{ color: "gold" }}> developer</span> living in
              Basingstoke and working at Starkwood Media.
            </p>
          </content>

          <featured>
            <p class="featured">
              Featured
              <span style={{ color: "gold" }}> Work</span>
            </p>
            <work>
              <a
                target="_blank"
                href="http://www.indiedb.com/members/lastingspark/downloads/block-adventure"
                class="block-adventure-a"
              >
                <div class="card block-adventure">
                  <img
                    class="card-img-top"
                    src={blockAdventure}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Block Adventure</h5>
                  </div>
                </div>
              </a>

              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.Haseeb.Blocks"
                class="blocks-a"
              >
                <div class="card blocks">
                  <img class="card-img-top" src={blocks} alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">Falling Blocks</h5>
                  </div>
                </div>
              </a>

              <a
                target="_blank"
                href="https://github.com/hakbar0/Crypto-App"
                class="crypto-app-a"
              >
                <div class="card crypto-app">
                  <img class="card-img-top" src={crypto} alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">Crypto App</h5>
                  </div>
                </div>
              </a>

              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=_BgOqZJitGU&feature=youtu.be"
                class="squash-toad-a"
              >
                <div class="card squash-toad">
                  <img
                    class="card-img-top"
                    src={frogger}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Squash Toad</h5>
                  </div>
                </div>
              </a>

              <a
                target="_blank"
                href="https://nc-news-test-2.herokuapp.com/"
                class="nc-news-a"
              >
                <div class="card nc-news nc-news">
                  <img class="card-img-top" src={news} alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">NC-NEWS</h5>
                  </div>
                </div>
              </a>

              <a
                target="_blank"
                href="https://github.com/NC-Companion/nc-companion"
                class="nc-buddy-a"
              >
                <div class="card nc-buddy">
                  <img
                    class="card-img-top"
                    src={ncbuddy}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">NC-Buddy</h5>
                  </div>
                </div>
              </a>
            </work>
          </featured>

          <footer>
            <li>
              <a target="_blank" href="https://github.com/hakbar0">
                {" "}
                <img src={github} class="github" />
                <span />
              </a>
            </li>

            <li>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCS_WLqqoaown_s8JZxC8JMw?view_as=subscriber"
              >
                {" "}
                <img src={youtube} class="youtube" />
              </a>
            </li>

            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/haseeb-akbar-4a4b56140/"
              >
                <img src={linkedin} class="linkedin" />
                <span />
              </a>
            </li>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
