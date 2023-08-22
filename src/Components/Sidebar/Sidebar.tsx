import React from 'react';
import styles from '../Sidebar/Sidebar.module.css';
import avatar from '../../Assets/avatar.gif';
import {PencilLine} from 'phosphor-react';
import Avatar from '../Avatar/Avatar';

const Sidebar = () => {
  return (
   <aside className={styles.sidebar}>
    <img
     className={styles.cover}
     src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
     alt='Banner SideBar'
    />
    <div className={styles.profile}>
      <Avatar src={avatar}/>
      <strong>Giovani Marchezini</strong>
      <span>Web Developer</span>
    </div>
    <footer>
      <a href="#">
        <PencilLine size={20}/>
        Editar seu perfil
      </a>
    </footer>
   </aside>
  )
}

export default Sidebar
