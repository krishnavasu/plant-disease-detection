import React, { Component, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Logo from "../assests/logo.svg";
import { predictRoute } from "../utils/ApiRoutes";
import image1 from "../assests/image_1.jpg";
import image3 from "../assests/image_3.jpg";
import image4 from "../assests/image_4.jpg";
import "./uploader.css";
import "./footer.css";
import { host } from "../utils/ApiRoutes";

class Prediction extends Component {
  state = {
    title: "",
    content: "",
    image: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0],
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);
    let data = new FormData();
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    data.append("image", this.state.image, this.state.image.name);
    data.append("Authorization", `Bearer ${token}`);
    data.append("content", this.state.content);
    let url = predictRoute;

    console.log("token", token);
    await axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        this.setState({
          predictionResult: res.data.result,
          image: host + res.data.image,
        });
      })
      .catch((err) => console.log(err));
  };

  OnClick = (e) => {
    this.setState({ showStore: true });
  };

  render() {
    return (
      <div
        className="App"
        style={{ overflow: "scroll", height: "100vh", width: "100vw" }}
      >
        <form onSubmit={this.handleSubmit}>
          {/* Navbar */}

          <nav className="navbar navbar-dark bg-dark ">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                PLANT DOC
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#detect"
                    >
                      Disease Detection
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#Try"
                    >
                      Try it
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#contact"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/about"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/history"
                    >
                      History
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* Corousal */}

          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ height: "700px" }}
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src={image1}
                  className="d-block w-100"
                  alt="..."
                  style={{ height: "40vw" }}
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src={image4}
                  className="d-block w-100"
                  alt="..."
                  style={{ height: "40vw" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image3}
                  className="d-block w-100"
                  alt="..."
                  style={{ height: "40vw" }}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div id="detect" style={{ marginTop: "-60px" }}>
            <h1 className="text-center display-4 fw-bold">Disease Detection</h1>
            <p className="text-center fs-9 fw-bold">
              Crop diseases are a major threat to food security, but their rapid
              identification remains difficult in many parts of the world due to
              the lack of the necessary infrastructure. The combination of
              increasing global smartphone penetration and recent advances
              computer vision made possible by deep learning has paved the way
              for disease diagnosis.
              <br />
              Every disease, pest, and deficiency leaves behind specie pattens
              we recognize these patterns. One photo is enough and you know what
              your plant is missing
            </p>
          </div>
          <div class="file-upload">
            <div class="image-upload-wrap">
              <input
                type="file"
                id="image"
                class="file-upload-input"
                accept="image/png, image/jpeg"
                onChange={this.handleImageChange}
                required
              />

              <div class="drag-text">
                <h3>Drag and drop a file or select add Image</h3>
              </div>
            </div>
            <div class="file-upload-content">
              <img class="file-upload-image" src="#" alt="your image" />
              <div class="image-title-wrap">
                <br />
                <button
                  type="button"
                  onclick="removeUpload()"
                  class="remove-image"
                >
                  Remove <span class="image-title">Uploaded Image</span>
                </button>
              </div>
            </div>

            <button
              class="file-upload-btn"
              type="submit"
              onclick={this.setState.OnClick}
            >
              Submit
            </button>
          </div>
        </form>
        <center>
          <div>
            <p><Link to="/cures">{this.state.predictionResult}</Link></p>
            <img
              src={this.state.image}
              alt=""
              style={{ height: "10rem", display: "Block" }}
            />
            
              
            
          </div>
        </center>
        <div id="contact" class="three-column-footer-contact-form-container">
          <footer
            class="three-column-footer-contact-form"
            data-equalizer
            data-equalize-by-row="true"
          >
            <div class="footer-left" data-equalizer-watch>
              <div class="baseline">
                <div class="contact-details">
                  <h6>Contact details</h6>
                  <p>
                    <i class="fa fa-phone fa-lg" aria-hidden="true"></i> +91
                    8081161524
                  </p>
                  <p>
                    <a href="#">
                      <i class="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                      Contact us
                    </a>
                  </p>
                  <p>
                    <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i>{" "}
                    Dr. Virendra Swarup Memorial Trust Group of Institutions,Unnao,Uttar Pradesh ,India
                  </p>
                </div>
              </div>
            </div>
            <div class="footer-center" data-equalizer-watch>
              <div class="baseline">
                <div class="newsletter">
                  <h6>Contact form</h6>
                  <div class="input-group">
                    <input
                      class="input-group-field"
                      type="text"
                      placeholder="Name"
                    />
                    <br />
                    <input
                      class="input-group-field"
                      type="email"
                      placeholder="Email address"
                    />
                    <br />
                    <textarea placeholder="Message"></textarea>
                  </div>
                  <a class="btn btn-primary" href="#">
                    Submit
                  </a>
                </div>
              </div>
            </div>
            <div class="footer-right" data-equalizer-watch>
              <div class="baseline">
                <img class="thumbnail" src={Logo} style={{ height: "5rem" }} />
                <h6>PLANT DOC</h6>
                <p>We'll help you keep your plants</p>
                <p>healthy and thriving.</p>
                <div class="social">
                  <i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
                  <i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
                  <i
                    class="fa fa-google-plus-square fa-2x"
                    aria-hidden="true"
                  ></i>
                  <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Prediction;
