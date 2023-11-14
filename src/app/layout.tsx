import { Montserrat } from 'next/font/google'
import './globals.scss'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'


const montserrat = Montserrat({ 
      weight: ['300', '400', '500', '600', '700'], 
      subsets: ['latin', 'cyrillic'],  
		style: ['normal'],
      variable: '--var-kanit'
})



export default function RootLayout({
      children,
   }: {
      children: React.ReactNode
   }) {
   return (
      <html lang="en">
         <body className={montserrat.className}>
            <Header/>


            {children}
            

            <Footer/>
         </body>
      </html>
   )
}
