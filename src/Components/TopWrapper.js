import React from 'react'
import TopButton from './TopWrappComponents/TopButton'
import TopInput from './TopWrappComponents/TopInput'

function TopWrapper () {

    return (
        <div className="top-wrapper">
            <TopButton name="Личный кабинет" img={<img src="http://s1.iconbird.com/ico/2014/1/606/w512h5121390848145businessman512.png" alt="Картинка" width="20px" height="20px" />} />
            <div className="shop-name">Anthony Unknown</div>
            <TopInput type="text" placeholder="Поиск" />
            <TopButton name="Корзина" img={<img src="https://cdn-icons-png.flaticon.com/512/3081/3081822.png" alt="Картинка" width="20px" height="20px" />} />
        </div>
    )
}

export default TopWrapper