import { useLocation } from "react-router-dom"
import { SHOES } from "../../utils/crud.mjs"
import TrendShoes from "./trend shoes/TrendShoes.jsx"
import ContactUs from "./contact-us/ContactUs"
import './Home.css'
import PopUp from "../popup/PopUp.jsx"
import { useEffect } from "react"
import { POPUP } from "../../utils/local.mjs"
export default function Home() {

  return (
    <>
        <TrendShoes shoes={SHOES}/>
        <ContactUs/>
    </>
    )
}
