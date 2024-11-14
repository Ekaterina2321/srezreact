import { useParams } from 'react-router-dom'
import s from './TovarPage.module.css'
import { tovars } from '../../data/data';
import { Link } from 'react-router-dom'

export function TovarPage() {
    const { id } = useParams();
    const tovar = tovars.find(tovar => tovar.id == id);
    return (
        <section className={s.product__block}>
            <Link className={s.btn__home} to="/catalog"><span>←</span>В каталог</Link>
            <div className={s.product}>
                <div className={s.product__img}>
                    <img src={tovar.img} alt="" />
                </div>

                <div className={s.product__about}>
                    <h1 className={s.product__name}>
                        {tovar.name}
                    </h1>

                    <p className={s.desc}>{tovar.desc}</p>

                    <p className={s.product__price}>
                        <p className={s.price__p}><span>{tovar.price}</span> ₽</p>
                        <p className={s.size__p}>Размер: <span>{tovar.size}</span></p>
                        <button className={s.active}>Добавить в корзину</button>
                    </p>
                </div>
            </div>
        </section>
    )
}