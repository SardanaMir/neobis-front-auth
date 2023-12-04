import './Registration.css';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import BrandDecor from '../../components/BrandDecor'; 
import { useFormik } from 'formik';
import { basicSchema,  } from '../../schema';

function Registration() {
    const [passwordVisible1, setPasswordVisible1] = useState(false);
    const [passwordVisible2, setPasswordVisible2] = useState(false);
    const [isMaxMinLength, setIsMaxMinLength] = useState('');
    const [isLetter, setIsLetter] = useState(false);
    const [isNumber, setIsNumber] = useState(false);
    const [isSpecialSymbol, setIsSpecialSymbol] = useState()

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
        const userInfo = values;
        console.log(userInfo)
    };
    
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
        console.log(values.password)
    }, [values.password])

  return (
    <div className='wrapper'>
        <BrandDecor/>
        <div className="container fl-col-ai-cen">
            <Header/>
            <h2 className='registr-title'>Создать аккаунт Lorby</h2>
            <form onSubmit={handleSubmit}>
                <input
                    value={values.email}
                    onChange={handleChange}
                    id="email"
                    type="email"
                    placeholder="Введи адрес почты"
                    onBlur={handleBlur}
                    className='loginInput' 
                    required
                />
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
                <button disabled={isSubmitting} type='submit' className='loginBtn registr-btn'>Далее</button>
            </form>
        </div>
    </div>
  );
}

export default Registration
