import React from 'react'
import "./ShowCase.scss"
import Placeholder from "../../assets/onlycpl.PNG"
function ShowCase({data, conversionFlow}) {
    console.log(data)
  return (
    <div className='showcase'>
        <div className="showcase__header">
            <img className='showcase__image' src={Placeholder}></img>
            <p className='showcase__description'><h2>Description:</h2> <br></br>{data.description}</p>
        </div>
        <div className="flex-row">
            <div className="showcase__information">
                <h2>About</h2> 
                <br></br>
                <p className="showcase__information-text">Model: {data.name}</p>
                <p className="showcase__information-text">ID: {data.id}</p>
                <p className="showcase__information-text">Status: {data.status.toUpperCase()}</p>
                <p className="showcase__information-text">Price: {data.price ? (data.price + "$") : "Free"}</p>
                <p className="showcase__information-text">CPL: {data.cpl}$</p>
                <p className="showcase__information-text">Restrictions:</p>
                <ul>
                    {data.restrictions.map((restriction, idx)=>{
                        return <li idx={idx}>{restriction}</li>
                    })}
                </ul>
                <p className="showcase__information-text">Countries:</p>
                <ul>
                    {data.countries.map((country, idx)=>{
                        return <li idx={idx}>{country}</li>
                    })}
                </ul>
            </div>
            <div className="promotion-material">
                <h2>Promotion material</h2> 
                <br></br>
                <p className="showcase__information-text">Model link: <a className="link" href={data.link}>{data.name}</a></p>
                <p className="showcase__information-text">Restrictions:</p>
                <p className="showcase__information-text">Media: <a className="link" href={data.media}>Google Drive</a></p>
                <p className="showcase__information-text">Promotion link: <input className="promotion-link" contentEditable="false" value={data.tracking}></input><button className="copy-button">Copy</button></p>
                <br></br>
                <h2>Conversion Flow</h2> 
                <br></br>
                <ul className='conversion-flow'>
                    {conversionFlow.map((item, idx)=>{
                        return <li idx={idx}>{item}</li>
                    })}
                </ul>  
            </div>
        </div>
    </div>
  )
}

export default ShowCase