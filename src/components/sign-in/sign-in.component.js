import React from 'react';
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss'
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle,auth} from "../../firebase/firebase.utils";
class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        email: '',
        password: ''}
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        } catch (e) {
            console.log(e.message)
        }
    };

    handleChange = event => {
        const { value, name} = event.target;
        this.setState({[name]: value});};


    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email'
                               type='email'
                               value={this.state.email}
                               label='Email'
                               handleChange={this.handleChange} required/>
                    <FormInput name='password'
                               type='password'
                               value={this.state.password}
                               label='Password'
                               handleChange={this.handleChange} required/>
                     <div className="buttons">
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                     </div>
                     </form>

            </div>

        )
    }
}

export default SignIn;