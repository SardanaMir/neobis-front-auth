import {useRef, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Enter from '../Enter';
import BrandDecor from '../../components/BrandDecor';

import './LogIn.css';
import '../../index.css';

function LogIn() {    
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const [passwordVisible, setPasswordVisible] = useState(false);

    useEffect(() =>{
        userRef.current.focus();
    }, []);

    useEffect(() =>{
        setError(false);
    }, [user, pwd]);    

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(user, pwd);
        try{
            const response = await axios.post( 
                JSON.stringify({'username': user, 'password': pwd}),
                {
                    header: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            // setAuth({user, pwd, roles, accessToken})
            setUser('');
            setPwd('');
            setSuccess(true);
        }catch(err){
            setError(true)
            if(!err?.response){
                toast.error('No server response')
            }else if(err.response?.status === 400){
                toast.error('Missing username or password');
            }else if (err.response?.status === 401){
                toast.error('Unauthorized')
            }else {
                toast.error('Неверный логин или пароль')
            }
            // errRef.current.focus();
        }
    }

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };

  return (
    <>
        {success ? (
            <Enter/>
        ) : (

        <div className="wrapper">
            <BrandDecor/>
            <div className="container">
                {
                error &&
                <ToastContainer  
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
                }

                <img className="login-img mt25px" src="./img/login-bg.png" alt="глобус" />
                <h2 className='subtitle'>Вэлком бэк!</h2>

                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    className='loginInput' 
                    id='username' 
                    ref={userRef} 
                    autoComplete='off' 
                    onChange={(e) => setUser(e.target.value)} 
                    value={user} 
                    placeholder='Введи туда-сюда логин' 
                    required/>
                    <div className='input-wrapper'>
                        <input 
                        type={passwordVisible ? 'text' : 'password'} 
                        id='password' className='passwordInput' 
                        onChange={(e) => setPwd(e.target.value)} 
                        value={pwd} 
                        placeholder='Пароль (тоже введи)' 
                        required/>
                        <img onClick={togglePasswordVisibility} 
                        className="passwordIcon" 
                        src={passwordVisible ? "./img/icons/eye_slash.svg" : "./img/icons/eye.svg"} alt="" />
                    </div>
                    <button type='submit' className='loginBtn'>Войти</button>
                </form>
                <Link to={'/register'} className='login-create white-btn'>У меня еще нет аккаунта</Link>
            </div>
        </div>

        )}
    </>
  );
}

export default LogIn;