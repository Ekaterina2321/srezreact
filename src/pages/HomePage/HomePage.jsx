
import AllCollapseExample from '../../components/Accordeon/Accordeon';
import AlwaysOpenExample from '../../components/Accordeon/Accordeon';
import DarkVariantExample from '../../components/Banner/Banner';
import { Header } from '../../components/Header/Header';
import { Link } from 'react-router-dom'


export function HomePage() {
    return (
        <div className="home-page-block">
            <div className="banner">
                <div className="banner-text">
                    <h1>Chill & Thrill - </h1>
                    <h2>выбери свою хайповую толстовку</h2>

                    <Link className='btn-catalog' to="/catalog">перейти в каталог</Link>
                </div>
            </div>
            <div className="section">
                <div className="home-block">
                    <h2>Согрей свой стиль: уют и модные тенденции в каждой толстовке!</h2>
                    <div className="carucel">
                        <DarkVariantExample />
                    </div>

                </div>
            </div>
        </div>
    )
}