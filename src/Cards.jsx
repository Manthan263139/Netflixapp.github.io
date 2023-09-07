import React from 'react'
function Card(props){
    return(<div className="Cards">
    <div className="Card">
    <img src={props.imgsrc} alt="myPic" className="card_img"/>
    <div className="Card_info">
        <span className="Card_category">{props.title}</span>
        <h3 className="Card_title"> {props.sname}</h3>
        <a href={props.link} target="_blank">
            <button>Watch Now</button>
        </a>
    </div>
    
    
    </div>
    
    </div>

    );
}
export default Card;