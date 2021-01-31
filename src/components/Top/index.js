// used for part FRIENDS
import React from 'react'
import './index.css';

export default function Top(props) {
    return (
        <div className="top-fixed">
            <img className="top-logo" src={props.logo} alt="logo" />
            <div className="top-text">我一想到自己以后会死，就特别难过——所以眼前的苦难，就显得微不足道了。</div>
        </div>
    )
}