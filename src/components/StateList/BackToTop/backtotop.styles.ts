import st from 'styled-components';

export const BackToTopContainer = st.div`
    position: absolute;
    right: 1rem;
    top: -4rem;
`;

export const BackToTopItem = st.div`
    width: 3rem;
    height: 3rem;
    background-color: #555;
    opacity: 0.5;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 2.5rem;
        height: 2.5rem;
        position: relative;
        top: 0.5rem;
    }

    &:hover {
        cursor: pointer;
        opacity: 1;
    }
`;