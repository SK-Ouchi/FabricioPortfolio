import React, {Component} from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import {NavLink} from 'react-router-dom';
import './about.css';

class About extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <body>
                    <img src="/images/fabricio_portrait.jpg" class="img-fluid" id="aboutImg" alt="Fabricio Portrait"/>
                    <div className = "container-fluid">
    
                        <h2 id = "headBio">About Me</h2>

                        <p className = "paraBio">Fabricio Calvet-Recktenwall originates from Guayaquil, Ecuador however calls New York, USA home.  
                        He’s always been interested in capturing the mysteriousness of the human soul through his eyes of the people 
                        around him. Constantly looking for the next creative vision, location, and intriguing model; Fabricio can be 
                        found scouring Google Maps and planning the next shoot. After leaving home at the age of 20 and enlisting in 
                        the United States Navy in 2010, Fabricio held the collateral duty as Command Photographer and hasn’t laid down 
                        his camera ever since, making sure to bring his camera whenever and wherever he could.
                        <br/>
                        <br/>
                        ​What motivates Fabricio is trying to involve viewers into the image. Painting a story as you will and making 
                        you wonder the story behind the model through photography. Learning the core principles of discipline and 
                        commitment throughout his time in the Navy, you will see Fabricio apply the same principles throughout all 
                        his projects.
                        <br/>
                        <br/>
                        Interested in connecting? Contact me <NavLink to="../book">here.</NavLink>
                        </p>
                        
                    </div>
                </body> 
                <Footer/>
            </div>
        )
    }
}
export default About;