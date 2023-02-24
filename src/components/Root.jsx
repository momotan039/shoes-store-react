import { useState, useEffect, useMemo } from "react";
import { Outlet} from "react-router-dom";
import { DeleteShoe, getShoes } from "../utils/crud.mjs";
import { rootRefs } from "../utils/local.mjs";
import Footer from "./footer/Footer.jsx";
import Header from "./header/Header";
import GridSpinner from "./spinner/GridSpinner.jsx";

export default function Root() {
  const [shoes, setShoe] = useState();

  rootRefs.reCallData=async()=>{
    const shs= await getShoes()
    setShoe(shs)
    history.pushState(shs,'stam')
    return shs
  }

  useEffect(() => {
    rootRefs.reCallData()
  }, []);

  return (
    <>
      {
      shoes ? 
         <>
         <Header/>
         <Outlet />
         <Footer/>
       </>
      : 
        <GridSpinner/>
      }
    </>
    
  );
}
