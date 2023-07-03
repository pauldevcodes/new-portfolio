import { Inter, Karla, Fasthand } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const fastHand = Fasthand({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400"]
})

export const karla = Karla({
    subsets: ['latin'],
    display: 'swap',
    weight: ["400", "500", "600", "700", "800"]
})