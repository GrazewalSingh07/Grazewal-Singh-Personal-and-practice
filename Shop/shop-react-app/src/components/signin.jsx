import { Button } from "antd";
import "./signin.css"
import axios from "axios";
import { useState } from "react";
import { Typography } from "antd";
const { Title } = Typography;
import { useNavigate } from "react-router-dom";
export const Signin = () => {
  const navigate=useNavigate()
  const [user, setuser] = useState({});

  function handle(e) {
    e.preventDefault();
    // console.log(user);

    axios
      .post("https://shop-clone-api.herokuapp.com/login", { ...user })
      .then(function (response) {
        let Authtoken=response.data.token
        localStorage.setItem("Authtoken",JSON.stringify(Authtoken))
         navigate(-1,{replace:true})
        //alert(response.data.meaasge)
      })
      .catch(function (error) {
        console.log(error);
        alert("Email or Password wrong");
      });
  }

  const getInputData = (e) => {
     
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  return (
    <>
      <div className="Sign_main_div">
        <div className="signin_div">
          <Title level={1}>Log in</Title>

          <form onSubmit={handle}>
            <p className="address">Enter address:</p>
            <input
              name="email"
              onChange={getInputData}
              type="email"
              placeholder="yourname@example.com"
              className="email"
            />
            <p className="pass_p">Password:</p>
            <input
              name="password"
              onChange={getInputData}
              type="password"
              placeholder="Please enter your password"
              className="password"
            />
            <p className="forgotpass">Forgot your password?</p>
            <input className="singin_button"type="submit" value="Sign in"></input>
            {/* <Button className="singin_button" value="Sign in"  type="primary submit">
              Sign in
            </Button> */}
          </form>
        </div>
        <div className="signup_div">
          <p className="heading_donthaveacc">Don't have an account?</p>
          <p className="paragraph">
            With a SHOP.COM account, you can enjoy the following benefits: up to
            50%{" "}
            <span>
              <img
                src="https://img.shop.com/Image/resources/images/cashback-icon.svg"
                alt=""
                style={{ width: "15px" }}
              />
            </span>
            Cashback on eligible purchases, redeem discount coupons, order
            status and history, saved payment options and addresses, exclusive
            emails and more.
          </p>
          <Button className="createButton">Create your new account</Button>
        </div>
      </div>
    </>
  );
};
