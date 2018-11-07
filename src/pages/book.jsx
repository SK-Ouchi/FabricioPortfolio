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
                        <h1 style = {{'text-align':"center"}}> WIP </h1>
                    </body>
                <Footer/>
            </div>
        );
    }
}
export default Book;