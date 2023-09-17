import React, {useState} from 'react';
import "./Panel.scss";
import Logo from "../../assets/onlycpl_transparent.PNG"
import Menu from "../../assets/menu.PNG"
import OfferItem from '../OfferItem/OfferItem';

function Panel({data, conversionFlow}) {

    const [view, setView] = useState("offers");

  return (
    <div className="panel">
        <div className='panel__head'>
            <img className='panel-logo' src={Logo}></img>
            <button className='panel__head-menu'><img className='menu-image' src={Menu}></img></button>
        </div>
        <div className='panel__body'>
            {view === "offers" && (
                data.models.map((offer, idx) => {
                    return (
                        <OfferItem data={offer} key={idx} conversionFlow={conversionFlow}></OfferItem>
                    )
                })
            )}
        </div>
    </div>
  )
}

export default Panel