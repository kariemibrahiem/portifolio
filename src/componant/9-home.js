import { useEffect, useState } from "react";
import Navs from "./1-nav/nav";
import Hero from "./2-hero/hero";
import Main from "./3-main/main";
import Contact from "./4-contact/contact";
import Footer from "./5-footer/footer";

function Home() {
      const [scrollbtn, setbtn] = useState(0); 
      useEffect(() =>{
        window.addEventListener("scroll" , () => {
            if(window.scrollY >250){
              setbtn(1);
            }else{
              setbtn(0)
            }
        })
   } ,[]);
  
    
    return (
      
      <div>
      <div id='up' className="container  cont w-100">
              <Navs />
              <Hero />
              <Main />
              <Contact />
              <Footer />
              (<a href='#up' style={{opacity: scrollbtn , transition: "1s"}}>
              <button  className='slide btn btn-primary' >^</button>
              </a>)
              </div>
      </div>
    );
  }
  
  export default Home;
  