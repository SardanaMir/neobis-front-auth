import React from 'react';
import { Link } from 'react-router-dom';

function Modal({setModal}) {
  return (
    <div className='overlay'>
      <div className='modal'>
        <h3 aria-live='asserive'>Выйти?</h3>
        <Link to={'/'} className='loginBtn mt25px confirm-btn'>Да, точно</Link>
        <button className='white-btn mt25px' onClick={() => setModal(false)}>Нет, остаться</button>
      </div>
    </div>
  );
}

export default Modal;
