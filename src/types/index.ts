export type CovidNumberStat = {
    active: number;
    positive: number;
    cured: number;
    death: number;
}

export type CovidData = {
    stateCode: string;
    stateName: string;
    total: CovidNumberStat;
    new: CovidNumberStat;
}

export type CountryCovidData = {
    stateWideData: CovidData[];
    countryData: CovidData;
    timeOfData: number;
}

export type MainCardProps = {
    countryData: CovidData;
    timeOfData: number;
}

export type StateListProps = {
    stateDataList: CovidData[];
}

export type MapProps = {
    stateDataList: CovidData[];
}

export type StatsCardProps = {
    statsData: CovidData;
}

export type StatsSubSectionProps = {
    label: string;
    baseNumber: number;
    changeNumber: number;
    statusColor: StatusColor;
}

export enum StatusColor {
    Red, Green, Black, Blue
}

export type BackToTopProps = {
    onClick: Function;
    opacity: number;
}