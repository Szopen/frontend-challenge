import React, { Component } from 'react';
 
class ListItem extends Component {
  constructor(props){
      super(props);
        
  }
 
  render() {
    const {name, description} = this.props;
    return (
      <li>
          <div className="name">{name}</div>
          <div className="description">{description}</div>
      </li>
    );
  }
}
 
export default ListItem;
