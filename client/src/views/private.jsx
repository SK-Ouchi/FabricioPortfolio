import React,{Component} from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import Gallery from '../components/gallery.jsx'
import * as apiCalls from '../helpers/albumApiCalls.js';
import './private.css';


class Private extends Component{
    constructor(props){
        super(props);
        this.state = {
            gallery: [], 
            title: "Private",
            showId: this.props.match.params.id
        };
    }

    componentDidMount(){
        this.loadAlbums();
    }
    
    //Function that retrieves the JSON from the API
    async loadAlbums(){
        let albums = await apiCalls.getAlbums();
        albums = albums.filter(a=>a._id === this.state.showId);
        //Set state to todos
        this.setState({gallery:albums});
    }

    
    render(){
        return(
            <div>
                <Navbar/>
                <body>
                    <h2 className = "title">{this.state.gallery.map((value)=>value.albumName)}</h2>
                    <div className="row"> 
                        {this.state.gallery.map((value)=>
                        <div className = "column">
                            <img className = "img-fluid" src= {value.firstImage.photo} alt="item"/>
                        </div>)}
                        
                            {this.state.gallery.map((value)=>
                                value.albumImages.map((albImg) =>
                            <div className = "column">
                                    <img className = "img-fluid" src= {albImg.photo} alt="item"/> 
                            </div>))}
                        
                        
                        
                    </div>
                </body>
                <Footer/>
            </div>
        );
    }
}
export default Private;