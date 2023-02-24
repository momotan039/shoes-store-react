import { useLocation } from "react-router-dom"
import { SHOES } from "../../utils/crud.mjs"
import TrendShoes from "./trend shoes/TrendShoes.jsx"
import ContactUs from "./contact-us/ContactUs"
import './Home.css'
export default function Home() {
  
  return (
    <>
        <TrendShoes shoes={SHOES}/>
        <ContactUs/>
    </>
    )
}
