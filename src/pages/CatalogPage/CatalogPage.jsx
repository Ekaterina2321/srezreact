
import Item from '../../components/Item/Item'
import s from './CatalogPage.module.css'
import { useState } from 'react'
import { tovars } from '../../data/data'
import { Search } from '../../components/Search/Search';

export function CatalogPage() {
    const [query, setQuery] = useState('');
    const [sorting, setSorting] = useState('');
    const [category, setCategory] = useState(0);
    function sort(e) {
        setSorting(e.target.value);
    }
    function handleChange(e) {
        setQuery(e.target.value)
    }
    const filteredTovars = tovars.filter((tovar) => {
        return tovar.name.toLowerCase().includes(query.toLowerCase())
            &&
            (tovar.category == category || category == 0)
            ;
    });
    const sortTovars = (sorting, tovars) => {
        switch (sorting) {
            case 'price_asc':
                return [...tovars].sort((a, b) => a.price - b.price);
            case 'price_desc':
                return [...tovars].sort((a, b) => b.price - a.price);
            default:
                return tovars;
        }
    };
    const sortedFilteredTovars = sortTovars(sorting, filteredTovars);
    return (
        <div className="section">
            <div className={s.catalog}>
                <div className="title-search">
                    <h2>Каталог товаров</h2>
                    <Search handleChange={handleChange} />
                </div>

                <div className={s.sort__category}>
                    <div className={s.category}>

                        <div className={s.btns}>
                            <button onClick={() => setCategory(0)} className={s.active}>Все толстовки</button>
                            <button onClick={() => setCategory(1)}> Худи</button>
                            <button onClick={() => setCategory(2)}>Зип худи</button>
                            <button onClick={() => setCategory(3)}>Халф зип</button>
                            <button onClick={() => setCategory(4)}>Свитера</button>
                        </div>
                    </div>
                    <div className={s.sort}>
                        <p>Сортировка:</p>
                        <select onChange={sort}>
                            <option value="price_asc">По возрастанию цены</option>
                            <option value="price_desc">По убыванию цены</option>
                        </select>
                    </div>
                </div>


                <div className={s.items}>

                    {
                        sortedFilteredTovars.length ? (
                            sortedFilteredTovars.map((tovar) => {
                                return <Item id={tovar.id} img={tovar.img} name={tovar.name} desc={tovar.desc} price={tovar.price} size={tovar.size} count={tovar.count} />

                            })
                        ) : (
                            <p className={s.error}>Ничего не найдено по запросу "{query}"</p>
                        )}

                </div>
            </div>
        </div>
    )
}