import React,{Component} from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import './home.css';


class Home extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <body>
                    <div className="row">
                        
                        <div className="column">
                            <img src= {require("../assets/images/IMG_1.jpg")} className="img-fluid" alt = {"1"}/>
                        </div>
                        
                        <div className="column">
                            <img src={require("../assets/images/IMG_2.jpg")} className="img-fluid" alt={"2"}/>
                        </div>
                        
                        <div className="column">
                            <img src={require("../assets/images/IMG_1.jpg")} className="img-fluid" alt={"3"}/>
                        </div>
                        
                        <div className="column">
                            <img src={require("../assets/images/IMG_2.jpg")} className="img-fluid" alt={"4"}/>
                        </div>
                    
                    </div>
                </body>
                <Footer/>
            </div>
        );
    }
}
export default Home;