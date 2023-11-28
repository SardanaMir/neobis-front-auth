import './Registration.css';
import React, {useState} from 'react';
import Header from '../Header/Header';
import { useFormik } from 'formik';
import { basicSchema,  } from '../../schema';
import classnames from 'classnames';
import { signupPassword } from '../../schema/signupPassword';

function Registration() {
    const [passwordVisible1, setPasswordVisible1] = useState(false);
    const [passwordVisible2, setPasswordVisible2] = useState(false);
    
    const onSubmit = async (values, actions) => {
        console.log(values);
        console.log(actions);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
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
        signupPassword
    });

    const togglePasswordVisibility = (e) => {
        if(e.target.id === 'eye1'){
            setPasswordVisible1(!passwordVisible1);
        } else if(e.target.id === 'eye2'){
            setPasswordVisible2(!passwordVisible2);
        }
    };
   

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

                    // className={errors.email && touched.email ? "input-error" : ""}
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
                <div className={classnames({ 'red': errors.password && (touched.password || errors.password === 'min'), 'green': !errors.password && touched.password })}>
                    От 8 до 15 символов 
                    {errors.password}
                </div>
                <div className={classnames({ 'red': errors.password && (touched.password || errors.password === 'буквы'), 'green': (touched.password || errors.password !== 'буквы') })}>
                    Строчные и прописные буквы
                </div>
                <div className={classnames({ 'red': errors.password && (touched.password || errors.password === 'цифры'), 'green': (touched.password || errors.password !== 'цифры') })}>
                    Минимум 1 цифра
                </div>
                <div className={classnames({ 'red': errors.password && (touched.password || errors.password === 'символ'), 'green': (touched.password || errors.password !== 'символ') })}>
                    Минимум 1 спецсимвол (!, ", #, $...)
                </div>
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

                {/* {errors.password} */}
                {/* <li>От 8 до 15 символов</li>
                <li>Строчные и прописные буквы</li>
                <li>Минимум 1 цифра</li>
                <li>Минимум 1 спецсимвол (!, ", #, $...)</li> */}
