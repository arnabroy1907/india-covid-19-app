import { useEffect, useState } from 'react';
import { MainCard } from '../components/MainCard/maincard';
import { Map } from '../components/Map/map';
import { NavBar } from '../components/Navbar/navbar';
import { StateList } from '../components/StateList/statelist';
import { CountryCovidData, CovidData } from '../types';
import { getCovidData } from '../utils/common.utils';
import { ErrorSection, Loader, MainAppContainer, MainLayoutContainer, MainStatsContainer, MapContentWrapper } from './mainlayout.styles';

export const MainLayout = () => {
    const [stateCovidList, setStateCovidList] = useState<CovidData[]>([]);
    const [countryData, setCountryData] = useState<CovidData>();
    const [dataTime, setDataTime] = useState<number>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>();

    useEffect(() => {
        const getData = async () => {
            const covidData: CountryCovidData | null = await getCovidData();
            if (!covidData) { setError('Something went wrong! Failed to get covid statistical data!') }
            else {
                setDataTime(covidData.timeOfData);
                setCountryData(covidData.countryData);
                setStateCovidList([...covidData.stateWideData]);
            }
            setIsLoading(false);
        }

        getData();
    }, []);

    return (
        <MainLayoutContainer>
            <NavBar />
            <MainAppContainer>
                {isLoading && <Loader> Loading... </Loader>}
                {error && <ErrorSection>
                    <div> {error} </div>
                </ErrorSection>}
                {(countryData && stateCovidList && dataTime) && <>
                    <MainStatsContainer>
                        <MainCard countryData={countryData} timeOfData={dataTime} />
                        <StateList stateDataList={stateCovidList.sort((a, b) => b.total.active - a.total.active)} />
                    </MainStatsContainer>
                    <MapContentWrapper> <Map stateDataList={stateCovidList} /> </MapContentWrapper>
                </>}
            </MainAppContainer>
        </MainLayoutContainer>
    );
};