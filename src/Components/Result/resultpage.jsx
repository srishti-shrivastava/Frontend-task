import React from 'react'
import Avatar from 'react-avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './resultpage.css';

const resultpage = () => {
    return (
        <div className="result-main">
            <div className="result-main-wrapper">
            <p><Avatar name="Female Nischal" size="50" round={true}/>Female Nischal<br/>
            <p className="result-main-p"> 2|6'8|India</p></p>
            </div>
            <div className="result-main-wrapper-2"> <FavoriteBorderIcon/> <span className="result-main-span">
                <button type="button" className="result-main-button" >Chat</button>
                </span></div>
        </div>
    )
}

export default resultpage;
