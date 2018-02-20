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


    this.updateParents = this.updateParents.bind(this)

  }
  
  componentDidMount(){
    //axios.get(`https://api.myjson.com/bins/17ii1l`)
    axios.get('https://raw.githubusercontent.com/SUSE/frontend-challenge/master/systems-long-list.json')
      .then(res => {
        const systems = res.data[0].systems;
        this.setState({ systems });
      });
  }

  updateParents(e){
    //console.log(this.state);
    console.log(e.value);
    const {systems} = this.state;
    let systems2;
    if(e.value=="Order by Last Boot"){
      systems2 = [].concat(systems).sort((a, b) => a.id > b.id);
    }

    this.setState({ ...this.state, systems: systems2 });

  }
 
  render() {
    const {systems} = this.state;
    
    return (
      <div className="App">
        <div className="row header">
            <div className="title">SUSE Frontend Challange</div>
        </div>
        <div className="container">
          <div className="row">
              <Filter onChange={this.updateParents}/>
              <Listing sys={systems}/>
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;
