import st from 'styled-components';

export const MapContainer = st.div`
    width: 45rem;
    height: 45rem;
    padding: 1rem;

    svg {
        background-color: #bbddff;
        position: relative !important;
        width: 100%;
        height: 100%;

        .legend-title {
            font-weight: 700;
            fill: #000;
        }
    }

    @media only screen and (max-width: 599px) {
        width: 100%;
        height: 100%;
        padding: 0;
    }
`;

export const HoverWrapper = st.div`
    width: 12rem;
    padding: 1rem;
    background-color: gold;
    cursor: pointer;
`;

export const HoverLabel = st.div`
    font-size: 14px;
    font-weight: 700;
    color: #000;
    width: 100%;
    text-align: center;
`;

export const HoverDataSection = st.div``;

export const HoverStatData = st.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
        font-size: 12px;
        font-weight: 700;
        color: #444;
    }
`;