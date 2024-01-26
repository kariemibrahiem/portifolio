import React, { Fragment, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import "./main.css";
import Cards from "./cards/card";
import pc1 from "../images/picture ,icons/cofee.jpg";
import pc2 from "../images/picture ,icons/burger.jpg";
import pc3 from "../images/picture ,icons/meal.jpg";
import pc4 from "../images/picture ,icons/pizza2.png";
import pc5 from "../images/picture ,icons/pizza4.jpg";

const mycard= [ {title:"page design 1" ,cat:"css" , picture:{pc1}} ,
                {title:"page design 5" ,cat:"css", picture:{pc2}},
                {title:"page design 2" ,cat:"javascript", picture:{pc2}} ,
                {title:"page design 6" ,cat:"javascript", picture:{pc4}},
                {title:"page design 3" ,cat:"jquery", picture:{pc3}} ,
                {title:"page design 7" ,cat:"jquery", picture:{pc4}},
                {title:"page design 4" ,cat:"bootstrap", picture:{pc4}},
                {title:"page design 7" ,cat:"bootstrap", picture:{pc4}}
            ];

const Main = () =>{
    const handel = (par) => { {/*th ecards category fun */}
        const newArr = mycard.filter((elements) => {
            return elements.cat === par;
        });
        setarr(newArr)
    }

    var [active , setactive] = useState(0); {/*the activate buttons */}

    const [arr , setarr] = useState(mycard);
    return(
        <div className="container main_sec">
            <div className="main_con">
                <div className=" btn_div ">
                    <button onClick={() => {setactive(0); setarr(mycard)}} className= {active == 0 ? "btn btn-outline-success m-1 active" : "btn btn-outline-success m-1 "} >all projects</button>
                    <button onClick={() => {setactive(1); handel("css") ;{/*the cars category function */} }} className= {active == 1 ? "btn btn-outline-success m-1 active" : "btn btn-outline-success m-1 "} >HTML & CSS</button>
                    <button onClick={() => {setactive(2); handel("javascript") ;{/*the cars category function */}}} className= {active == 2 ? "btn btn-outline-success m-1 active" : "btn btn-outline-success m-1 "} >JAVASCRIPT</button>
                    <button onClick={() => {setactive(3); handel("jquery") ;{/*the cars category function */}}} className= {active == 3 ? "btn btn-outline-success m-1 active" : "btn btn-outline-success m-1 "} >jquery</button>
                    <button onClick={() => {setactive(4); handel("bootstrap")  ;{/*the cars category function */} ;{/*the cars category function */}}} className= {active == 4 ? "btn btn-outline-success m-1 active" : "btn btn-outline-success m-1 "} >bootstrap</button>
                </div>
                <div className=" cards_div ">
                    {/* {active == 0 ? <div className=""><Cards title="page design 1" picture={pc1} /></div> : null}
                    {active == 1 ? <div className=""><Cards title="page design 2" picture={pc2} /></div> : null}
                    {active == 2 ? <div className=""><Cards title="page design 3" picture={pc3} /></div> : null}
                    {active == 3 ? <div className=""><Cards title="page design 4" picture={pc4} /></div> : null}
                    {active == 4 ? <div className=""><Cards title="page design 5" picture={pc5} /></div> : null} */}
                    {/*translated from ^^ to the following */}
                    {arr.map((elements , index)=>{                   
                            return(
                                <>
                                <br/>
                                                                
                                <br/>
                                <Cards key={index} title={elements.title} picture={elements.picture} cat={elements.cat}/>
                                <br/>
                                </>
                            );
                        })}
                        
                </div>
            </div>
        </div>
    );
}
export default Main;