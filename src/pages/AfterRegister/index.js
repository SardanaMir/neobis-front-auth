import {useState} from 'react';
import Header from '../../components/Header/Header';
import ModalSendLink from '../../components/ModalSendLink';
import BrandDecor from '../../components/BrandDecor';
import './AfterRegister.css';

function AfterRegister (){
    const [openModal, setOpenModal] = useState(false);

    const handleSend = () =>{
        //написать скрипт по отправке данных на почту
        //появляется модальное окно об отправке письма
        setOpenModal(true);
    }

    return (
        <div className="wrapper">
            {openModal && <ModalSendLink setOpenModal={setOpenModal}/>}
            <BrandDecor/>
            <div className="container fl-col-ai-cen ">
                <Header/>
                <h2 className='registr-title'>
                    Выслали письмо со ссылкой для завершения регистрации на example@gmail.com
                </h2>
                <p className='descr mt25px'>
                Если письмо не пришло, не спеши ждать совиную почту - лучше <span className='descr-bold'>проверь ящик “Спам” </span>
                </p>
                <div className='divider'>
                (´｡• ω •｡`)
                </div>
                <img className="reg-img mt55" src="./img/afterregister.png" alt="" />
                <button className='white-btn btnExit mb25' onClick={handleSend}>Письмо не пришло</button>
            </div>
        </div>


    )
}
export default AfterRegister;