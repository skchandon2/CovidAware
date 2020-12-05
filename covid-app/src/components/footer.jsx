import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Footer extends Component {
    state = {  }
    render() { 
        return (
            <footer className="page-footer font-small blue pt-4">
            <div className="footer-copyright text-center py-3">
                © 2020 Copyright: Covid Aware, Covid Awareness Building Game. 
            </div>
        </footer>
          );
    }
}
 
export default Footer;