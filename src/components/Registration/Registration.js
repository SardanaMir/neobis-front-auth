import './Registration.css';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import Header from '../Header/Header';
import {Link} from 'react-router-dom';

function Registration() {
    const [passwordVisible1, setPasswordVisible1] = useState(false);
    const [passwordVisible2, setPasswordVisible2] = useState(false);

    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onChange'
    });

    const onSubmit = (data) =>{
        console.log(JSON.stringify(data));
        reset();
    }

    const togglePasswordVisibility = (e) => {
        console.log(e.target.id)
        if(e.target.id === 'eye1'){
            setPasswordVisible1(!passwordVisible1);
        } else if(e.target.id === 'eye2'){
            setPasswordVisible2(!passwordVisible2);
        }
    };

  return (
    <div>
        <Header/>
        <div className="container fl-col-ai-cen">
            <h2 className='registr-title'>Создать аккаунт Lorby</h2>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input {...register('email',{
                        required: 'Поле обязательно к заполнению'
                    })} type="e-mail" className='loginInput' placeholder='Введи адрес почты'/>
                    <div>{errors?.email && <li>{errors?.email?.message || "Error"}</li>}</div>
                </div>

                <div>
                    <input 
                    {...register('login',{
                        required: 'Поле обязательно к заполнению',
                        minLength: {
                            value: 5,
                            message: 'Минимум 5 символов'
                        }
                    })}
                    type="text" className='passwordInput' placeholder='Придумай логин'/>
                    <div>{errors?.login && <li>{errors?.login?.message || "Error"}</li>}</div>
                </div>

                <div className='password'>
                    <input  {...register('password',{
                        required: 'Поле обязательно к заполнению',
                        minLength: {
                            value: 8,
                            message: 'От 8 до 15 символов'
                        },
                        maxLength : {
                            value: 15,
                            message: 'От 8 до 15 символов'
                        },
                        pattern: {
                            value: /[A-Za-z]/,
                            message: 'Строчные и прописные буквы'
                        },
                        pattern: {
                            value: /[0-9]/,
                            message: 'Минимум 1 цифра'
                        },
                        pattern: {
                            value: /[!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/,
                            message: 'Минимум 1 спецсимвол'
                        },
                    })}
                    type={passwordVisible1 ? 'text' : 'password'} className='passwordInput' placeholder='Создай пароль'/>
                    <img onClick={togglePasswordVisibility} className="passwordIcon" id='eye1' src={passwordVisible1 ? "./img/icons/eye_slash.svg" : "./img/icons/eye.svg"} alt="" />
                    <div>{errors?.password && <p>{errors?.password?.message || "Error"}</p>}</div>

                    <ul>
                        <li className={errors?.password?.message === 'От 8 до 15 символов' ? 'red' : 'green'}>От 8 до 15 символов</li>
                        <li className={errors?.password?.message === 'Строчные и прописные буквы' ? 'red' : 'green'}>Строчные и прописные буквы</li>
                        <li className={errors?.password?.message === 'Минимум 1 цифра' ? 'red' : 'green'}>Минимум 1 цифра</li>
                        <li className={errors?.password?.message === 'Минимум 1 спецсимвол' ? 'red' : 'green'}>Минимум 1 спецсимвол (!, ", #, $...)</li>
                    </ul>
                </div>

                <div className='password'>
                    <input type={passwordVisible2 ? 'text' : 'password'} name="password" className='passwordInput' placeholder='Повтори пароль'/>
                    <img onClick={togglePasswordVisibility} className="passwordIcon" id='eye2' src={passwordVisible2 ? "./img/icons/eye_slash.svg" : "./img/icons/eye.svg"} alt="" />
                </div>
                <button type='submit' className='loginBtn registr-btn' disabled={!isValid}>Далее</button>
            </form>
        </div>
    </div>
  );
}

export default Registration;
