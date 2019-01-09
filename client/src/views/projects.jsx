import React, {Component} from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import gallery from '../assets/JSON/gallery.json';
import ToggleGallery from '../components/toggleGallery';
import Gallery from '../components/gallery.jsx'
import * as apiCalls from '../helpers/albumApiCalls.js';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {
            gallery: [], 
            galleryType: 'gallAll',
            title: "All"
        };
        this.toggleForm = this.toggleForm.bind(this); 
    }

    componentDidMount(){
        this.loadAlbums();
    }
    
    //Function that retrieves the JSON from the API
    async loadAlbums(){
        let albums = await apiCalls.getAlbums();
        //Set state to todos
        this.setState({gallery:albums});
    }

    getGalleryType(galleryType){
        const galleries ={
            gallAll: <Gallery title = "All" galleryType = {this.state.gallery}/>,
            gallPosed: <Gallery title = "Posed" galleryType = {this.state.gallery.filter(a=>a.type ==="posed")}/>,
            gallEnvi: <Gallery title = "Environmetal" galleryType = {this.state.gallery.filter(a=>a.type ==="environmental")}/>,
            gallFormal: <Gallery title = "Formal" galleryType = {this.state.gallery.filter(a=>a.type ==="formal")}/>
        };

        return galleries[galleryType];
    }

    toggleForm(galleryType) {
        this.setState({ galleryType });
    }

    render(){
        return(
            <div>
                <Navbar/>
                <body>              
                <ToggleGallery toggleForm={this.toggleForm}/>
                {this.getGalleryType(this.state.galleryType)}
                </body>
                <Footer/>
            </div>
        )
    }
}
export default Projects;