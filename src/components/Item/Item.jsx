import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import { OrderModal } from '../OrderModal/OrderModal';
import { useState } from 'react'

function Item({ id, img, name, desc, price, size, count }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function showModal() {
        setModalIsOpen(true);
    }
    return (
        <Card style={{ width: '18rem' }} className='card'>
            <Card.Img src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <div className="attr-price-size">
                <Card.Text className='price-item'>
                    {price} ₽
                </Card.Text>

                <Card.Text className='price-item'>
                    {size}
                </Card.Text>
                </div>
                {
                    count > 0 ?
                        <Link to={`${id}`} className='button-more'>В корзину</Link>
                        :
                        <button onClick={showModal} className='order-btn'>Заказать</button>
                        
                }
                <OrderModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
            </Card.Body>
        </Card>
    );
}

export default Item;