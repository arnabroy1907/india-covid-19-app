import st from 'styled-components';

type DropDownProps = {
    isActive: boolean;
}

export const StateListContainer = st.div``;

export const StateListHeadWrapper = st.div`
    margin: 1rem 0;
    margin-top: 2rem;
    width: 100%;
`;

export const StateListHeadLabel = st.div`
    width: 100%;
    font-size: 1.125rem;
    font-weight: 700;
    text-align: center;

    @media only screen and (max-width: 599px) {
        font-size: 1rem;
    }
`;

export const StateListSortArea = st.div`
    position: relative;
    width: calc(100% - 4rem);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0 2rem;
`;

export const StateListSortButton = st.button`
    font-size: 12px;
    font-weight: 600;
    width: 4.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #66ffaaa0;
    border: solid 1px #33dd88;
    box-shadow: 0 0 4px 0 #11aa55;
    border-radius: 0.75rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: ease-in-out 100ms;
    &:hover {
        background-color: #66ffaaff;
        font-size: 14px;
    }
`;

export const SortSubText = st.div`
    font-size: 12px;
    font-weight: 700;
    color: #226d4a;
    width: 100%;
    margin-top: 0.5rem;
    padding: 0;
    text-align: right;
`;

export const StateListSortDropDown = st.div`
    width: 10rem;
    position: absolute;
    top: 2rem;
    right: 2rem;
    z-index: 2;
    background-color: #fff;
    border: solid 1px #aaa;
    box-shadow: 0 0 6px 0 #999;
`;

export const DropDownOptions = st.div`
    font-size: 14px;
    font-weight: 700;
    padding: 0.5rem 0.75rem;
    cursor: pointer;
    
    color: ${(props: DropDownProps) => props.isActive ? '#000' : '#666'};
    background-color: ${(props: DropDownProps) => props.isActive ? '#66ffaa50' : '#fff'};

    &:hover {
        color: #000;
        background-color: #66ffaa50;
    }
`;

export const ListWrapper = st.div`
    height: 28rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    scroll-behavior: smooth;

    overflow-y: scroll;
    border-top: solid 1px #999;
    border-bottom: solid 1px #999;
    background-color: #f5f5f5;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const BackToTopWrapper = st.div`
    position: relative;
    width: 100%;
`;

export const MapSubContentWrapper = st.div`
    display: none;
    @media only screen and (max-width: 599px) {
        display: block;
        height: 100vw;
        margin: 1rem 0;
        padding: 1rem;
    }
`;

export const FooterWrapper = st.div``;