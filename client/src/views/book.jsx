import React,{Component} from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import './book.css';


class Book extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                    <body>
                    <h2 id = "headBio">Contact Me</h2>
                    
                    <p id = "contactInfo">
                        19851 25th Ave NE <br/>
                        Shoreline, WA 98155 <br/>
                        fabricio.c.recktenwall@gmail.com<br/>
                        Tel: (206) 271-3899
                    </p>

                    <form action="https://formspree.io/fabricio.c.recktenwall@gmail.com" method="POST">
                        <div class="form-group">
                            <input type="text" class="form-control" id="frmInp" placeholder="Name" name = "name"/>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" id = "frmInp" placeholder="Email" name = "email"/>
                        </div>
                            
                        <div class="form-group">
                            <textarea class="form-control" id="frmInp" rows="5" placeholder="Message" name = "message"></textarea>
                        </div>
                        <button type="submit" id = "frmBtn" class="btn">Send</button>
                    </form>   
                    </body>
                <Footer/>
            </div>
        );
    }
}
export default Book;