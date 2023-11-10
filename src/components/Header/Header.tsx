"use client"

import { useRouter, usePathname} from 'next/navigation'
import {useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'


import logoImg from '../../../public/images/logo.png'
import burgerImg from '../../../public/images/burger.svg'

import styles from './Header.module.scss'



const Header = () => {
	const [burger, setBurger] = useState(false)

   const pathname = usePathname()

   const burgerHandler = ()=>{
		setBurger(true)
   }
   const closeMobMenu =()=>{
		setBurger(false)
   }

  return (
	 <header className={styles.header}>
	 	<div className={styles.header__container}>
			<div className={styles.header__logo}>
				<Link className={styles.logo__bg} href="/">
				   <Image
				      src={logoImg}
				      width={184}
				      height={63}
				      alt="logo"
				   />
				</Link>
				<Link className={styles.logo__md} href="/">
				   <Image
				      src={logoImg}
				      width={138}
				      height={47}
				      alt="logo"
				   />
				</Link>
			</div>

			<div className={styles.header__wrapper}>
				<ul className={styles.header__menu}>
			      <li >
			         <Link 
			         	className={pathname == '/' ? styles.header__menuActiveItemLink : styles.header__menuItemLink} 
			         	href="/"
			         > Главная </Link>
			      </li>
			      <li>
			         <Link 
			        		className={pathname == '/products' ? styles.header__menuActiveItemLink : styles.header__menuItemLink} 
			         	href="/products"
			      	> Продукты</Link>
			      </li>
			      <li>
			         <Link 
			         	className={pathname == '/gallery' ? styles.header__menuActiveItemLink : styles.header__menuItemLink} 
			         	href="/gallery"
			         >Галерея</Link>
			      </li>
			      <li>
			         <Link 
			         	className={pathname == '/contacts' ? styles.header__menuActiveItemLink : styles.header__menuItemLink}
			         	href="/contacts"
			         >Контакты</Link>
			      </li>
				</ul>

				<div className={styles.header__catalog}>
					<Link 
			        	className={styles.header__ctLink} 
			         href="https://centa.com.tr/wp-content/uploads/2023/06/CENTA-katalog-2023.pdf"
			         target="__blank"
			      > Каталог</Link>
				</div>

			</div>

			<Image 
				onClick={burgerHandler}
				className={styles.burger}
				src={burgerImg}
				width={34}
				height={34}
				alt="burger"
			/>



			<div onClick={closeMobMenu} className={burger? styles.mobileMenu : styles.off}>
				<div onClick={(e)=>{e.stopPropagation()}} className={burger? styles.mobileMenu__wrapper: styles.mobileMenu__wrapperOff}>
					<div className={styles.header__logo}>
						<Link className={styles.logo__md} href="/">
							<Image
								src={logoImg}
								width={138}
								height={47}
								alt="logo"
							/>
						</Link>
					</div>

					<div className={styles.header__wrapper}>
						<ul className={styles.header__menu}>
						<li >
							<Link 
								className={pathname == '/' ? styles.header__menuActiveItemLink : styles.header__menuItemLink} 
								href="/"
							> Главная </Link>
						</li>
						<li>
							<Link 
									className={pathname == '/products' ? styles.header__menuActiveItemLink : styles.header__menuItemLink} 
								href="/products"
							> Продукты</Link>
						</li>
						<li>
							<Link 
								className={pathname == '/gallery' ? styles.header__menuActiveItemLink : styles.header__menuItemLink} 
								href="/gallery"
							>Галерея</Link>
						</li>
						<li>
							<Link 
								className={pathname == '/contacts' ? styles.header__menuActiveItemLink : styles.header__menuItemLink}
								href="/contacts"
							>Контакты</Link>
						</li>
						</ul>

						<div className={styles.header__catalog}>
							<Link 
								className={styles.header__ctLink} 
							href="https://centa.com.tr/wp-content/uploads/2023/06/CENTA-katalog-2023.pdf"
							target="__blank"
						> Каталог</Link>
						</div>

					</div>

					<Image 
						onClick={burgerHandler}
						className={styles.burger}
						src={burgerImg}
						width={34}
						height={34}
						alt="burger"
					/>

			
				</div>
			</div>

		</div>
	 </header>
  );
};

export default Header;



