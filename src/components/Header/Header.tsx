"use client"

import { useRouter, usePathname} from 'next/navigation'
import {useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'


import logoImg from '../../../public/images/logo.png'

import styles from './Header.module.scss'



const Header = () => {

   const pathname = usePathname()


  useEffect(()=>{
     console.log(pathname)
  },[pathname])


  return (
	 <header className={styles.header}>
	 	<div className={styles.header__container}>
			<div className={styles.header__logo}>
			   <Image
			      src={logoImg}
			      width={184}
			      height={63}
			      alt="logo"
			   />
			</div>

			<ul className={styles.header__menu}>
		      <li className={pathname == '/' ? styles.header__menuActiveItem : styles.header__menuItem} >
		         <Link 
		         	className={pathname == '/' ? styles.header__menuActiveItemLink : styles.header__menuItemLink} 
		         	href="/"
		         > Главная </Link>
		      </li>
		      <li className={pathname == '/products' ? styles.header__menuActiveItem : styles.header__menuItem} >
		         <Link 
		        		className={pathname == '/products' ? styles.header__menuActiveItemLink : styles.header__menuItemLink} 
		         	href="/products"
		      	> Продукты</Link>
		      </li>
		      <li className={pathname == '/gallery' ? styles.header__menuActiveItem : styles.header__menuItem} >
		         <Link 
		         	className={pathname == '/gallery' ? styles.header__menuActiveItemLink : styles.header__menuItemLink} 
		         	href="/gallery"
		         >Галерея</Link>
		      </li>
		      <li className={pathname == '/contacts' ? styles.header__menuActiveItem : styles.header__menuItem} >
		         <Link 
		         	className={pathname == '/contacts' ? styles.header__menuActiveItemLink : styles.header__menuItemLink}
		         	href="/contacts"
		         >Контакты</Link>
		      </li>
			</ul>
		</div>
	 </header>
  );
};

export default Header;



