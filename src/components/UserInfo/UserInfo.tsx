import React from 'react';
import css from './UserInfo.module.css'

const UserInfo = () => {
    return (
        <div className={css.blockLogo}>
            <img src="https://i.pinimg.com/originals/ad/f1/5d/adf15dce18b5a779b98d11ab4c6c4ea4.jpg" className={css.logo} alt="ava"/>
        </div>
    );
};

export default UserInfo;