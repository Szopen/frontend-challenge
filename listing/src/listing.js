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
      <div className="col-md-12">  
        <ul className="listing">
            {sys.map(function(item,index){
              if(index <= 10*page && index >= (10*page)-10){
                return <ListItem key={index} {...item}/>
              }
            })}
        </ul>
      </div>
    );
  }
}
 
export default Listing;
