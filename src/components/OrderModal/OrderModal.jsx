import s from './OrderModal.module.css'
import Modal from 'react-modal'

export function OrderModal({modalIsOpen, setModalIsOpen}) {
    function closeModal() {
        setModalIsOpen(false);
    }
    return(
        <>
            <Modal className={s.modal} isOpen={modalIsOpen}>
                <h3>Оформление заказа</h3>
                <form className={s.form}>
                    <div className="label-input">
                        <label>Имя*</label>
                        <input type="text" placeholder='Ваше имя' />
                    </div>

                    <div className="label-input">
                        <label>Номер телефона*</label>
                        <input type="text" placeholder='Ваше номер телефона' />
                    </div>
                
                    <button className={s.arrange}>заказать</button>
                </form>
                <button onClick={closeModal} className={s.btn}>✕</button>
            </Modal>
        </>
    )
}