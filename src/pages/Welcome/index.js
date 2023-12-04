import './Welcome.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Welcome() {
  return (
    <section className='container fl-col-ai-cen'>
        <h1 className='title'>Lorby</h1>
        <h3>Твой личный репетитор</h3>
        <img className='welcomeImg' src="./img/bg.png" alt="человек сидит на балконе" />
        <Link className='loginBtn mt25px' to={'/login'}>Войти</Link>
        <Link to={'/register'} className='login-create white-btn'>У меня еще нет аккаунта</Link>
    </section>
  );
}

export default Welcome;
