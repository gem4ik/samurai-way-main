import style from "./Header.module.css"
import {NavLink} from "react-router-dom";
import s from './Header.module.css'
import {HeaderPropsType} from "./HeaderContainer";



export function Header(props: HeaderPropsType) {
    return (
        <header className={style.header}>
            <div>
                <NavLink
                    to="/profile"
                    className={style.item}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/200px-Linkedin.svg.png"
                        alt="logo"/>
                </NavLink>
                <div className={s.loginBlock}>
                    {props.isAuth
                        ?props.login
                    :<NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header>
    )
}