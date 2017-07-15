import React, { Component } from 'react';
import '../../css/Search.css';

class Search extends Component{

  constructor(){
    
  }

  render(){
    return (
      <div className="panel panel-default" >
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search</h3>
        </div>
        <div className="panel-body">
          <form >
            <div className="input-group center-dis input-field" id="field-one">
              <label for="topic">Topic</label><br />
              <input className="form-control" type="text" name="topic" value="topic"/>
            </div>

            <div className="input-group center-dis input-field" id="field-two">
              <label for="topic">Start Year</label><br />
              <input className="form-control" type="text" name="start-year" value="start-year"/>
            </div>

            <div className="input-group center-dis input-field" id="field-three">
              <label for="topic">End Year</label><br />
              <input className="form-control" type="text" name="end-year" value="end-year"/>
            </div>
          </form>
          </div>
        </div>
    );
  }
}

export default Search;
