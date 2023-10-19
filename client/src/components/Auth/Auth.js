import React, { useContext, useState } from 'react';
import style from './Auth.module.css'
import log from '../../assets/log.svg';
import register from '../../assets/register.svg';
import { AiTwotoneLock, AiOutlineMail, AiOutlineGoogle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../store/userContext';
import { FaUserAlt } from 'react-icons/fa';

function Auth() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [isSignUp, setIsSignUp] = useState(false);

    const [signUp, setSignUp] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [signIn, setSignIn] = useState({
        email: '',
        password: '',
    });

    const handleSignInSignUP = () => {
        setIsSignUp(!isSignUp)
    }


    const handleSignUpChange = (event) => {
        const { name, value } = event.target;
        setSignUp((prevSignUp) => ({
            ...prevSignUp,
            [name]: value,
        }));
        console.log(signUp);
    };


    const signUpHandler = async (event) => {
        event.preventDefault();

        const { name, email, password } = signUp

        try {
            const { data } = await axios.post('/register', { name, email, password })
            if (data.error) {
                toast.error(data.error)
            } else {
                setSignUp({ name: '', email: '', password: '' })
                toast.success(data.message)
                navigate('/signin')
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error);
        }
    };


    const handleSignInChange = (event) => {
        const { name, value } = event.target;
        setSignIn((prevSignIn) => ({
            ...prevSignIn,
            [name]: value,
        }));
        console.log(signIn);
    };


    const signInHandler = async (event) => {
        event.preventDefault();

        const { email, password } = signIn;

        try {
            const { data } = await axios.post('/login', { email, password })
            if (data.error) {
                toast.error(data.error)
            } else {
                console.log("user signin:", data);
                // setUser(data)  //remove if not needed
                setSignIn({ email: '', password: '' })
                toast.success(data.message)
                navigate('/')
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error);
        }
    };

    const headingStyle = {
        textAlign: 'center',
        color: 'grey',
        paddingTop: '200px',
    };

    return (
        <>
            {!user ?
                <div className={`${style.container} ${isSignUp ? style['sign-up-mode'] : ''}`}>
                    <div className={style['forms-container']}>
                        <div className={style["signin-signup"]}>

                            <form id='#signUp' action="#" className={style["sign-in-form"]}>
                                <h2 className={style["title"]}>Sign In</h2>
                                <div className={style["input-field"]}>
                                    <i><AiOutlineMail /></i>
                                    <input type="email" placeholder="Email" name="email" value={signIn.email} onChange={handleSignInChange} />
                                </div>
                                <div className={style["input-field"]}>
                                    <i><AiTwotoneLock /></i>
                                    <input type="password" placeholder="Password" name="password" value={signIn.password} onChange={handleSignInChange} />
                                </div>
                                <input type="submit" value="Login" className={`${style.btn} ${style.solid}`} onClick={signInHandler} />
                                <p className={style["social-text"]}>Or</p>
                                <div className={style["social-media"]}>
                                    <a href="/" className={style["social-icon"]}>
                                        <i><AiOutlineGoogle /></i>
                                        <p>Sign-in with Google</p>
                                    </a>
                                </div>
                            </form>

                            <form id='#signUp' action="#" className={style["sign-up-form"]}>
                                <h2 className={style["title"]}>Sign up</h2>
                                <div className={style["input-field"]}>
                                    <i><FaUserAlt /></i>
                                    <input type="text" placeholder="Username" name="name" value={signUp.name} onChange={handleSignUpChange} />
                                </div>
                                <div className={style["input-field"]}>
                                    <i><AiOutlineMail /></i>
                                    <input type="email" placeholder="Email" name="email" value={signUp.email} onChange={handleSignUpChange} />
                                </div>
                                <div className={style["input-field"]}>
                                    <i><AiTwotoneLock /></i>
                                    <input type="password" placeholder="Password" name="password" value={signUp.password} onChange={handleSignUpChange} />
                                </div>

                                <input type="submit" className={style["btn"]} value="Sign up" onClick={signUpHandler} />
                                <p className={style["social-text"]}>Or</p>
                                <div className={style["social-media"]}>
                                    <a href="/" className={style["social-icon"]}>
                                        <i><AiOutlineGoogle /></i>
                                        <p>Sign-up with Google</p>
                                    </a>
                                </div>
                            </form>

                        </div>
                    </div>

                    <div className={style["panels-container"]}>
                        <div className={`${style.panel} ${style['left-panel']}`}>
                            <div className={style["content"]}>
                                <h3>New here ?</h3>
                                <p>
                                    Create an account and be part of something special. Sign up today!
                                </p>
                                <button className={`${style.btn} ${style.transparent}`} id="sign-up-btn" onClick={handleSignInSignUP}>
                                    {/* <Link to='/register'>Sign up</Link> */}
                                    Sign up
                                </button>
                            </div>
                            <img src={log} className={style["image"]} alt="" />
                        </div>
                        <div className={`${style.panel} ${style['right-panel']}`}>
                        <div className={style["content"]}>
                                <h3>One of us ?</h3>
                                <p>
                                    Join our community and experience the difference. Sign in now!
                                </p>
                                <button className={`${style.btn} ${style.transparent}`} id="sign-in-btn" onClick={handleSignInSignUP}>
                                    {/* <Link to='/login'>Sign in</Link> */}
                                    sign in
                                </button>
                            </div>
                            <img src={register} className={style["image"]} alt="" />
                        </div>
                    </div>

                </div>
                :
                <p style={headingStyle}>User already loged in</p>
            }
        </>
    )
}

export default Auth;