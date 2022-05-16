import { Layout } from "antd";
import { Navbar } from "../SimpleNavbar/SimpleNavbar";
import { SimpleFooter } from "../SimpleFooter/SimpleFooter";
import { useState } from "react";
import "./Address.css";
import { Link } from "react-router-dom";
import axios from "axios";

export const Address = () => {
  const { Header, Content, Footer } = Layout;
  const [address, setaddress] = useState({});
  const getInputField = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setaddress({ ...address, [name]: value });
  };

  async function handle(e) {
    e.preventDefault();
    console.log(address);
    let token=JSON.parse(localStorage.getItem("Authtoken"))
     console.log(token)
    let addr = JSON.stringify(address);
      let saveAddress = async () => {
        try {
         
          
          await fetch("https://shop-clone-api.herokuapp.com/addresses/:id", {
            method: "POST",
            body: addr,
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });

          // let dat = await res.json();
          // console.log(dat);
          //getData();
          //window.location.href = "payment.html";
        } catch (error) {
          console.log(error);
        }
       
      };
       saveAddress();
    // axios
    //   .post("http://localhost:5700/addresses", { ...address })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }
  return (
    <div>
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content>
          <div>
            <br />
            <h1 id="top">Shipping Address Form</h1>
            <br />
            <p id="top">* Indicates required field</p>
            <br />
            <form onSubmit={handle}>
              <div className="formdiv">
                <div className="right">
                  <label for="firstname">First name*</label>
                  <br />
                  <input
                    onChange={getInputField}
                    id="firstname"
                    name="firstName"
                    type="text"
                    placeholder="First name here"
                    required="required"
                  />
                  <br />
                  <label for="address1">Address 1*</label>
                  <br />
                  <input
                    onChange={getInputField}
                    id="address1"
                    name="address1"
                    type="text"
                    placeholder="Please enter the street address here"
                    required="required"
                  />
                  <br />
                  <label for="city">City*</label>
                  <br />
                  <input
                    onChange={getInputField}
                    id="city"
                    name="city"
                    type="text"
                    placeholder="City here"
                    required="required"
                  />
                  <br />
                  <label for="postal">Zip/Postal*</label>
                  <br />
                  <input
                    onChange={getInputField}
                    id="postal"
                    name="postal"
                    type="text"
                    placeholder="Zip Code"
                    required="required"
                  />
                  <br />
                  {/* <input id="pobox" name="pobox" type="checkbox" value="" />
                  This address is a PO Box
                  <br /> */}
                  <label for="phone">Phone*</label>
                  <br />
                  <input
                    onChange={getInputField}
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Please enter your 10 digit phone number"
                    required="required"
                  />
                  <br />
                  <br />
                  <button class="cancel" href="#">
                    Cancel
                  </button>
                  <Link to="/addressdetails">
                    <input id="submit" type="submit" value="save" />
                  </Link>
                </div>
                <div className="middle"></div>
                <div className="left">
                  <label for="lastsname">Last name*</label>
                  <br />
                  <input
                    onChange={getInputField}
                    id="lastname"
                    name="lastName"
                    type="text"
                    placeholder="Last name here"
                    required="required"
                  />
                  <br />
                  <label for="address2">Address 2</label>
                  <br />
                  <input
                    onChange={getInputField}
                    id="address2"
                    name="address2"
                    type="text"
                  />
                  <br />
                  <label for="address2">State/Province*</label>
                  <br />
                  <span class="select-list primary">
                    {" "}
                    <select onChange={getInputField} name="state" size="1">
                      {" "}
                      <option
                        value="AK"
                        data-description="Alaska"
                        data-region-id="AK"
                      >
                        India
                      </option>{" "}
                      <option
                        value="AL"
                        data-description="Alabama"
                        data-region-id="AL"
                      >
                        Alabama
                      </option>{" "}
                      <option
                        value="AR"
                        data-description="Arkansas"
                        data-region-id="AR"
                      >
                        Arkansas
                      </option>{" "}
                      <option
                        value="AZ"
                        data-description="Arizona"
                        data-region-id="AZ"
                      >
                        Arizona
                      </option>{" "}
                      <option
                        value="CA"
                        data-description="California"
                        data-region-id="CA"
                      >
                        California
                      </option>{" "}
                      <option
                        value="CO"
                        data-description="Colorado"
                        data-region-id="CO"
                      >
                        Colorado
                      </option>{" "}
                      <option
                        value="CT"
                        data-description="Connecticut"
                        data-region-id="CT"
                      >
                        Connecticut
                      </option>{" "}
                      <option
                        value="DC"
                        data-description="District of Columbia"
                        data-region-id="DC"
                      >
                        District of Columbia
                      </option>{" "}
                      <option
                        value="DE"
                        data-description="Delaware"
                        data-region-id="DE"
                      >
                        Delaware
                      </option>{" "}
                      <option
                        value="FL"
                        data-description="Florida"
                        data-region-id="FL"
                      >
                        Florida
                      </option>{" "}
                      <option
                        value="GA"
                        data-description="Georgia"
                        data-region-id="GA"
                      >
                        Georgia
                      </option>{" "}
                      <option
                        value="HI"
                        data-description="Hawaii"
                        data-region-id="HI"
                      >
                        Hawaii
                      </option>{" "}
                      <option
                        value="IA"
                        data-description="Iowa"
                        data-region-id="IA"
                      >
                        Iowa
                      </option>{" "}
                      <option
                        value="ID"
                        data-description="Idaho"
                        data-region-id="ID"
                      >
                        Idaho
                      </option>{" "}
                      <option
                        value="IL"
                        data-description="Illinois"
                        data-region-id="IL"
                      >
                        Illinois
                      </option>{" "}
                      <option
                        value="IN"
                        data-description="Indiana"
                        data-region-id="IN"
                      >
                        Indiana
                      </option>{" "}
                      <option
                        value="KS"
                        data-description="Kansas"
                        data-region-id="KS"
                      >
                        Kansas
                      </option>{" "}
                      <option
                        value="KY"
                        data-description="Kentucky"
                        data-region-id="KY"
                      >
                        Kentucky
                      </option>{" "}
                      <option
                        value="LA"
                        data-description="Louisiana"
                        data-region-id="LA"
                      >
                        Louisiana
                      </option>{" "}
                      <option
                        value="MA"
                        data-description="Massachusetts"
                        data-region-id="MA"
                      >
                        Massachusetts
                      </option>{" "}
                      <option
                        value="MD"
                        data-description="Maryland"
                        data-region-id="MD"
                      >
                        Maryland
                      </option>{" "}
                      <option
                        value="ME"
                        data-description="Maine"
                        data-region-id="ME"
                      >
                        Maine
                      </option>{" "}
                      <option
                        value="MI"
                        data-description="Michigan"
                        data-region-id="MI"
                      >
                        Michigan
                      </option>{" "}
                      <option
                        value="MN"
                        data-description="Minnesota"
                        data-region-id="MN"
                      >
                        Minnesota
                      </option>{" "}
                      <option
                        value="MO"
                        data-description="Missouri"
                        data-region-id="MO"
                      >
                        Missouri
                      </option>{" "}
                      <option
                        value="MS"
                        data-description="Mississippi"
                        data-region-id="MS"
                      >
                        Mississippi
                      </option>{" "}
                      <option
                        value="MT"
                        data-description="Montana"
                        data-region-id="MT"
                      >
                        Montana
                      </option>{" "}
                      <option
                        value="NC"
                        data-description="North Carolina"
                        data-region-id="NC"
                      >
                        North Carolina
                      </option>{" "}
                      <option
                        value="ND"
                        data-description="North Dakota"
                        data-region-id="ND"
                      >
                        North Dakota
                      </option>{" "}
                      <option
                        value="NE"
                        data-description="Nebraska"
                        data-region-id="NE"
                      >
                        Nebraska
                      </option>{" "}
                      <option
                        value="NH"
                        data-description="New Hampshire"
                        data-region-id="NH"
                      >
                        New Hampshire
                      </option>{" "}
                      <option
                        value="NJ"
                        data-description="New Jersey"
                        data-region-id="NJ"
                      >
                        New Jersey
                      </option>{" "}
                      <option
                        value="NM"
                        data-description="New Mexico"
                        data-region-id="NM"
                      >
                        New Mexico
                      </option>{" "}
                      <option
                        value="NV"
                        data-description="Nevada"
                        data-region-id="NV"
                      >
                        Nevada
                      </option>{" "}
                      <option
                        value="NY"
                        data-description="New York"
                        data-region-id="NY"
                      >
                        New York
                      </option>{" "}
                      <option
                        value="OH"
                        data-description="Ohio"
                        data-region-id="OH"
                      >
                        Ohio
                      </option>{" "}
                      <option
                        value="OK"
                        data-description="Oklahoma"
                        data-region-id="OK"
                      >
                        Oklahoma
                      </option>{" "}
                      <option
                        value="OR"
                        data-description="Oregon"
                        data-region-id="OR"
                      >
                        Oregon
                      </option>{" "}
                      <option
                        value="PA"
                        data-description="Pennsylvania"
                        data-region-id="PA"
                      >
                        Pennsylvania
                      </option>{" "}
                      <option
                        value="PR"
                        data-description="Puerto Rico"
                        data-region-id="PR"
                      >
                        Puerto Rico
                      </option>{" "}
                      <option
                        value="RI"
                        data-description="Rhode Island"
                        data-region-id="RI"
                      >
                        Rhode Island
                      </option>{" "}
                      <option
                        value="SC"
                        data-description="South Carolina"
                        data-region-id="SC"
                      >
                        South Carolina
                      </option>{" "}
                      <option
                        value="SD"
                        data-description="South Dakota"
                        data-region-id="SD"
                      >
                        South Dakota
                      </option>{" "}
                      <option
                        value="TN"
                        data-description="Tennessee"
                        data-region-id="TN"
                      >
                        Tennessee
                      </option>{" "}
                      <option
                        value="TX"
                        data-description="Texas"
                        data-region-id="TX"
                      >
                        Texas
                      </option>{" "}
                      <option
                        value="UT"
                        data-description="Utah"
                        data-region-id="UT"
                      >
                        Utah
                      </option>{" "}
                      <option
                        value="VA"
                        data-description="Virginia"
                        data-region-id="VA"
                      >
                        Virginia
                      </option>{" "}
                      <option
                        value="VT"
                        data-description="Vermont"
                        data-region-id="VT"
                      >
                        Vermont
                      </option>{" "}
                      <option
                        value="WA"
                        data-description="Washington"
                        data-region-id="WA"
                      >
                        Washington
                      </option>{" "}
                      <option
                        value="WI"
                        data-description="Wisconsin"
                        data-region-id="WI"
                      >
                        Wisconsin
                      </option>{" "}
                      <option
                        value="WV"
                        data-description="West Virginia"
                        data-region-id="WV"
                      >
                        West Virginia
                      </option>{" "}
                      <option
                        value="WY"
                        data-description="Wyoming"
                        data-region-id="WY"
                      >
                        Wyoming
                      </option>{" "}
                      <option
                        value="GU"
                        data-description="Guam"
                        data-region-id="GU"
                      >
                        Guam
                      </option>{" "}
                      <option
                        value="AP"
                        data-description="AP"
                        data-region-id="AP"
                      >
                        AP
                      </option>{" "}
                      <option
                        value="AE"
                        data-description="AE"
                        data-region-id="AE"
                      >
                        AE
                      </option>{" "}
                      <option
                        value="US Territories"
                        data-description="US Territories"
                        data-region-id="US Territories"
                      >
                        US Territories
                      </option>{" "}
                      <option
                        value="AA"
                        data-description="AA"
                        data-region-id="AA"
                      >
                        AA
                      </option>{" "}
                      <option
                        value="AS"
                        data-description="American Samoa"
                        data-region-id="AS"
                      >
                        American Samoa
                      </option>{" "}
                      <option
                        value="MH"
                        data-description="Marshall Islands"
                        data-region-id="MH"
                      >
                        Marshall Islands
                      </option>{" "}
                      <option
                        value="FM"
                        data-description="Micronesia, Federated States of"
                        data-region-id="FM"
                      >
                        Micronesia, Federated States of
                      </option>{" "}
                      <option
                        value="MP"
                        data-description="Northern Mariana Islands"
                        data-region-id="MP"
                      >
                        Northern Mariana Islands
                      </option>{" "}
                      <option
                        value="PW"
                        data-description="Palau"
                        data-region-id="PW"
                      >
                        Palau
                      </option>{" "}
                      <option
                        value="U.S. Minor Islands"
                        data-description="U.S. Minor Islands"
                        data-region-id="U.S. Minor Islands"
                      >
                        U.S. Minor Islands
                      </option>{" "}
                      <option
                        value="VI"
                        data-description="Virgin Islands (U.S.)"
                        data-region-id="VI"
                      >
                        Virgin Islands (U.S.)
                      </option>{" "}
                    </select>{" "}
                  </span>
                </div>
              </div>
            </form>
          </div>
        </Content>
        <Footer>
          <SimpleFooter />
        </Footer>
      </Layout>
    </div>
  );
};
