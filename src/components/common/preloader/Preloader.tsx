import React from 'react';
import preloader from './preloader.gif'
import s from "./Preloader.module.css"

export const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt="preloader" className={s.preloader}/>
        </div>
    );
};