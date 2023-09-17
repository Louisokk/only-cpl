import React, {useState} from 'react'
import "./OfferItem.scss"
import Placeholder from "../../assets/onlycpl.PNG"
import ShowCase from '../ShowCase/ShowCase';

function OfferItem({data, conversionFlow}) {

    const [isActive, setIsActive] = useState(false);

  return (
    <div className='offer-item' onClick={()=>setIsActive(!isActive)}>
        <img className="offer-item__image" src={Placeholder}></img>
        <div className='offer-item__information'>
            <span className='offer-item__information-text offer-item__information-name'>{data.name}</span>
            <span className='offer-item__information-text offer-item__information-status'>Status: {data.status}</span>
            <span className='offer-item__information-text offer-item__information-price'>Subscription: {data.price !== "" ? (data.price+"$") : "Free"}</span>
            <span className='offer-item__information-text offer-item__information-cpl'>CPL: {data.cpl}$</span>
        </div>

        {isActive && (
            <ShowCase data={data} conversionFlow={conversionFlow}></ShowCase>
        )}
    </div>
  )
}

export default OfferItem