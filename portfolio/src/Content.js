import React from 'react';

import blockAdventure from "./images/block-adventure.png";
import blocks from "./images/blocks.png";
import frogger from "./images/frogger.png";
import crypto from "./images/crypto-app.png";
import news from "./images/nc-news.png";
import ncbuddy from "./images/nc-buddy.png";

const Content = () => {
  return (
    <div>
    <a target="_blank" href="http://www.indiedb.com/members/lastingspark/downloads/block-adventure" class = "block-adventure-a">
       <div class="card block-adventure">
          <img class="card-img-top" src={blockAdventure} alt="Card image cap"/>
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
 </div>
 )
}

export default Content;