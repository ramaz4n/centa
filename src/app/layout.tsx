import { Kanit } from 'next/font/google'
import './globals.scss'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'


const kanit = Kanit({ 
      weight: ['300', '400', '500', '600', '700'], 
      subsets: ['latin'],  
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
         <body className={kanit.className}>
            <Header/>


            {children}
            

            <Footer/>
         </body>
      </html>
   )
}
