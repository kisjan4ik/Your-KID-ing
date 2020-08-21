import React from "react";
import Iframe from "react-iframe";



function MyGames() {
 
    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;js.src = "//cdn1.kidmons.com/sdk/embed.js";
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'spritted-sdk'));
    return (
        <iframe height="400px"  width="800px"src="https://kidmons.com/game/puzzle-4-kids" >
         
      </iframe>
    );
  }
  
  export default MyGames;