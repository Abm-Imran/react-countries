import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './CountryDetail.css'

const CountryDetail = () => {
    const params = useParams();
    const [country, setCountry] = useState([]);
    // const [loading, setLoading] = useState(false);
    console.log(country);

    useEffect(() => {

        const url = 'https://restcountries.com/v3.1/name/' + params.countryId;
        // const url = `https://restcountries.com/v3.1/name/${params.countryId}`;
        axios.get(url)
            .then(data => setCountry(data.data[0]))
    }, [params.countryId]);

    return (
        <div className='country-details-container'>
            {/* <h1>Country Details for {params.countryId}</h1> */}
            <div className='country-img'>
                <img src={country.flags?.png} alt="" />

            </div>
            <div className="details-info">
                <h3>Name : {country.name?.common}</h3>
                <h3>Official_Name : {country.name?.official}</h3>
                <h3>Capital: {country.capital}</h3>
                <h3>Area: {country.area}</h3>
                <h3>Population: {country.population}</h3>
                <h3>CoatOfArms: <img src={country.coatOfArms?.png} alt="" /></h3>
                <h3>Region: {country.continents}</h3>
                <h3>Sub_Region: {country.subregion}</h3>
                <h3>WeekStart: {country.startOfWeek}</h3>
                <h3>TimeZone: {country.timezones}</h3>
                <h3>GoogleMap: <Link>{country.maps?.googleMaps}</Link></h3>
            </div>
        </div>
    );
};

export default CountryDetail;