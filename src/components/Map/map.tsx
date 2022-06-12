import { HoverDataSection, HoverLabel, HoverStatData, HoverWrapper, MapContainer } from './map.styles';
import IndiaMap, { MapLayout, RegionData } from 'react-datamaps-india';
import { CovidData, MapProps } from '../../types';

export const getRegionalData = (stateDataList: CovidData[]) => {
    const regionData: RegionData = {};
    stateDataList.forEach((data: CovidData) => {
        // renaming some states to accomodate with the maps data libraries pre defined state names
        let modifiedStateName = data.stateName
            .replaceAll('*', '')
            .replaceAll(' and ', ' & ')
            .replaceAll('slands', 'sland');
        if (modifiedStateName === 'Arunachal Pradesh') modifiedStateName = 'Arunanchal Pradesh';
        regionData[modifiedStateName] = {
            value: data.total.active,
            covidData: {
                ...data,
            }
        }
    });

    return regionData;
}

export const HoverStateData = (props: { data: CovidData }) => {
    const { data } = props;
    const newData = data.new;

    const changeStringActive = newData.active === 0 ? '' : newData.active > 0 ? `+${newData.active.toLocaleString('en-US')}` : `-${newData.active.toLocaleString('en-US')}`;

    const changeStringPositive = newData.positive === 0 ? '' : newData.positive > 0 ? `+${newData.positive.toLocaleString('en-US')}` : `-${newData.positive.toLocaleString('en-US')}`;

    const changeStringDeath = newData.death === 0 ? '' : newData.death > 0 ? `+${newData.death.toLocaleString('en-US')}` : `-${newData.death.toLocaleString('en-US')}`;

    const changeStringCured = newData.cured === 0 ? '' : newData.cured > 0 ? `+${newData.cured.toLocaleString('en-US')}` : `-${newData.cured.toLocaleString('en-US')}`;


    return (
        <HoverWrapper>
            <HoverLabel> {data.stateName} </HoverLabel>
            <HoverDataSection>
                <HoverStatData>
                    <span> Active: {data.total.active.toLocaleString('en-US')} {changeStringActive}</span>
                    <span> Confirmed: {data.total.positive.toLocaleString('en-US')} {changeStringPositive}</span>
                    <span> Recovered: {data.total.cured.toLocaleString('en-US')} {changeStringCured}</span>
                    <span> Deaths: {data.total.death.toLocaleString('en-US')} {changeStringDeath}</span>
                </HoverStatData>
            </HoverDataSection>
        </HoverWrapper>
    );
};

export const Map = (props: MapProps) => {
    const { stateDataList } = props;

    const mapLayout: MapLayout = {
        borderColor: 'none',
        endColor: 'red',
        hoverTitle: 'Active',
        legendTitle: 'Active Covid Cases',
        noDataColor: 'green',
        startColor: 'yellow',
        title: '',
        hoverColor: 'lightyellow',
        hoverBorderColor: ''
    };

    const regionData: RegionData = getRegionalData(stateDataList);

    return (
        <MapContainer>
            <IndiaMap
                mapLayout={mapLayout}
                regionData={regionData}
                hoverComponent={(props: any) => {
                    const stateName: string = props.value.name;
                    if (regionData[stateName] && regionData[stateName].covidData)
                        return <HoverStateData data={regionData[stateName].covidData} />

                    return null
                }}
            />
        </MapContainer>
    );
};