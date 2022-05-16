//import "./signup.css"
import { useState, useEffect } from "react";
import { Button } from "antd";
import axios from "axios";
import "../components/signup.css"

export const Signup = () => {
  const [user, setuser] = useState({});
  function handle(e) {
    e.preventDefault();
    console.log(user);
    if (user.confirm !== user.password) {
      alert("password and confirm password not same");
    } else {
      axios
        .post("https://shop-clone-api.herokuapp.com/register", { ...user })
        .then(function (response) {
          console.log(response);
          //alert(response.data.meaasge)
          if (response.data.status == true) {
            alert("Account created successfully");
          } else {
            alert("Email.Already Exists");
          }
        })
        .catch(function (error) {
          console.log(error);
          alert("Email Already Exists");
        });
     
    }
  }
  const getInputData = (e) => {
   
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };
   

  return (
    <>
      <div className="main_div">
        <form onSubmit={handle} action="">
          <div>
            <h1>Creat an account</h1>
            <p
              style={{
                color: "grey",
                fontWeight: "light",
                fontSize: "19px",
                lineHeight: "2px",
              }}
            >
              *Indicates required field
            </p>

            <div className="details">
              <div className="singup_firtsname">
                <div>
                  <p style={{ marginBottom: "2px", fontSize: "19px" }}>
                    First name*
                  </p>
                  <input
                    name="firstName"
                    onChange={getInputData}
                    type="text"
                    placeholder="First name here"
                  />
                </div>
                <div className="signup_lastname">
                  <p style={{ marginBottom: "2px", fontSize: "19px" }}>
                    Last name*
                  </p>
                  <input
                    name="lastName"
                    onChange={getInputData}
                    type="text"
                    placeholder="Last name here"
                  />
                </div>
              </div>

              <div className="signup_email">
                <p style={{ marginBottom: "2px", fontSize: "19px" }}>
                  Email address*
                </p>
                <input
                  name="email"
                  onChange={getInputData}
                  type="text"
                  placeholder="yourname@example.com"
                />
              </div>

              <div className="signup_pass">
                <div>
                  <p style={{ marginBottom: "2px", fontSize: "19px" }}>
                    Password* (Atleast 7 characters)
                  </p>
                  <input
                    name="password"
                    onChange={getInputData}
                    type="password"
                    placeholder="Please enter a minimum of 7 characters"
                  />
                </div>
                <div className="confirm_pass">
                  <p style={{ marginBottom: "2px", fontSize: "19px" }}>
                    Confirm password*
                  </p>
                  <input
                    name="confirm"
                    onChange={getInputData}
                    type="password"
                    placeholder="Please reenter your password"
                  />
                </div>
              </div>
              <h3 style={{ fontSize: "19px" }}>
                Text Message (SMS) Alerts: (Optional)
              </h3>
              <div className="checkbox">
                <input
                  onChange={getInputData}
                  type="checkbox"
                  style={{ width: "20px", height: "20px" }}
                />
                <span className="checked_text" style={{ fontSize: "19px" }}>
                  Do you want to sign up for Shopper alerts from SHOP.COM?
                  (Message and data rates may apply.)
                </span>
              </div>

              <div className="signup_mobile">
                <p style={{ marginBottom: "2px", fontSize: "19px" }}>
                  Enter a mobile number
                </p>
                <input
                  name="phone"
                  onChange={getInputData}
                  type="number"
                  placeholder="Please enter your 10 digit phone number i.e (999 999 9999)"
                />
              </div>

              <div className="reference">
                <p style={{ marginBottom: "2px", fontSize: "19px" }}>
                  Were you referred by a friend?
                </p>
                <p style={{ marginBottom: "2px", fontSize: "19px" }}>
                  Enter their email address (Optional)
                </p>
                <input type="email" />
              </div>
              <p>Your Shop Consultant is SHOP.COM</p>

              <div className="email_checked">
                <h3>Email deals: (Optional)</h3>
                <input
                  type="checkbox"
                  defaultChecked
                  style={{ width: "20px", height: "20px" }}
                />
                <span className="checkbox_text" style={{ fontSize: "19px" }}>
                  Do you want to sign up for sweet email offers and discounts
                  from SHOP.COM?
                </span>
                <br />
                <input
                  type="checkbox"
                  defaultChecked
                  style={{ width: "20px", height: "20px" }}
                />
                <span className="checkbox_text" style={{ fontSize: "19px" }}>
                  Do you want to sign up for sweet email offers and discounts
                  from MarketAmerica.com and its brands?
                </span>
              </div>
            </div>
            <input type="submit" value="submit"></input>
            <Button className="creatacc_button">Create your new account</Button>
          </div>
        </form>
      </div>
    </>
  );
};
