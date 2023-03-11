import React from "react";
import "./Home.css";
import model from "../../Image/sec 1 girl.png";
import vector9 from "../../Image/Vector9.png";
import Layout from "../Layout/Layout";
import hnm from "../../Image/sec2/H_M-removebg-preview.png";
import obey from "../../Image/sec2/obey-removebg-preview.png";
import shopift from "../../Image/sec2/Shopify-removebg-preview.png";
import lacoste from "../../Image/sec2/Lacoste-removebg-preview.png";
import levis from "../../Image/sec2/Levis-removebg-preview.png";
import amazon from "../../Image/sec2/amazon-removebg-preview.png";
import modelone from "../../Image/sec3/model1.png";
import modeltwo from "../../Image/sec3/model2.png";
import modelthree from "../../Image/sec3/model3.png";
import modelfour from "../../Image/sec4/sec_four-model-removebg-preview.png";
import imgone from "../../Image/sec5/img1.png";
import imgtwo from "../../Image/sec5/img2.png";
import imgthree from "../../Image/sec6/mobile-removebg-preview.png";
import imgfour from "../../Image/sec6/apple.png";
import imgfive from "../../Image/sec6/android.png";
import { NavLink } from "react-router-dom";

const Home = ({ globalState }) => {
  return (
    <Layout globalState={globalState}>
      <div className="home">
        {/* Section 1 */}
        <div className="sec-one">
          <div className="home-text">
            <h1>LET'S</h1>
            <h1>EXPLORE</h1>
            <h1 className="unique">UNIQUE</h1>
            <h1>CLOTHES.</h1>
            <p>Live for Influential and Innovative fashion!</p>
            <div>
              <img className="btn-img" src={vector9} alt=""></img>
              <button className="sec-one-btn">Shop Now</button>
            </div>
          </div>
          <div className="home-img-div">
            <img className="home-img" src={model} alt=""></img>
          </div>
        </div>
        {/* Section 2 */}
        <div className="sec-two">
          <div>
            <img src={hnm} alt=""></img>
          </div>
          <div>
            <img src={obey} alt=""></img>
          </div>
          <div>
            <img src={shopift} alt=""></img>
          </div>
          <div>
            <img src={lacoste} alt=""></img>
          </div>
          <div>
            {" "}
            <img src={levis} alt=""></img>
          </div>
          <div>
            {" "}
            <img src={amazon} alt=""></img>
          </div>
        </div>
        {/* Section 3 */}
        <div className="sec-three">
          <h1>NEW ARRIVALS</h1>
          <div className="sec-three-card">
            <div className="card">
              <img src={modelone} alt=""></img>
              <h4>Hoodies & Sweetshirt</h4>
              <small>Explore Now!</small>
            </div>
            <div className="card">
              <img src={modeltwo} alt=""></img>
              <h4>Coats & Parkas</h4>
              <small>Explore Now!</small>
            </div>
            <div className="card">
              <img src={modelthree} alt=""></img>
              <h4>Tees & T-Shirt</h4>
              <small>Explore Now!</small>
            </div>
          </div>
        </div>
        {/* Section 4 */}
        <div className="sec-four">
          <div className="sec-four-img-div">
            <img src={modelfour} alt=""></img>
          </div>
          <div className="sec-four-info-div">
            <h1>PAYDAY</h1>
            <h1>SALE NOW</h1>
            <p>
              Spend minimal $100 get 30% off voucher code for your next purchase
            </p>
            <h4>1 June - 10 June 2023</h4>
            <p>*Terms & Conditions apply</p>
            <button className="sec-four-btn">SHOP NOW</button>
          </div>
        </div>

        {/* Section 5 */}
        <div className="sec-five">
          <div className="card">
            <img src={imgone} alt=""></img>
            <h4>Trending on instagram</h4>
            <small>Explore Now!</small>
          </div>
          <div className="card">
            <img src={imgtwo} alt=""></img>
            <h4>All Under $40</h4>
            <small>Explore Now!</small>
          </div>
        </div>
        {/* Section 6 */}
        <div className="sec-six">
          <div className="sec-six-info">
            <h3>DOWNLOAD APP & </h3>
            <h3>GET THE VOUCHER!</h3>
            <small>
              Get 30% off for first transaction using Rondovision mobile app for
              now.
            </small>
            <div className="sec-six-button-div">
              <NavLink>
                <img className="sec-six-btn-img" src={imgfour} alt=""></img>
              </NavLink>
              <NavLink>
                <img className="sec-six-btn-img" src={imgfive} alt=""></img>
              </NavLink>
            </div>
          </div>
          <div className="sec-six-img">
            <img src={imgthree} alt=""></img>
          </div>
        </div>
        {/* Section 7 */}
        <div className="sec-seven">
          <h3>JOIN SHOPPING COMMUNITY TO </h3>
          <h3>GET MONTHLY PROMO</h3>
          <p>Type your email down below and be young wild generation</p>
          <div className="sec-seven-input">
            <input
              className="input"
              type="email"
              placeholder="Add your email here"
            ></input>
            <button className="input-btn">SEND</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
