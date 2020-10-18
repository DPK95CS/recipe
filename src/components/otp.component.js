import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Otp extends Component {
    constructor(props) {
        super(props);
        this.state ={
            otp : ""
        };
        this.onChangeOtp = this.onChangeOtp.bind(this);
    
      }
      onChangeOtp(e) {
        const num = e.target.value;
        this.setState({
            otp: num
          }
      );
  
      }
  render() {
      console.log(this.state.otp);
    return (
      <div>
              <div className="form-group">
                <label htmlFor="title">Enter OTP</label>
                <input
                  type="text"
                  className="form-control"
                  id="otp"
                  onChange={this.onChangeOtp}
                />
              </div>
              <Link 
                to= {
                     {pathname:"/validate_otp/" ,state:this.state.otp}
              }                className="badge badge-warning">
                SUBMIT
      </Link>
              
      </div>
    );
  }
}