import React, { Component } from 'react';
import Moment from 'react-moment';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPowerOff from '@fortawesome/fontawesome-free-solid/faPowerOff'
import faCaretSquareRight from '@fortawesome/fontawesome-free-solid/faCaretSquareRight'
 
class ListItem extends Component {
  constructor(props){
      super(props);
        
  }
 
  render() {
    const {name, description, last_boot} = this.props;
    const lastBootDate = new Date(last_boot);

    return (
      <li>
          <div className="name">{name}</div>
          <div className="description">{description}</div>
          <div className="lastBoot">
            <span>  <FontAwesomeIcon icon={faPowerOff}/>  Last Boot : </span>
            <Moment fromNow>{lastBootDate}</Moment>
          </div>

          <a onClick={() => console.log("detail")} className="seeMore">See more details <FontAwesomeIcon icon={faCaretSquareRight}/></a>
      </li>
    );
  }
}
 
export default ListItem;
