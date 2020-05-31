import React, { useState } from 'react';
import useStats from '../../Utilities/Utilities';
import Stats from '../Stats/Stats';
import './CountrySelector.css';

const CountrySelector = () => {
    const {stats: countries, loading, error} = useStats('https://covid19.mathdro.id/api/countries');

    const [selectedCountry, setSelectedCountry] = useState('BGD');
    if(loading) return <p>Loading...</p>
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error...</p>
    return(
        <div>
            <div className="country-section">
            <h2><strong>Current Situation of {selectedCountry}</strong></h2>
            <select onChange={e=>{
                    setSelectedCountry(e.target.value)
                }}>
                {
                    Object.entries(countries.countries).map((
                        [country, code]) => {
                            return <option 
                            selected={selectedCountry === countries.iso3[code]}
                            key={code} 
                            value={countries.iso3[code]}>
                                {country}
                            </option>
                        })}
            </select>
        </div>
        <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></Stats>
        </div>
        
    )
};

export default CountrySelector;