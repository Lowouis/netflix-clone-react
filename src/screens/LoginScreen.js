import React, {useState} from 'react'
import './loginscreen.css';
import SignInScreen from "./SignInScreen";

function LoginScreen(){
    const [SignIn, SetSignIn] = useState(false);
    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    className="loginScreen__logo"
                    alt="netflix logo"/>
                <button
                    className="loginScreen__button"
                    onClick={() => SetSignIn(true)}
                >Sign In</button>
                <div className="loginScreen__gradient"/>
            </div>
            <div className="loginScreen_body">
                {SignIn ? (
                    <SignInScreen />
                ) : (
                <>
                    <h1>Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere. Cancel at any time</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="loginScreen__input">
                        <form>
                            <input type="email" placeholder="Email Address"/>
                            <button className="loginScreen__getStarted"
                                    onClick={()=>{SetSignIn(true)}}
                            >GET STARTED</button>
                        </form>
                    </div>
                </>
                    )}
            </div>
        </div>)
}


export default LoginScreen;