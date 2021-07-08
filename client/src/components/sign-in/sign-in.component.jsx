import React ,{useState}from 'react';
import { connect } from 'react-redux'
import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
} from './sign-in.style';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user-action'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';



const SignIn =({emailSignInStart, googleSignInStart})=> {
    const [userCredentials,setUserCredentials]=useState({email:'',password:''});
    const { email, password } = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();
        
       
        emailSignInStart(email, password)

    }


   const handleChange = (event) => {
        const { value, name, } = event.target;
        setUserCredentials({ ...userCredentials,[name]: value })

    }

    
        return (
            <SignInContainer>
                <SignInTitle>I Have Already An ACcount</SignInTitle>
                <span >Sign In With Your Email And Password</span>
                <form onSubmit={handleSubmit} >
                    <FormInput type='email' name='email' handleChange={handleChange} value={email} label='email' required />
                    {/* <label> Email</label> */}

                    <FormInput type='password' name='password' handleChange={handleChange} value={password} label="password" required />
                    {/* <label> Password</label> */}
                    <ButtonsBarContainer>
                        <CustomButton type='submit' onSubmit={handleSubmit}>
                            SIGN IN
    </CustomButton>

                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                            SIGN IN WITH GOOGLE
    </CustomButton>

                    </ButtonsBarContainer>

                </form>
            </SignInContainer>
        )
    }


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);