import React from "react";
import s from './Header.module.css'

const Header = () => {
    return ( <header className={s.Header}> {/* return  <header> было так, но зделал как у препода при пересмотре
        уроков */}
    <img className={s.img} src='https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn' alt='her'></img>
  </header>
    )
};

export default Header;