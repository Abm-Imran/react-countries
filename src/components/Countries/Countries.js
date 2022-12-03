import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        const url = 'https://restcountries.com/v3.1/all';
        axios.get(url)
        .then(data=> setCountries(data.data))
    },[])
    return (
        <div>
            <h1>Country Loaded: {countries.length}</h1>
        </div>
    );
};

export default Countries;