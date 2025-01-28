import React from "react";
import './Trends.scss';

export const Trends = () => {
    return(
        <>
            <div className="Trends container">
                <div className="container__content follow__container_list">

                    <div className="container__title">
                        <h2>Germany Trends</h2>
                    </div>

                    <Trend trendType='1 ·Politics · Trending' trendTitle='Gendern' trendNews='Trending with Sprache, Verbotspartei'/>
                    <Trend trendType='2 ·Sports · Trending' trendTitle='Real Madrid' trendNews='Trending with Sprache, Verbotspartei'/>
                    <Trend trendType='3 ·Educations · Trending' trendTitle='Universities' trendNews='Trending with Sprache, Verbotspartei'/>

                    <div className="show-more__container">
                        <a href="/trends" className="show-more__link">Show more</a>
                    </div>
                </div>
            </div>
        </>
    )
}

const Trend = ({trendType,trendTitle,trendNews}) => {
    return (
        <>
            <div className="follow__container">
                <div className="profile-card">
                    <div className="user-data">
                        <h6>{trendType}</h6>
                        <h5 className="user-username">{trendTitle}</h5>
                        <h6>{trendNews}</h6>
                    </div>
                </div>

                <div className="follow-btn__container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16"><path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/></svg>
                </div>
            </div>

        </>
    )
};

