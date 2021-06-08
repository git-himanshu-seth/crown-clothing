import React from 'react';
import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './sign-in.style';
import FormInput from '../form-input/form-input.component'
import CustomButton from'../custom-button/custom-button.component';
import {auth , signInWithGoogle} from'../../firebase/firebase.utli';

class SignIn extends React.Component{
    constructor(props){
        super(props);
    this.state={email:'',
    password:''}
    }
     handleSubmit = async event =>{
        event.preventDefault()
        const{email ,password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email ,password)
            this.setState({email:'', password:'' })
        }
       catch(error){
           console.log(error);
       }
    }
    
    
      handleChange= (event)=>{
        const {value,name, }=event.target;
        this.setState({[name]:value })
    
    }

    render(){
        return(
            <SignInContainer>
<SignInTitle>I Have Already An ACcount</SignInTitle>
<span >Sign In With Your Email And Password</span>
<form onSubmit={this.handleSubmit} >
    <FormInput type='email'name='email' handleChange={ this.handleChange} value={this.state.email} label='email'  required/>
    {/* <label> Email</label> */}

    <FormInput type='password'name='password' handleChange={this.handleChange}value={this.state.password} label="password" required/>
    {/* <label> Password</label> */}
 <ButtonsBarContainer>
 <CustomButton type='submit' onSubmit={this.handleSubmit}>
    SIGN IN
    </CustomButton>

    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
    SIGN IN WITH GOOGLE
    </CustomButton>
  
 </ButtonsBarContainer>
    
</form>
            </SignInContainer>
        )
    }

}

export default SignIn;