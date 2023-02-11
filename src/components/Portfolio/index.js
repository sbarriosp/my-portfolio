import React from "react";
import Loader from "react-loaders";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import portfolioData from "./data/portfolio.json";

const Portfolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    console.log(portfolioData);  

    useEffect (() => {
        const timer= setTimeout (() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });  

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className='image-box' key={idx}>  
                                    <div className="content">
                                        <p className="title"> {port.title}</p>
                                        <h4 className="description"> {port.description}</h4>
                                        <button className="btn" onClick={() => window.open(port.url)}>View</button>
                                    </div>
                            </div>
                        )
                    } )
                }                
            </div>
        );
    }

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>
            <Loader type="line-spin-fade-loader"/>
        </>
    );
}

export default Portfolio;