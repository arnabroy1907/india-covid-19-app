import { StatsCardProps, StatsSubSectionProps, StatusColor } from '../../../types';
import { CardLabel, CardStatsChange, CardStatsData, CardStatsHeading, CardStatsSection, CardStatsSubSection, StatsCardContainer } from './statscard.styles';

const StatsSubSection = (props: StatsSubSectionProps) => {
    const { baseNumber, changeNumber, label, statusColor } = props;
    const changeString = changeNumber === 0 ? '-' : changeNumber > 0 ? `+${changeNumber.toLocaleString('en-US')}` : `-${changeNumber.toLocaleString('en-US')}`;

    return (
        <CardStatsSubSection statusColor={statusColor}>
            <CardStatsHeading> {label} </CardStatsHeading>
            <CardStatsData> {baseNumber.toLocaleString('en-US')} </CardStatsData>
            <CardStatsChange> {changeString} </CardStatsChange>
        </CardStatsSubSection>
    );
};

export const StatsCard = (props: StatsCardProps) => {
    const { statsData } = props;

    const totalData = statsData.total;
    const newData = statsData.new;
    const statLabelName = statsData.stateName.replaceAll('*', '');

    return (
        <StatsCardContainer>
            <CardLabel>{statLabelName}</CardLabel>
            <CardStatsSection>
                <StatsSubSection
                    label='Confirmed'
                    baseNumber={totalData.positive}
                    changeNumber={newData.positive}
                    statusColor={StatusColor.Blue}
                />
                <StatsSubSection
                    label='Active'
                    baseNumber={totalData.active}
                    changeNumber={newData.active}
                    statusColor={StatusColor.Red}
                />
                <StatsSubSection
                    label='Recovered'
                    baseNumber={totalData.cured}
                    changeNumber={newData.cured}
                    statusColor={StatusColor.Green}
                />
                <StatsSubSection
                    label='Deaths'
                    baseNumber={totalData.death}
                    changeNumber={newData.death}
                    statusColor={StatusColor.Black}
                />
            </CardStatsSection>
        </StatsCardContainer>
    );
};