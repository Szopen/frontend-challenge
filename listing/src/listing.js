import React, { Component } from 'react';
import ListItem from './components/listitem';
 
class Listing extends Component {
  constructor(props){
      super(props);
      this.state = {
        page: 1,
      }
        
  }
  componentWillReceiveProps(){
    const {activePage} = this.props;
    this.setState({page: activePage});
  }
 
  render() {
    const {sys} = this.props;  
    const {page} = this.state;
    return (
      <div className="col-md-10">  
        <ul className="listing">
            {sys.map(function(item,index){
              if(index <= 20*page && index >= (20*page)-20){
                return <ListItem key={index} {...item}/>
              }
            })}
        </ul>
      </div>
    );
  }
}
 
export default Listing;
