import React, { Component } from 'react';
import Moment from 'react-moment';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPowerOff from '@fortawesome/fontawesome-free-solid/faPowerOff'
import faCaretSquareRight from '@fortawesome/fontawesome-free-solid/faCaretSquareRight'
 
class ListItem extends Component {
  constructor(props){
      super(props);

      this.state = {
        isModalOpen:false,
      }
    this.openModal = this.openModal.bind(this);    
  }

  openModal() {
    this.setState({isModalOpen:true })
  }


  render() {
    const {name, description, last_boot, id} = this.props;
    const lastBootDate = new Date(last_boot);
    const {isModalOpen} = this.state;

    return (
      <li>
          <div className="name">{name}</div>
          <div className="id">{id}</div>
          <div className="description">{description}</div>
          <div className="lastBoot">
            <span>  <FontAwesomeIcon icon={faPowerOff}/>  Last Boot : </span>
            <Moment fromNow>{lastBootDate}</Moment>
          </div>

          <a onClick={() => this.openModal()} className="seeMore">See more details <FontAwesomeIcon icon={faCaretSquareRight}/></a>
          {isModalOpen &&
          <div className={"modal"}>
            <div className={"detail"}></div>
          </div>
          }
      </li>
    );
  }
}
 
export default ListItem;
