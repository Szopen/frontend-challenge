import React, { Component } from 'react';
import ListItem from './components/listitem';
 
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
                return <ListItem key={index} {...item}/>
            })}
        </ul>
      </div>
    );
  }
}
 
export default Listing;
