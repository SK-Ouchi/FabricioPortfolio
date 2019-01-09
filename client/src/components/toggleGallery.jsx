import React, {Component} from 'react';
import './toggleGallery.css';

class ToggleGallery extends Component {
    constructor(props) {
      super(props);
        this.state = { 
            key: 1
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
  
    handleSelect(key, gallType) {
      this.props.toggleForm(gallType);
      this.setState({ key});
    }
  
    render(){
      return (
        <div className = "center">
            <div activeKey={this.state.key}>
                <button eventKey={1} id = "toggle" type="button" class="btn btn-light" title="All" onClick={() => this.handleSelect(1, 'gallAll')}>All</button>
                <button eventKey={2} id = "toggle" type="button" class="btn btn-light" title="Posed" onClick={() => this.handleSelect(2, 'gallPosed')}>Posed</button>
                <button eventKey={3} id = "toggle" type="button" class="btn btn-light" title="Environmental" onClick={() => this.handleSelect(3, 'gallEnvi')}>Environmental</button>
                <button eventKey={4} id = "toggle" type="button" class="btn btn-light" title="Formal" onClick={() => this.handleSelect(4, 'gallFormal')}>Formal</button>
            </div>
        </div>
      );
    }
  }

export default ToggleGallery;