import st from 'styled-components';

export const FooterContainer = st.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;

    span {
        padding: 0.25rem 1rem;
        font-size: 14px;
        font-weight: 700;
        color: #222;
        text-align: center;
    }

    a {
        cursor: pointer;
        color: teal;
        text-decoration: none !important;
    }
`;