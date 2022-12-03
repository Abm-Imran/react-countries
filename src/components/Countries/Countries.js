import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    // console.log(countries);

    useEffect(() => {
        const url = 'https://restcountries.com/v3.1/all';
        axios.get(url)
            .then(data => setCountries(data.data))
    }, [])
    return (
        <div className='country-container'>
            {/* <h1>Country Loaded: {countries.length}</h1> */}
            <div className="country-list">
                {
                    countries.map(country => <div>
                        <NavLink
                            title={country.name.common}
                            key={country.name.common}
                            to={'/countries/' + country.name.common}
                        > {country.name.common.length > 20 ? country.name.common.slice(0, 20) + '...' : (country.name.common)} </NavLink>
                    </div>)
                    // Method 1....{country.name.common.length >20 ? country.name.common.slice(0,20)+'...' : (country.name.common)}
                    // Method 2....{country.name.common.slice(0,20)+'...'} 
                    // Duitar jekono akta method use korlei kaj korbe. amra method 1 ba ternary method use kre country name short korlam
                }
            </div>
            <div className="country-details">
                <div className="display-country-details">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Countries;