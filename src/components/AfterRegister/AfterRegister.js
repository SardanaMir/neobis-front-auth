import './AfterRegister.css';
import {useState} from 'react';
import Header from "../Header/Header";

function AfterRegister (){
    const [success, setSuccess] = useState('');

    const handleSend = () =>{
        //написать скрипт по отправке данных на почту
        //появляется модальное окно об отправке письма
        setSuccess(true);
    }
    //закрыть модальное окно
    const handleClose = () =>{
        setSuccess(false);
    }
    return (
        <>
            <Header/>
            <section className="container fl-col-ai-cen ">
                <div className={success ? 'overlay' : 'offscreen'} onClick={handleClose}>
                    <div className='modal'>
                        <h3 aria-live='asserive'>Мы выслали еще одно письмо на указанную тобой почту example@gmail.com</h3>
                        <p>Не забудь проверить ящик “Спам”!!!!!</p>
                        <button className='loginBtn mt25px confirm-btn' onClick={handleClose}>Понятно!</button>
                    </div>
                </div>

                <h2 className='registr-title'>
                    Выслали письмо со ссылкой для завершения регистрации на example@gmail.com
                </h2>
                <p className='descr mt25px'>
                Если письмо не пришло, не спеши ждать совиную почту - лучше <span className='descr-bold'>проверь ящик “Спам” </span>
                </p>
                <div className='divider'>
                (´｡• ω •｡`)
                </div>
                <img className="mt55" src="./img/afterregister.png" alt="" />
                <button className='white-btn btnExit mb25' onClick={handleSend}>Письмо не пришло</button>
            </section>
        </>
    )
}
export default AfterRegister;