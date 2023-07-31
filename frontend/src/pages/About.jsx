import React from "react";
import "./about.css";
import image from "../assests/gop.jpg";
import image1 from "../assests/deepak.jpg";
import image2 from "../assests/shivam.jpg";
import image3 from "../assests/mayank.jpg";
import styled from "styled-components";

function About() {
  return (
    <div style={{ overflow: "scroll", height: "100vh", width: "100vw" }}>
      <div class="about-section">
        <h1>About Us</h1>
        <p>
          Plant disease detection using deep learning is a rapidly developing
          field with the potential to revolutionize the agricultural industry.
          Deep learning models can be trained to identify plant diseases with
          high accuracy, even in the early stages of development. This can help
          farmers to take early action to prevent the spread of disease and
          protect their crops. There are a number of different deep learning
          models that have been developed for plant disease detection. Some of
          the most common models include convolutional neural networks (CNNs)
          and recurrent neural networks (RNNs). CNNs are well-suited for image
          classification tasks, while RNNs are better at processing sequential
          data. In order to train a deep learning model for plant disease
          detection, a large dataset of images of healthy and diseased plants is
          required. This dataset can be collected by farmers, researchers, or
          even volunteers. Once the dataset is collected, it can be used to
          train the deep learning model. Once the deep learning model is
          trained, it can be used to detect plant diseases in new images. This
          can be done by uploading the image to a web app or by using a mobile
          app. The app will then use the deep learning model to identify any
          diseases that are present in the image. Plant disease detection using
          deep learning is a powerful tool that can help farmers to protect
          their crops. This technology is still under development, but it has
          the potential to revolutionize the agricultural industry.
        </p>
      </div>

      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div class="row">
        <div class="column">
          <div class="card">
            <img src={image1} alt="Jane" style={{ width: "100%" }} />
            <div class="container">
              <h2>Deepak Yadav</h2>
              <p>
                B.tech 4th year ( Computer Science & Engineering)
                <br />
                Dr. Virendra Swarup Memorial Trust Group of
                Institutions,Unnao
              </p>
              <p>deepak226713@gmail.com</p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src={image2} alt="Mike" style={{ width: "100%" }} />
            <div class="container">
              <h2>Shivam Agarwal</h2>
              <p>
                B.tech 4th year ( Computer Science & Engineering)
                <br />
                Dr. Virendra Swarup Memorial Trust Group of
                Institutions,Unnao
              </p>
              <p>yogendraa63@gmail.com</p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src={image} alt="John" style={{ width: "100%" }} />
            <div class="container">
              <h2>Gopal Sachan</h2>
              <p>
                B.tech 4th year ( Computer Science & Engineering)
                <br />
                Dr. Virendra Swarup Memorial Trust Group of
                Institutions,Unnao
              </p>
              <p>gopalsachan7@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img
              src={image3}
              alt="John"
              style={{ width: "100%" }}
            />
            <div class="container">
              <h2>Mayank Kushwaha</h2>
              <p>
                B.tech 4th year ( Computer Science & Engineering)
                <br />
                Dr. Virendra Swarup Memorial Trust Group of
                Institutions,Unnao
              </p>
              <p>deepak226713@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
