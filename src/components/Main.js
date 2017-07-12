import React, { Component } from 'react';
import '../css/Main.css';
import Search from './children/Search';
import Results from './children/Results';
import Saved from './children/Saved';

class Main extends Component{
  render(){
    return(
      <div id="main">

        <div className="jumbotron">
          <div className="container">
            <h1 className="text-center">New York Times Article Scrubber</h1>
            <h4 className="text-center">Search for and annotate articles of interest</h4>
          </div>
        </div> {/* close jumbotron */}

        <div className="container" id="body">

          <Search />

          <Results />

          <Saved />

        </div>

      </div>
    );
  }
}

export default Main;
