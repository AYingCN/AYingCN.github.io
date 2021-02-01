// used for part SCHOOL
import React from 'react'
import './index.css';

export default function ImgWithShortText(props) {
    // baseName="../../assets/school/"
    // const pic = require("../../assets/school/" + props.pics[0]);
    const pics = props.pics.map((pic) => 
        <div className="img-container" key={pic}>
            <img src={require("../../assets/school/" + pic)} alt="pic" />
        </div>
    )
    return (
        <div className="part">
            <div className="desc">{props.desc}</div>
            <div className="pics">
                {pics}
            </div>
        </div>
    )
}