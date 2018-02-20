import React, { Component } from 'react';
import Filter from './filter';
import Listing from './listing';
import axios from 'axios';
 
import './App.css';
 
 
class App extends Component {
  constructor(){
    super();
    this.state = {
      systems:[]
    };
  }
  
  componentDidMount(){
    axios.get(`https://api.myjson.com/bins/17ii1l`)
      .then(res => {
        const systems = res.data[0].systems;
        this.setState({ systems });
      });
  }
 
  render() {
    const {systems} = this.state;
    
    return (
      <div className="App">
        <div className="container">
          <div className="row header">
              <div className="title">SUSE Frontend Challange</div>
          </div>
          <div className="row">
              <Filter />
              <Listing sys={systems}/>
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;
