import './sidebar.scss'
import {NavLink} from "react-router-dom";

const Sidebar = () => {


    return (
        <aside className='sidebar'>
            <ul className="sidebar__list">
                <li><NavLink to="profile" className='sidebar__link'>Profile</NavLink></li>
                <li><NavLink to="chat" className='sidebar__link'>Chat</NavLink></li>
                <li><NavLink to="dialogs" className='sidebar__link'>Messages</NavLink></li>
                <li><NavLink to="search" className='sidebar__link'>Find users</NavLink></li>
                <li><NavLink to="feed" className='sidebar__link'>News</NavLink></li>
                <li><NavLink to="music" className='sidebar__link'>Music</NavLink></li>
                <li><NavLink to="settings" className='sidebar__link'>Settings</NavLink></li>
            </ul>
        </aside>
    )
}

export default Sidebar