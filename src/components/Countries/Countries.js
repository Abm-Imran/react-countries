import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Countries = () => {
    const [countries, setCountries] = useState([]);
    console.log(countries);

    useEffect(()=>{
        const url = 'https://restcountries.com/v3.1/all';
        axios.get(url)
        .then(data=> setCountries(data.data))
    },[])
    return (
        <div>
            <h1>Country Loaded: {countries.length}</h1>
            {
                countries.map(country => <Link 
                    key={country.ccn3}
                    to={'countries/'+country.name.common}
                    >{country.name.common} </Link>)
            }
        </div>
    );
};

export default Countries;