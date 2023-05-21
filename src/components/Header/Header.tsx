import React, {FC} from 'react';
import css from './Header.module.css';
import { Link } from 'react-router-dom';
import UserInfo from '../UserInfo/UserInfo';


const Header: FC = () => {


   return (
        <div className={css.Header}>
            <div className={css.nameWebSite}>
                <Link to={'/'} id={css.linkWebSite}>
                    WEBSITE
                </Link>
                <button  className={css.buttonSwitcherTheme}>
                    Switcher
                </button>
            </div>
            <div className={css.blockLogo}>
                <Link to={'/movieList'} id={css.linkMovieList}>
                    Movie List
                </Link>
                <UserInfo />
            </div>
        </div>
    );
};

export default Header;
