import './Registration.css';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
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
        // console.log(values);
        // console.log(actions);
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
    }, [values.password])

  return (
    <div>
        <Header/>
        <div  className="container fl-col-ai-cen">
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
                />
                {errors.username && touched.username && (<p className="error">{errors.username}</p>)}
                <div className='password'>
                    <input 
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="password"
                    type={passwordVisible1 ? 'text' : 'password'} 
                    className='passwordInput' 
                    placeholder='Создай пароль' />
                    <img onClick={togglePasswordVisibility} className="passwordIcon" id='eye1' src={passwordVisible1 ? "./img/icons/eye_slash.svg" : "./img/icons/eye.svg"} alt="" />
                </div>  
                <ul>
                    <li className={isMaxMinLength ? 'green' : 'red'}>
                        От 8 до 15 символов 
                    </li>
                    <li className={isLetter ? 'green' : 'red'} >
                        Строчные и прописные буквы
                    </li>
                    <li className={isNumber ? 'green' : 'red'}>
                        Минимум 1 цифра
                    </li>
                    <li className={isSpecialSymbol ? 'green' : 'red'}>
                        Минимум 1 спецсимвол (!, ", #, $...)
                    </li>
                </ul>             
                <div className='password'>
                    <input 
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type={passwordVisible2 ? 'text' : 'password'} 
                    className='passwordInput' 
                    id="confirmPassword"
                    placeholder='Повтори пароль'/>
                    <img onClick={togglePasswordVisibility} className="passwordIcon" id='eye2' src={passwordVisible2 ? "./img/icons/eye_slash.svg" : "./img/icons/eye.svg"} alt="" />
                </div>
                {errors.confirmPassword && touched.confirmPassword && (<p className="error">{errors.confirmPassword}</p>)}
                <button disabled={isSubmitting} type='submit' className='loginBtn registr-btn'>Далее</button>
            </form>
        </div>
    </div>
  );
}

export default Registration
