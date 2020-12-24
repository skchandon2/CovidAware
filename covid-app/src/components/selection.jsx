import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class Selection extends Component {

    state = {
        cssClass: 'col-2 wgBtnAsset'
    };
    
    componentDidMount() {
        
    };

    setAssetStyle = (answerSet, curKey) => {
        
        //console.log("----===========--------")
        //console.log(answerSet)
        if(answerSet.some(a => a._id.includes(curKey)))
        {
            //this.setState({ cssClass: 'col-2 wgBtnAssetHighlight'});
            this.state.cssClass = "col-2 wgBtnAssetHighlight";
        
            /*
            this.timeout = setTimeout(() => {
                this.setState({ cssClass: 'col-2 wgBtnAsset'})
            }, 1000);
            */
        }
        else
        {
            this.state.cssClass = "col-2 wgBtnAsset";
        }
    }

    componentWillUnmount() {
        //clearTimeout(this.timeout);
    };

    render() {
        //this.setState({ cssClass: this.props.curClass});//maximum call depth exceed error. possibly due to recursive call
        this.setAssetStyle(this.props.previousCorrectAnswers, this.props.currentId);
        console.log(this.props.currentId)
        return ( 
            <div onClick={() => this.props.onSelection(this.props.selection)} className={this.state.cssClass}>

                <div className="row">
                    <div className="col-sm-12" style={{textAlign: 'center'}}>
                        <h5><span className={this.props.selection.className} style={{border: '2px solid #fff'}}>{this.props.selection.name}</span></h5>
                    </div>
                </div>

                <div className="row" style={{marginTop: -10}}>
                    <div className="col-sm-12" style={{textAlign: 'center'}}>
                        <img src={this.props.selection.imgSrc} className={this.props.selection._id ==3?"specialAssetOrange": "assetImg"}/>
                    </div>
                </div>

            </div>
         );
    }
}
 
export default Selection;