import React from "react";
import "./Cards.css";
import Aman from "../../assets/IMG_2328.JPG";
import President from "../../assets/shubham_1.jpg";
import Ritik from "../../assets/ritik.jpg";
import { AiFillLinkedin } from "react-icons/ai";
const Cards = () => {
  return (
    <div>
      <div id="header">
        <h1>ORGANISING MEMBERS</h1>
        {/* <p>Team SPEC</p> */}
      </div>
      <div class="container">
        <div class="card">
          <div class="card-image">
            <img src={President} alt="img unable to load" />
          </div>
          <div class="card-text">
            <h2 class="card-title">Shubham Gupta</h2>
            <p class="card-body">President</p>
          </div>
          <div class="card-price">
            <AiFillLinkedin></AiFillLinkedin>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <img src={Ritik} alt="img unable to load" />
          </div>
          <div class="card-text">
            <h2 class="card-title">
              Ritik<br></br> Dhiman
            </h2>
            <p class="card-body">Vice-President</p>
          </div>
          <div class="card-price">
            <AiFillLinkedin />
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <img src={Ritik} alt="img unable to load" />
          </div>
          <div class="card-text">
            <h2 class="card-title">Aman Asrani</h2>
            <p class="card-body">executive Member</p>
          </div>
          <div class="card-price">
            <AiFillLinkedin></AiFillLinkedin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
