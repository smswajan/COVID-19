import React, { useState } from 'react';
import useStats from '../../Utilities/Utilities';

const Stats = (props) => {
    const {stats, loading, error} = useStats(props.url);
    console.log(stats, loading, error);

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error...</p>;
    return(
        <div>
            <div className="statBlock">
                <h3>Confirmed:</h3>
                <span>{stats.confirmed.value}</span>
            </div>
            <div className="statBlock">
                <h3>Deaths:</h3>
                <span>{stats.deaths.value}</span>
            </div>
            <div className="statBlock">
                <h3>Recovered:</h3>
                <span>{stats.recovered.value}</span>
            </div>
        </div>
    )
};

export default Stats;