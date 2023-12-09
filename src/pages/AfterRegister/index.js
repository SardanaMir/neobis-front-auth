import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import BrandDecor from '../../components/BrandDecor';
import './AfterRegister.css';

function AfterRegister (){
    return (
        <div className="wrapper">
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
                <Link className='loginBtn mt25px' to={'/login'}>Войти</Link>
            </div>
        </div>
    )
}
export default AfterRegister;