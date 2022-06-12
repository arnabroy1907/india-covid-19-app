import { MainCardProps } from '../../types';
import { StatsCard } from '../StateList/StatsCard/statscard';
import { CardSubText, MainCardWrapper } from './maincard.styles';

export const MainCard = (props: MainCardProps) => {
    const { timeOfData, countryData } = props;

    let newTime = timeOfData - (timeOfData % (60 * 60 * 1000));

    return (
        <MainCardWrapper>
            <StatsCard
                statsData={{
                    stateCode: countryData.stateCode,
                    stateName: 'India',
                    total: { ...countryData.total },
                    new: { ...countryData.new }
                }}
            />
            <CardSubText>Data as on: {new Date(newTime).toString()}</CardSubText>
        </MainCardWrapper>
    );
};