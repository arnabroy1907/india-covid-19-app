import st from 'styled-components';
import { StatusColor } from '../../../types';

type StatsItemProps = {
    statusColor: StatusColor;
}

const getFontColor = (statusColor: StatusColor): string => {
    switch (statusColor) {
        case StatusColor.Red:
            return '#ff073a';
        case StatusColor.Green:
            return '#28a745';
        case StatusColor.Blue:
            return '#007bff';
        default:
            return '#222222';
    }
}

export const StatsCardContainer = st.div`
    width: 25rem;
    background-color: #fff;
    box-shadow: 0 0 4px 0 #bbb;
    border: solid 1px #eee;
    padding: 0;
    margin: 2rem;

    @media only screen and (max-width: 599px) {
        width: 18rem;
        margin: 1rem;
    }
`;

export const CardLabel = st.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: #fff;

    font-size: 1.25rem;
    font-weight: 700;

    @media only screen and (max-width: 599px) {
        font-size: 1rem;
        padding: 0.5rem;
    }
`;

export const CardStatsSection = st.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #f5f5f5;
`;

export const CardStatsSubSection = st.div`
    padding: 1rem 0.5rem;
    text-align: center;
    flex: 1;
    cursor: pointer;
    color: ${(props: StatsItemProps) => getFontColor(props.statusColor)};

    &:hover {
        background-color: ${(props: StatsItemProps) => {
        switch (props.statusColor) {
            case StatusColor.Red:
                return 'rgba(255,7,58,.125)';
            case StatusColor.Green:
                return 'rgba(40,167,69,.125);';
            case StatusColor.Blue:
                return 'rgba(0,123,255,.125);';
            default:
                return 'rgba(108,117,125,.125)';
        }
    }};
    }
`;

export const CardStatsHeading = st.div`
    font-size: 12px;
    font-weight: 700;
    margin: 0.25rem 0;

    @media only screen and (max-width: 599px) {
        font-size: 8px;
    }
`;

export const CardStatsData = st.div`
    font-size: 16px;
    font-weight: 700;
    @media only screen and (max-width: 599px) {
        font-size: 12px;
    }
`;

export const CardStatsChange = st.div`
    font-size: 14px;
    font-weight: 700;
    margin: 0.125rem 0;

    @media only screen and (max-width: 599px) {
        font-size: 10px;
    }
`;