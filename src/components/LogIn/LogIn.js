import './LogIn.css';
import {useRef, useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Enter from '../Enter/Enter';

function LogIn() {    
    
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [passwordVisible, setPasswordVisible] = useState(false);

    useEffect(() =>{
        userRef.current.focus();
    }, []);

    useEffect(() =>{
        setErrMsg('');
    }, [user, pwd]);    

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(user, pwd);
        try{
            const response = await axios.post( 
                JSON.stringify({user, pwd}),
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
            if(!err?.response){
                setErrMsg('No server response')
            }else if(err.response?.status === 400){
                setErrMsg('Missing username or password');
            }else if (err.response?.status === 401){
                setErrMsg('Unauthorized')
            }else {
                setErrMsg('Неверный логин или пароль')
            }
            errRef.current.focus();
        }
    }

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
    
  return (
    <div>
        {success ? (
            <Enter/>
        ) : (
        <section className="LogIn">
            <div className="container">
                <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='asserive'>{errMsg}</p>

                <img className="mt25px" src="./img/img_01.png" alt="" />
                <h2 className='subtitle'>Вэлком бэк!</h2>

                <form onSubmit={handleSubmit}>
                    <input type="text" className='loginInput' id='username' ref={userRef} autoComplete='off' onChange={(e) => setUser(e.target.value)} value={user} placeholder='Введи туда-сюда логин' required/>
                    
                    <div className='password'>
                        <input type={passwordVisible ? 'text' : 'password'} id='password' className='passwordInput' onChange={(e) => setPwd(e.target.value)} value={pwd} placeholder='Пароль (тоже введи)' required/>
                        <img onClick={togglePasswordVisibility} className="passwordIcon" src={passwordVisible ? "./img/icons/eye_slash.svg" : "./img/icons/eye.svg"} alt="" />
                    </div>

                    <button type='submit' className='loginBtn'>Войти</button>

                </form>
                <Link to={'/register'} className='login-create white-btn'>У меня еще нет аккаунта</Link>
            </div>
        </section>
        )}
    </div>
  );
}

export default LogIn;