import style from "./Nav.module.css"
import {NavLink} from "react-router-dom";

export function Nav() {
    return (
        <div className={style.nav}>
                <NavLink
                    to="/profile"
                    className={style.item}>Profile</NavLink>
                <NavLink
                    to="/dialogs"
                    className={style.item}>Messages</NavLink>
                <NavLink
                    to="/friends"
                    className={style.item}>Friends</NavLink>
                <NavLink
                    to="/music"
                    className={style.item}>Music</NavLink>
                <NavLink
                    to="/settings"
                    className={style.item}>Settings</NavLink>
        </div>
    )
}