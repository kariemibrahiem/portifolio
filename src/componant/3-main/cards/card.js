import { Button, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./card.css"
import ic1 from "../../images/picture ,icons/git_light.png";
import ic2 from "../../images/picture ,icons/linked_light.png";
import ic3 from "../../images/picture ,icons/phone.gif";
import pc1 from "../../images/picture ,icons/cofee.jpg";
import pc2 from "../../images/picture ,icons/burger.jpg";
import pc3 from "../../images/picture ,icons/meal.jpg";
import pc4 from "../../images/picture ,icons/pizza2.png";
import pc5 from "../../images/picture ,icons/pizza4.jpg";
const Cards = (props) =>{
   
    return(
        <div>
            <Card className="card_sec"> 
             {/* <Card.Img variant="top" src={tep.img} className="card_img" style={{width: "100%" , height : "200px"}}   /> */}
                <Card.Body className="crd">
                    <h2 className="card_title">{props.title}</h2>
                    <p className="cat">by {props.cat}</p>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.

                    </Card.Text>
                    <div className="card_btn">
                        <div>
                        <img className="icon" src={ic1}/>
                        <img className="icon" src={ic2}/>
                        </div>
                        <div>
                            <a  href="#">more...</a>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Cards;