import React, { Component } from 'react';
import Filter from './filter';
import Listing from './listing';
import axios from 'axios';
import Pagination from "react-js-pagination";


import './App.css';
 
 
class App extends Component {
  constructor(){
    super();
    this.state = {
      systems:[],
      activePage:1,
    };


    this.updateParents = this.updateParents.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  
  componentDidMount(){
    //axios.get(`https://api.myjson.com/bins/17ii1l`)
    //axios.get('https://raw.githubusercontent.com/SUSE/frontend-challenge/master/systems-long-list.json')
    axios.get('http://localhost:8000/systems-long-list.json')
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
    if(e.value === "Order by Last Boot"){
      systems2 = [].concat(systems).sort((a, b) => a.id > b.id);
    }

    this.setState({ ...this.state, systems: systems2 });

  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }
 
  render() {
    const {systems} = this.state;
    
    return (
      <div className="App">
       <div className="header">
          <div className="row">
            <div className="container title">SUSE Frontend Challenge</div>
          </div>
        </div>
        <div className="container">
          <div className="row">
              {/*<Filter onChange={this.updateParents}/>*/}
              <Listing activePage={this.state.activePage} sys={systems}/>
          </div>
          <div className="row">
          <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange} />
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;
