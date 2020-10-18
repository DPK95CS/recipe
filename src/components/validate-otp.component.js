import React, { Component } from "react";

export default class ValidateOtp extends Component {

  componentDidMount() {
    console.log(this.props.location.state)
  }



  render() {
      var flag= false;
    if(this.props.location.state==="123456")
        flag=true;
    console.log(flag);

    return (
        
    
          <div className="edit-form">
            <h4>OTP STATUS</h4>
     

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {flag ? "SUCESSS" : "FAILURE"}
              </div>
            </div>

        

       
    );
  }
}