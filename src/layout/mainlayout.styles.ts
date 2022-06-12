import st from 'styled-components';

export const MainLayoutContainer = st.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    padding: 0;
`;

export const Loader = st.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #bbffdd;

    font-size: 2rem;
    font-weight: 700;
    color: #226f4a;
`;

export const ErrorSection = st.div`
    position: absolute;
    width: 100%;
    height: calc(100vh - 14rem);
    display: flex;
    justify-content: center;
    background-color: #fafafa;
    padding: 5rem 0;

    div {
        border: solid 2px #ee5552;
        background-color: #ffe5e2;
        box-shadow: 0 0 6px 2px #aaa;
        padding: 1rem;
        width: 90%;
        height: 2.5rem;
    }

    font-size: 1.5rem;
    font-weight: 700;
    color: #ee5552;
    text-align: center;
`;

export const MainAppContainer = st.div`
    margin-top: 3rem;
    padding: 1rem 0;
    display: flex;
    flex-flow: wrap;
    background-color: #aaa;

    height: calc(100vh - 3rem);
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }

    @media only screen and (max-width: 599px) {
        margin-top: 2.5rem;
        padding: 0.5rem 0;
        display: block;
        width: 100%;
    }
`;

export const MainStatsContainer = st.div`
    width: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;

    @media only screen and (max-width: 599px) {
        width: 100%;
    }
`;

export const MapContentWrapper = st.div`
    width: calc(100% - 30rem);
    height: calc(100vh - 3rem);
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 599px) {
        display: none;
    }
`;