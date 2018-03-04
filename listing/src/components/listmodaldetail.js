import React, { Component } from 'react';

class ListModalDetail extends Component {
  constructor(props){
      super(props);

      this.state = {
        detail:this.props.sysDetail
      };

      this.printJson = this.printJson.bind(this);
      this.printNodes = this.printNodes.bind(this);
      this.getRandomArbitrary = this.getRandomArbitrary.bind(this);
  }

  printJson(json){
    let obj = JSON.parse(json);
    let objKey = Object.keys(obj[0]);
    let system = obj[0][objKey];
    let htmlMock = [<div className="systemWrapper">{objKey}</div>];

    for(var i = 0; i< Object.keys(system).length;i++){
      let systemInfoKey = Object.keys(system)[i];
      if(system[systemInfoKey] !== ""){
      htmlMock.push(<div className="mainAttr row" key={i}>
                      <div className="detailTitle col-md-3">{systemInfoKey}</div>
                      <div className="detailInfo col-md-9">{this.isObject(system[systemInfoKey])?this.printNodes(system[systemInfoKey]):system[systemInfoKey]}</div>
                    </div>)
      }
      

    }
    
    
    return htmlMock
  }
  
  isObject(obj) {
    return obj === Object(obj) || obj.constructor.name === "Array";
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }


  printNodes(json){
    
    let htmlMock = [];
    let colours = ['turquoise', 'emerald','green-sea','alizarin', 'pomegranate', 'web-asphalt', 'midnight-blue', 'pumpkin', 'carrot'];
    for(var i=0; i<json.length;i++){      
      if(json[i] !== ""){
        htmlMock.push(<div key={i} className={`detailBadge ${colours[Math.floor((Math.random() * colours.length-1) + 1)]}`}>{this.isObject(json[i]) ? this.printNodes(json[i]):json[i]}</div>)
      }
    }
    
    return htmlMock;
  }

  render() {
    const {detail} = this.state;
    return (
      <div>{this.printJson(detail)}</div>
    );
  }
}
 
export default ListModalDetail;
