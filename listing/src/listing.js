import React, { Component } from 'react';
 
class Listing extends Component {
  constructor(props){
      super(props);
        
  }
 
  render() {
    const {sys} = this.props;  
 
    return (
      <div className="col-md-10">  
        <ul className="listing">
            {sys.map(function(item,index){
                return <li key={index}>{item.description}</li>;
            })}
        </ul>
      </div>
    );
  }
}
 
export default Listing;
