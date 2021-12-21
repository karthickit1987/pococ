import styles from './css/styles.css';
import { LitElement, html } from '@polymer/lit-element';
import Header from './header';

export default ({ name, staticPath }) =>
  `<div class=${styles.header}>
    HEADER 
  </div>
  <div class=${styles.sidebar}>
     <div>SideBar - Menu </div>
  </div>
  <div class=${styles.content}>
    Content Page 
  </div>
  <div class=${styles.footer}>
   Footer 
  </div>`;
  
  
   
