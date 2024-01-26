import React, { Fragment } from "react";
import "./hero.css";
import my_ph from "../images/my.png";
import ReactDOM from 'react-dom'
import p1 from "../images/picture ,icons/git_light.png";
import p2 from "../images/picture ,icons/linked_icon_active.png";
import p3 from "../images/picture ,icons/face_icon.png";
import logo from "../images/logo.png"
import back from "../images/back.png"
import Lottie from "lottie-react";
import developer from "../../animation/developer3.json"
const Hero = () =>{
    return(
        <Fragment>
            <div className="row hero_sec">
                <div className="col-sm-12 col-md-6">
                    <img src={my_ph} className="img_pro"/>
                    <h2>
                    Software designer. 
                    </h2>
                    <p className="text">
                    I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.
                    </p>
                    <div className="connection">
                        <img src={p1} className="icon"/>
                        <img src={p2} className="icon"/>
                        <img src={p3} className="icon"/>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 logo_div">
                    <Lottie animationData={developer}/>
                </div>
            </div>
        </Fragment>
    );
}

export default Hero;