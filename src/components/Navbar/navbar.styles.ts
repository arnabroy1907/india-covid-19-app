import st from 'styled-components';

export const NavbarContainer = st.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    padding: 0 1rem;
    border-bottom: solid 1px #eee;
    box-shadow: 0 0 5px 0 #222;
    display: flex;
    align-items: center;
    background-color: #fff;
    z-index: 50;

    @media only screen and (max-width: 599px) {
        height: 3rem;
    }
`;

export const LogoContainer = st.div`
    width: 15rem;
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: space-around;

    cursor: pointer;

    @media only screen and (max-width: 599px) {
        height: 2rem;
        width: 10rem;
    }
`;

export const LogoImageSection = st.div`
    width: 3rem;
    height: 3rem;

    @media only screen and (max-width: 599px) {
        height: 2rem;
        width: 2rem;
    }

    img {
        width: 100%;
    }
`;

export const LogoTextsection = st.div``;

export const LogoMainText = st.div`
    font-size: 24px;
    font-weight: 700;
    color: #2c6;

    @media only screen and (max-width: 599px) {
        font-size: 16px;
    }
`;

export const LogoSloganText = st.div`
    font-size: 12px;
    font-weight: 700;
    color: #222;

    @media only screen and (max-width: 599px) {
        font-size: 10px;
    }
`;