import React, { useState } from 'react';
import useStats from '../../Utilities/Utilities';
import './Stats.css';

const Stats = (props) => {
    const {stats, loading, error} = useStats(props.url);
    console.log(stats, loading, error);

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error...</p>;
    return(
        
        <div className="stats">
            <div className="single-stat stat-one">
                <h2>Confirmed:</h2>
                <h1>{stats.confirmed.value}</h1>
            </div>
            <div className="single-stat stat-two">
                <h2>Deaths:</h2>
                <h1>{stats.deaths.value}</h1>
            </div>
            <div className="single-stat stat-three">
                <h2>Recovered:</h2>
                <h1>{stats.recovered.value}</h1>
            </div>
        </div>
    )
};

export default Stats;