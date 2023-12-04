function ModalSendLink ({setOpenModal}){

    return (
        <div className='overlay'>
            <div className='modal'>
                <h3 aria-live='asserive'>Мы выслали еще одно письмо на указанную тобой почту example@gmail.com</h3>
                <p className="text">Не забудь проверить ящик “Спам”!!!!!</p>
                <button className='loginBtn mt25px confirm-btn' onClick={()=>setOpenModal(false)}>Понятно!</button>
            </div>
        </div>
    )
}
export default ModalSendLink;