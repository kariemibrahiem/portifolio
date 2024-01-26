import React, { Fragment } from "react";
import "./contact.css";
import { Button, Card , Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import con from "../images/picture ,icons/location.gif"
import home from "../images/picture ,icons/home (1).gif"
import Lottie from "lottie-react";
import email from "../../animation/email.json"
import developer from "../../animation/developer.json"
const Contact = () =>{
    return(
        <section className="contact_sec">
            <div className="container m-3">
               <span className="head">
                <img className="icon_con" src={con}/>
                <h2>contact us</h2>
                </span> 
                <p>you now can connect with our company directly so don't waste this chance , we wait you </p>
            </div>
            <div className="row w-100">
                <div className="col-sm-12 col-md-6 w-50">
                    <label htmlFor="email" className="m-2">Email Address:</label><br/>
                    <input type="email" id="email" className="email form-control m-2" placeholder="your email" />
                    <label htmlFor="text">your message:</label>
                    <textarea id="text" className="form-control m-2" rows={5} cols={50}></textarea>
                    <button className="btn btn-outline-danger m-2 w-100">submit</button>
                </div>
                <div className="col-sm-12 col-md-6 w-50">
                    <Lottie animationData={email}/>
                </div>
            </div>
        </section>
    );
}

export default Contact;