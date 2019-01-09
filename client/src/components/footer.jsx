import React, {Component} from 'react';
import './footer.css';

class Footer extends Component{
    render(){
        return(
            <div>
                <footer class ="footer fixed-bottom">
                    <span>
                        <a href="https://www.facebook.com/fabriciocrecktenwallphotography/"><img src={require("../assets/images/instagram.png")} className="img-fluid" alt="Instagram" id = "footImg"/></a>
                        <a href="https://www.facebook.com/fabricio.calvetrecktenwall"><img src={require("../assets/images/facebook.png")} classNames="img-fluid" alt="Facebook" id = "footImg"/></a>
                    </span>
                </footer>
            </div>
        )
    }
}

export default Footer;