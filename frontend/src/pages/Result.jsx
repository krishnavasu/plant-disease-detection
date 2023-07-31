
import React, { Component, useState } from 'react';
import axios from 'axios';
import Logo from "../assests/logo.svg"
import { predictRoute } from '../utils/ApiRoutes';
import image1 from "../assests/image_1.jpg"
import image2 from "../assests/image_2.jpg"
import image3 from "../assests/image_3.jpg"
import image4 from "../assests/image_4.jpg"
import "./uploader.css"
import "./footer.css"





class Prediction extends Component {

    

    state = {
        title: '',
        content: '',
        image: null
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleImageChange = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    };



    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);
        let data = new FormData();
        const token = JSON.parse(localStorage.getItem("token"))
        console.log(token)
        data.append('image', this.state.image, this.state.image.name);
        data.append('Authorization', `Bearer ${token}`);
        data.append('content', this.state.content);
        let url = predictRoute;

        console.log("token", token)
        await axios.post(url, data)
            .then(res => {
                console.log(res.data)
                this.setState({
                    predictionResult: res.data.result
                })
            })
            .catch(err => console.log(err))
    };

    

    render() {
        return (
            <div className="App" style={{overflow:'scroll',height:'100vh',width:'100vw'}}>
                <form onSubmit={this.handleSubmit} >
                    

                    <div class="file-upload">
 

                        <div class="image-upload-wrap">
                        <input type="file"
                            id="image"
                            class="file-upload-input"
                           accept="image/png, image/jpeg" onChange={this.handleImageChange} required />
                            
                            <div class="drag-text">
                            <h3>Drag and drop a file or select add Image</h3>
                            </div>
                        </div>
                        <div class="file-upload-content">
                            <img class="file-upload-image" src="#" alt="your image" />
                            <div class="image-title-wrap">
                            <button type="button" onclick="removeUpload()" class="remove-image">Remove <span class="image-title">Uploaded Image</span></button>
                            </div>
                        </div>
                        
                        <button class="file-upload-btn" type="submit">Submit</button>
                    </div>

                </form>

                <br />
                <br />
                <br />
                <br />

                <p>{this.state.predictionResult}</p>
            </div>
        );
    }
}

export default Prediction
