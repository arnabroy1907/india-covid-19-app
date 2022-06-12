import axios from 'axios';
import config from '../config';
import { CountryCovidData } from '../types';

const covidApiUrl = config.covidDataApi;
const apiTimeOut = config.apiTimeOut;

export const getCovidData = async (): Promise<CountryCovidData | null> => {
    try {
        const covidDataRes = await axios.get<CountryCovidData>(covidApiUrl, {
            timeout: apiTimeOut
        });

        return covidDataRes.data;
    } catch (err) {
        console.error(err);
        return null;
    }
}