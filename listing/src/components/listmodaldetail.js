import React, { Component } from 'react';

class ListModalDetail extends Component {
  constructor(props){
      super(props);

      this.state = {
        detail:this.props.sysDetail,
        systemHeader:this.props.sysHeader
      };

      this.printJson = this.printJson.bind(this);
      this.printNodes = this.printNodes.bind(this);
      this.printObject = this.printObject.bind(this);

      this.getRandomArbitrary = this.getRandomArbitrary.bind(this);

  }

  printJson(json){
    let obj = JSON.parse(json);
    let objKey = Object.keys(obj[0]);
    let system = obj[0][objKey];
    let htmlMock = [];    
    for(var i = 0; i< Object.keys(system).length;i++){
      let systemInfoKey = Object.keys(system)[i];
    
      if(system[systemInfoKey] != "" || system[systemInfoKey].length > 0){
        htmlMock.push(<div className="mainAttr row" key={i}>
                        <div className="detailTitle col-md-3">{systemInfoKey}</div>
                        <div className="detailInfo col-md-9">{this.isArray(system[systemInfoKey])?this.printNodes(system[systemInfoKey]):this.isObject(system[systemInfoKey])?this.printJsonNode(system[systemInfoKey]):system[systemInfoKey]}</div>
                      </div>)
        }
      

    }
    
    
    return htmlMock;
  }
  
  printJsonNode(json){
    let htmlMock = [];
    let colours = ['turquoise', 'emerald','green-sea','alizarin', 'pomegranate', 'web-asphalt', 'midnight-blue', 'pumpkin', 'carrot'];

    for(var i=0;i<Object.keys(json).length; i++){
      let key = Object.keys(json)[i];
      let randomColor = colours[Math.floor((Math.random() * colours.length-1) + 1)];

      htmlMock.push(<div key={i} className={`detailBadge ${randomColor}`}>{key} : {json[key]}</div>);

    }
    return htmlMock;
  }

  isObject(obj) {
    return obj === Object(obj) || obj.constructor.name === "Object";
  }

  isArray(arr){
    return "Array" == arr.constructor.name;
  }
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }


  printNodes(json){
    
    let htmlMock = [];
    let colours = ['turquoise', 'emerald','green-sea','alizarin', 'pomegranate', 'web-asphalt', 'midnight-blue', 'pumpkin', 'carrot'];
    //console.log(json);
    for(var i=0; i<json.length;i++){
      let randomColor = colours[Math.floor((Math.random() * colours.length-1) + 1)];
      htmlMock.push(<div key={i} className={`detailBadge ${randomColor}`}>{this.isArray(json[i]) ? this.printNodes(json[i]):this.isObject(json[i])?this.printJsonNode(json[i]):json[i]}</div>)
    }
    
    return htmlMock;  
  }

  printObject(obj){

  }

  render() {
    const {detail,systemHeader} = this.state;
    return (
      <div>
        <div className="systemWrapper">{systemHeader}</div>
        <div>{this.printJson(detail)}</div>
      </div>
    );
  }
}
 
export default ListModalDetail;
