import type {Metadata} from 'next'
import styles from './page.module.scss'


export const metadata: Metadata = {
   title: 'Главная',
   description: ''
}



export default function Home() {
   return (
      <main className={styles.main}>
         homePage
      </main>
   )
}






