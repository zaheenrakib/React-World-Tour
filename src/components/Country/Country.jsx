import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({ country ,handleVisitedCountry ,handleVisitedflags}) => {
    const {name,flags,population,area,cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color:visited ? 'red': 'white'}}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population {population}</p>
            <p>Area : {area} </p>
            <p><small>Code: {cca3} </small></p>
            <button onClick={() =>handleVisitedCountry(country)}>Mark visited</button>
            <br />
            <button onClick={() => handleVisitedflags(country.flags.png)}>Add flag</button>
            <br />
            <button onClick={handleVisited} >{visited ? 'visited' : 'Going'}</button>
            {visited ? 'I have visited this country.' : 'I want to visit'}

            <hr />
            <CountryDetail
            country = {country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedflags={handleVisitedflags}
            
            >
            </CountryDetail>
        </div>
    );
};

export default Country;