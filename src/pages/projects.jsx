import React, {Component} from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import './projects.css';
import gallery from '../assets/JSON/gallery.json';

class Projects extends Component{
    constructor(){
        super();
        this.state = {
            gallery, 
        }

        
    }
    render(){
        return(
            <div>
                <Navbar/>
                <body>              
                    <div className="row">
                        {this.state.gallery.map((value)=>
                            <div className="column">
                                <div data-toggle="modal" data-target={"#" + value.albumId}>
                                    <a href={"#" + value.albumName} data-slide-to="0">
                                        <div className="hovereffect">
                                            <img className="img-fluid" src= {value.albumThumbnail} alt="value.albumName"/>
                                                <div className="overlay">
                                                <h2>{value.albumName}</h2>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>)
                            //end of thumbnails
                        }
                    </div>



                    {this.state.gallery.map((value)=>
                        <div className="modal fade" id={value.albumId}>
                            <div className="modal-dialog modal-full">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <div className="pull-left" id = "modalTitle">{value.albumName}</div>
                                            <button type="button" className="close" data-dismiss="modal" title="Close"> <span className="glyphicon glyphicon-remove"></span></button>
                                    </div>
                                    <div className="modal-body">

                                    {/* <!--CAROUSEL CODE GOES HERE-->

                                    <!--begin carousel--> */}

                                        <div id={value.albumName} className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active" data-slide-number= {value.firstImage.photoId}> <img className = "img-fluid" src= {value.firstImage.photo} alt="item0"/></div>
                                                {value.albumImages.map((albImg) =>
                                                    <div className="carousel-item" data-slide-number={albImg.photoId}> <img className = "img-fluid" src= {albImg.photo} alt="item1"/></div>
                                                /* <!--end carousel-inner--> */    
                                                )}
                                            </div>

                                            {/* <!--Begin Previous and Next buttons--> */}
                                            <a className="carousel-control-prev" href={"#" + value.albumName} role="button" data-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a className="carousel-control-next" href={"#" + value.albumName} role="button" data-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                            {/* <!--end carousel--> */}
                                        
                                            <ul className="carousel-indicators list-inline">
                                                <li className="list-inline-item active" data-slide-to={value.firstImage.photoId} data-target={"#" + value.albumName}>
                                                    <a id={"carousel-selector-" + value.firstImage.photoId} className="selected">
                                                        <img src={value.firstImage.photo}   alt = {value.albumName}/>
                                                    </a>
                                                </li>
                                                {value.albumImages.map((thImg) =>
                                                <li className ="list-inline-item" data-slide-to={thImg.photoId} data-target={"#" + value.albumName}>
                                                    <a id={"carousel-selector-" + value.firstImage.photoId}>
                                                        <img src={thImg.photo}   alt= {value.albumName}/>
                                                    </a>
                                                </li>
                                                )}
                                            </ul>
                                        </div>
                                    {/* <!--end modal-body--> */}
                                    </div>
                                    <div className="modal-footer">
                                        <button className="close" type="button" data-dismiss="modal">Close</button>
                                        {/* <!--end modal-footer--> */}
                                    </div>
                                    {/* <!--end modal-content--> */}
                                </div>
                                {/* <!--end modal-dialoge--> */}
                            </div>
                            {/* <!--end myModal-->> */}
                        </div>
                    )}
                </body>
                <Footer/>
            </div>
        )
    }
}
export default Projects;