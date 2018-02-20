import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'


class Filter extends Component {
  constructor(props){
    super(props);

  }
  _onSelect(){
    console.log("selection");
  }
 
  render() {
    const options = [
      'Order by Last Boot', 'Order by Name', 'Order by '
    ]
    return (
      <div className="col-md-2">  
        <div className="filterWrapper">
          <div className="title">Settings</div>
          <Dropdown options={options} onChange={this.props.onChange} value={options[0]} placeholder="select order type"/>
        </div>
      </div>
    );
  }
}
 
export default Filter;
