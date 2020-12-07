import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class Selection extends Component {
    render() { 
        return ( 
            <div onClick={() => this.props.onSelection(this.props.selection)} className="col-2 wgBtnAsset">
                <h4><span className={this.props.selection.className}>{this.props.selection.name}</span></h4>
                <img src={this.props.selection.imgSrc} />
            </div>
         );
    }
}
 
export default Selection;