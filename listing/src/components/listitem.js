import React, { Component } from 'react';
import Moment from 'react-moment';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes'
import faPowerOff from '@fortawesome/fontawesome-free-solid/faPowerOff'
import faDesktop from '@fortawesome/fontawesome-free-solid/faDesktop'
import faCaretSquareRight from '@fortawesome/fontawesome-free-solid/faCaretSquareRight'
import Axios from 'axios';
import ListModalDetail from './listmodaldetail';
 
class ListItem extends Component {
  constructor(props){
      super(props);

      this.state = {
        isModalOpen:false,
        system: []
      }
    this.openModal = this.openModal.bind(this);    
    this.closeModal = this.closeModal.bind(this); 
  }

  openModal() {
    Axios.get('../data/system-details.json')
    .then(res => {
      const systemDetail = []
      systemDetail.push(JSON.stringify(res.data.return));

      //console.log(systemDetail);
      this.setState({isModalOpen:true, system:systemDetail });
    })
  }

  closeModal(e){
    console.log(e.target)
    if(e.target.className == "custom-modal" || e.target.className == "close-modal"){
      this.setState({isModalOpen:false});
    }
  }

  
    
  

  render() {
    const {name, description, last_boot, id} = this.props;
    const lastBootDate = new Date(last_boot);
    const {isModalOpen, system} = this.state;

    return (
      <li>
          <div className="icon"><FontAwesomeIcon icon={faDesktop}/></div>
          <div className="name">{name}</div>
          <div className="id">{id}</div>
          <div className="description">{description}</div>
          <div className="lastBoot">
            <span>  <FontAwesomeIcon icon={faPowerOff}/>  Last Boot : </span>
            <Moment fromNow>{lastBootDate}</Moment>
          </div>

          <a onClick={this.openModal} className="seeMore">See more details <FontAwesomeIcon icon={faCaretSquareRight}/></a>
          {isModalOpen &&
          <div className={"custom-modal"} onClick={(e) => this.closeModal(e)}>
            <div className={"detail"}>
                <div className={"close-modal"} onClick={(e) => this.closeModal(e)}>
                X
                </div>
                <ListModalDetail sysDetail={system}/>
            </div>
          </div>
          }
      </li>
    );
  }
}
 
export default ListItem;
