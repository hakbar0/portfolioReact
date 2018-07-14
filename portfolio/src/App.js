import React, { Component } from "react";
import Unity, {UnityContent} from "react-unity-webgl";

import "./styles/main.css";

import Content from "./Content"

import logo from "./images/play-button1.png";

import space from "./images/space.png";
import hack from './images/hack.png';

import github from "./images/github.png";
import youtube from "./images/youtube.png";
import linkedin from "./images/linkedin.svg";

class App extends Component {

state = {
  title: "",
  image: "",
  style: "none",
  space: false,
  hacker: false,
  instruction: "",
  height: "100%",
  width: "100%",
}

modelBox = (title, image, space, hacker, instruction) => {
  this.setState({title});
  this.setState({image});
  this.hide("block");
  this.setState({space});
  this.setState({hacker});
  this.setState({instruction});
}

hide = (status) => {
this.setState({style: status});
this.setState({hacker: false});
this.setState({space: false});
}

percent = () =>{
  if(window.innerWidth > 1100) {
    this.setState({height: "450px"});
    this.setState({width: "100%"});
  }
  else if(window.innerWidth > 1400) {
    this.setState({height: "475px"});
    this.setState({width: "100%"});
  }
}

componentWillMount(){
  setInterval(() => this.percent(), 1000);
}

hacker = new UnityContent(
  "games/hacker/Build/hacker.json",
  "games/hacker/Build/UnityLoader.js"
);

space = new UnityContent(
  "games/Space-Cuisine/Build/Space-Cuisine.json",
  "games/Space-Cuisine/Build/UnityLoader.js"
)


  render() {
    return (
      <div className="App">
        <div className = "Content">
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
              Hi, I’m Haseeb Akbar, a junior <span> developer</span> living in
              Basingstoke and working at Starkwood Media.
            </p>
          </content>

          <featured>
            <p class="featured">
              Featured
              <span style={{ color: "gold" }}> Work</span>
            </p>
            <work>

              <div className ="space-a">
              <div className = "card space" onClick = {this.modelBox.bind(null, 'Space Cuisine', 'space', true, false, "Use the arrows keys to move and space to hover. Please wait patiently for the game to load and click on the black screen.")}>
              <img 
              className="card-img-top"
              src={space}
              alt="Card image cap"/>
              <div class="card-body">
                    <h5 class="card-title">Space Cuisine</h5>
                  </div>
                </div>
                </div>

                <div className ="hack-a">
                <div className = "card hack" onClick = {this.modelBox.bind(null, 'Terminal Hacker', 'hack', false, true, "Type the password, which has been mixed. Please wait patiently for the game to load and click on the black screen.")}>
              <img 
              className="card-img-top"
              src={hack}
              alt="Card image cap"
              />
              <div class="card-body">
                    <h5 class="card-title">Terminal Hacker</h5>
                  </div>
                </div>
                </div>

                <Content/>

   
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

      <div id="myModal" className={`modal`} style={{ display: this.state.style }}>
      <div className={`modal-content`}>
       <div className ="cross"> <span className={`close`} onClick={this.hide.bind(null, "none")}>&times;</span> </div>
        <h1>{this.state.title}</h1>

          <div className = "unity">
          {this.state.hacker&& <Unity unityContent={this.hacker} className="my-unity-app" height={this.state.height} width = {this.state.width}/>  }
          {this.state.space&& <Unity unityContent={this.space} className="my-unity-app" height= {this.state.height} width = {this.state.width}/>  }
         <div id = "note">Do not resize screen once game has loaded.</div>
          </div>

          <div className ="instruction">{this.state.instruction}</div>
          
      </div>
    </div>
}
      </div>
    );
  }
}

export default App;
