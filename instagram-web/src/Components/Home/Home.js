import React, { Component } from "react";
import Logo from "../../assets/logo.png";
import Divider from "muicss/lib/react/divider";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
      FullName: "",
      Username: "",
      Password: ""
    };
  }
  render() {
    return (
      <div className="homepage">
        <div className="left-div" />
        <div className="right-div">
          <div className="right-div-one">
            <div className="main-logo-top">
              <img className="logo-pic" src={Logo} alt="" />
            </div>
            <div className="sign-up-to-see">
              <p>Sign up to see photos and videos from your friends.</p>
            </div>
            <div className="blue-facebook">
              <button className="blue-button"> Log in with Facebook </button>
            </div>
            <div className="or-box">
              <div className="divider">
                <Divider />
              </div>
              <div className="center-or">OR</div>
              <div className="divider">
                <div>
                  <Divider />
                </div>
              </div>
            </div>
            <div className="input-holders">
              <div className="field">
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Jane Appleseed"
                  label="fullname"
                  for="fullname"
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Jane Appleseed"
                  label="fullname"
                  for="fullname"
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Jane Appleseed"
                  label="fullname"
                  for="fullname"
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Jane Appleseed"
                  label="fullname"
                  for="fullname"
                />
              </div>
            </div>
            {/* Input stops ^ there*/}
            <div className="blue-facebook">
              <button className="blue-button"> Sign up </button>
            </div>
            <div className="bottom-terms">
              By signing up, you agree to our <strong>Terms</strong> &{" "}
              <strong>Privacy Policy</strong>.
            </div>
          </div>
          <div className="right-div-two">
            <div className="login">
              Have an account? <a href="">Log in</a>
            </div>
            <div className="get-the-app">
              <p>Get the app.</p>
              <br />
              <div className="right-bottom-app-buttons">
                <div className="bottom-button">
                  <img
                    className="button-pic"
                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/4b70f6fae447.png"
                    alt=""
                  />
                </div>
                <div className="bottom-button">
                  <img
                    className="button-pic"
                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/f06b908907d5.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
