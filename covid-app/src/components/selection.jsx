import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Selection extends Component {
    state = {  }
    handleSelection = obj => {
        console.log('TODO match answer with the question', obj.id);
    }
    render() { 
        return ( 
            <div className="row">
                    <div className="col-1"></div>
                    <div className="col-2 wgBtnAsset" id="asset1" data-assettype="1" onClick={() => this.handleSelection({ id: 1})}><h4><span className="badge badge-success">Green Zone</span></h4><img src="images/covid-prevent.svg" /></div>
                    <div className="col-2 wgBtnAsset" id="asset2" data-assettype="2" onClick={this.handleSelection}><h4><span className="badge badge-warning">Yellow Zone</span></h4><img src="images/covid-protect.svg" /></div>
                    <div className="col-2 wgBtnAsset" id="asset3" data-assettype="3" onClick={this.handleSelection}><h4><span className="badge badge-warning" style={ { backgroundColor: "rgb(224, 146, 0)" } }>Orange Zone</span></h4><img src="images/covid-restrict.svg" /></div>
                    <div className="col-2 wgBtnAsset" id="asset4" data-assettype="4" onClick={this.handleSelection}><h4><span className="badge badge-danger">Red Zone</span></h4><img src="images/covid-control.svg" /></div>
                    <div className="col-2 wgBtnAsset" id="asset5" data-assettype="5" onClick={this.handleSelection}><h4><span className="badge badge-secondary">Grey Zone</span></h4><img src="images/covid-lockdown.svg" /></div>
                    <div className="col-2"></div> 
                </div>
         );
    }
}
 
export default Selection;