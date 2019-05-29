import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

    handlePicture = (photo) => {
        const data = {
        'photo': photo[0]
        }
        axios.post('/upload', data)
    }

    componentDidMount(){
        axios.get('/test');
    }
    render() {
        return (
        <div className="App">
            <input type="file" name="image" accept="image/*" onChange={(e) => this.handlePicture(e.target.files)}></input>
        </div>
        );
    }
}

export default App;


// const data = {
//   'photo': e.target.files[0]
// }

// axios.post('/upload', data)