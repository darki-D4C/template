/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Aside() {
    return (
        <aside className="side-menu">
            <ul className="tags">
                <li>
                    <a href="">
                        <img className="profile-icon" src="profile-user.png" alt="Profile" width="60px" height="60px" />
                    </a>
                </li>
                <li className="tag"> <a className="tag-link" href="">Профиль</a></li>
                <li className="tag"> <a className="tag-link" href="">Выйти</a></li>
            </ul>
        </aside>
    );
}

export default Aside;