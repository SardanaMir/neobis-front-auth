
import React, {useEffect, useState, useRef} from 'react';
import { useFormik } from 'formik';
import { basicSchema,  } from '../../schema';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header/Header';
import BrandDecor from '../../components/BrandDecor'; 
import AfterRegister from '../AfterRegister'
import {register} from '../../api'
import './Registration.css';

function Registration() {
    const emailRef = useRef();
    const [passwordVisible1, setPasswordVisible1] = useState(false);
    const [passwordVisible2, setPasswordVisible2] = useState(false);
    const [isMaxMinLength, setIsMaxMinLength] = useState('');
    const [isLetter, setIsLetter] = useState(false);
    const [isNumber, setIsNumber] = useState(false);
    const [isSpecialSymbol, setIsSpecialSymbol] = useState();
    const [success, setSuccess] = useState(false);
    const [requestError, setRequestError] = useState(false);
 
    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        },
        validationSchema: basicSchema,
        onSubmit,
    });

    const onSubmit = async (values, actions) => {
        delete values.confirmPassword;
        const userInfo = values;

        try{
            const response = await register(userInfo)
            setSuccess(true)
            actions.resetForm();
        }
        catch(err){
            console.log(err)
            setRequestError(true)
            if(err?.response){
                toast.error('Произошла ошибка')
            } else if(+err.response?.data.status === 400){
                toast.error(err.response?.data.message)
            }
        }
    };
    const togglePasswordVisibility = (e) => {
        if(e.target.id === 'eye1'){
            setPasswordVisible1(!passwordVisible1);
        } else if(e.target.id === 'eye2'){
            setPasswordVisible2(!passwordVisible2);
        }
    };

    useEffect(()=>{
        setIsMaxMinLength(values.password.length >= 8 && values.password.length <= 15)
        setIsLetter(values.password.match(/[A-Z]/) && values.password.match(/[a-z]/))
        setIsNumber(values.password.match(/[0-9]/));
        setIsSpecialSymbol(values.password.match(/[!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/))
    }, [values.password])

    useEffect(() =>{
        emailRef.current.focus();
    }, []);
    

  return (
    <>
        {success ? (
            <AfterRegister/>
        ):(
            <div className='wrapper'>
            {
                requestError &&
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
            <BrandDecor/>
            <div className="container">
                <Header/>
                <h2 className='registr-title'>Создать аккаунт Lorby</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        value={values.email}
                        onChange={handleChange}
                        id="email"
                        type="email"
                        ref={emailRef}
                        placeholder="Введи адрес почты"
                        onBlur={handleBlur}
                        className='loginInput' 
                        required
                    />
                    {errors.email && touched.email && <p className="error">{errors.email}</p>}

                    <input 
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        id="username"
                        className='passwordInput' 
                        placeholder='Придумай логин'
                        required
                    />
                    {errors.username && touched.username && (<p className="error">{errors.username}</p>)}

                    <div className='input-wrapper'>
                        <input 
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="password"
                        type={passwordVisible1 ? 'text' : 'password'} 
                        className='passwordInput' 
                        placeholder='Создай пароль' />
                        <img onClick={togglePasswordVisibility} 
                        className="passwordIcon" 
                        id='eye1' 
                        src={passwordVisible1 ? "./img/icons/eye_slash.svg" : "./img/icons/eye.svg"} alt="" 
                        required
                        />
                    </div>  
                    <>
                        {
                        !touched.password ?
                            (
                            <ul> 
                                <li className='msg'>
                                    От 8 до 15 символов 
                                </li>
                                <li className='msg'>
                                    Строчные и прописные буквы
                                </li>
                                <li className='msg'>
                                    Минимум 1 цифра
                                </li>
                                <li className='msg'>
                                    Минимум 1 спецсимвол (!, ", #, $...)
                                </li> 
                            </ul> 
                            ) : (
                            <ul> 
                                <li className={isMaxMinLength ? 'green' : 'red'}>
                                    От 8 до 15 символов 
                                    <img src={isMaxMinLength ? './img/icons/ok.svg' : './img/icons/error.svg'} alt="" />
    
                                </li>
                                <li className={isLetter ? 'green' : 'red'} >
                                    Строчные и прописные буквы
                                    <img src={isLetter ? './img/icons/ok.svg' : './img/icons/error.svg'} alt="" />
                                </li>
                                <li className={isNumber ? 'green' : 'red'}>
                                    Минимум 1 цифра
                                    <img src={isNumber ? './img/icons/ok.svg' : './img/icons/error.svg'} alt="" />
                                </li>
                                <li className={isSpecialSymbol ? 'green' : 'red'}>
                                    Минимум 1 спецсимвол (!, ", #, $...)
                                    <img src={isSpecialSymbol ? './img/icons/ok.svg' : './img/icons/error.svg'} alt="" />
                                </li>
                            </ul> 
                            )
                        }
                    </>          
                    <div className='input-wrapper'>
                        <input 
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type={passwordVisible2 ? 'text' : 'password'} 
                        className='passwordInput' 
                        id="confirmPassword"
                        placeholder='Повтори пароль'
                        required
                        />
                        <img onClick={togglePasswordVisibility} className="passwordIcon" id='eye2' 
                        src={passwordVisible2 ? "./img/icons/eye_slash.svg" : "./img/icons/eye.svg"} alt="" />
                    </div>
                    {errors.confirmPassword && touched.confirmPassword && (<p className="error">{errors.confirmPassword}</p>)}
                    <button disabled={isSubmitting} type='submit' className='loginBtn registr-btn'>Далее</button>
                </form>
            </div>
        </div>
        )}
    </>

  );
}

export default Registration
