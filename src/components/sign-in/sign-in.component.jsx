import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";

import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import "./sign-in.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = async e => {
    e.preventDefault();
    const {email, password} = this.state;

    try{
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    }catch(error){
      console.error(error)
    }

  
  }

  handleChange(e) {
    const { value, name } = e.target;
    
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={email}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            value={password}
            type="password"
            label="Password"
            required
            handleChange={this.handleChange}
          />
          <div className="buttons">
          <CustomButton type="submit" value="Submit">
            Sign In
          </CustomButton>
          <CustomButton onClick={signInWithGoogle} value="Submit" isGoogleSignIn>
            Sign in with Google
          </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
