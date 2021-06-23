import React from 'react';
import { connect } from 'react-redux'
import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
} from './sign-in.style';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user-action'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';



class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;
        emailSignInStart(email, password)

    }


    handleChange = (event) => {
        const { value, name, } = event.target;
        this.setState({ [name]: value })

    }

    render() {
        const { googleSignInStart } = this.props;
        return (
            <SignInContainer>
                <SignInTitle>I Have Already An ACcount</SignInTitle>
                <span >Sign In With Your Email And Password</span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput type='email' name='email' handleChange={this.handleChange} value={this.state.email} label='email' required />
                    {/* <label> Email</label> */}

                    <FormInput type='password' name='password' handleChange={this.handleChange} value={this.state.password} label="password" required />
                    {/* <label> Password</label> */}
                    <ButtonsBarContainer>
                        <CustomButton type='submit' onSubmit={this.handleSubmit}>
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

}
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);