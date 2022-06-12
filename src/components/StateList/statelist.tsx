import { useState, useRef, useEffect } from 'react';
import { CovidData, StateListProps } from '../../types';
import { Footer } from '../Footer/footer';
import { BackToTopWrapper, DropDownOptions, FooterWrapper, ListWrapper, MapSubContentWrapper, SortSubText, StateListContainer, StateListHeadLabel, StateListHeadWrapper, StateListSortArea, StateListSortButton, StateListSortDropDown } from './statelist.styles';
import { StatsCard } from './StatsCard/statscard';
import { Map } from '../Map/map';
import { BackToTop } from './BackToTop/backtotop';

enum SortOptions {
    NewActive, Active, Deaths, Recovered, A2Z, Z2A
}

const getSortedText = (sortOption: SortOptions): string => {
    switch (sortOption) {
        case SortOptions.NewActive:
            return 'new active count';

        case SortOptions.Active:
            return 'active count';

        case SortOptions.Deaths:
            return 'death count';

        case SortOptions.Recovered:
            return 'recovered count';

        case SortOptions.A2Z:
            return 'letters (a-z)';

        default:
            return 'letters (z-a)';
    }
}

export const StateList = (props: StateListProps) => {
    const [stateList, setStateList] = useState<CovidData[]>(props.stateDataList);
    const [activeSorting, setActiveSorting] = useState<SortOptions>(SortOptions.A2Z);
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [opacity, setOpacity] = useState<number>(0.5);

    const buttonRef = useRef(null);
    const listAreaRef = useRef<HTMLDivElement>(null);

    const doScrollTop = () => {
        if (listAreaRef.current) {
            const listEl = listAreaRef.current;
            listEl.scrollTo(0, 0);
        }
    };

    useEffect(() => {
        const buttonClickListener = (e: any) => {
            if (e.target !== buttonRef.current) {
                setShowDropDown(false);
            }
        }

        window.addEventListener('click', buttonClickListener);

        return () => {
            window.removeEventListener('click', buttonClickListener);
        }
    }, [buttonRef]);

    useEffect(() => {
        if (listAreaRef.current) {
            const listEl = listAreaRef.current;
            const scrollHandler = () => {
                const currScroll = listEl.scrollTop;
                const totalHeight = listEl.scrollHeight - 300;
                const opacityVal = 0.5 + (currScroll / totalHeight);
                setOpacity(opacityVal);
            };
            listEl.addEventListener('scroll', scrollHandler);
            return () => {
                listEl.removeEventListener('scroll', scrollHandler);
            }
        }
    }, [listAreaRef]);

    useEffect(() => {
        doScrollTop();
    }, [activeSorting]);

    let sortedText = getSortedText(activeSorting);

    const dropDownClickhandler = (sortOption: SortOptions) => {
        setActiveSorting(sortOption);
        setShowDropDown(false);

        let newStateList = [...stateList];

        switch (sortOption) {
            case SortOptions.NewActive:
                newStateList = stateList.sort((a, b) => b.new.active - a.new.active);
                break;

            case SortOptions.Active:
                newStateList = stateList.sort((a, b) => b.total.active - a.total.active);
                break;

            case SortOptions.Deaths:
                newStateList = stateList.sort((a, b) => b.total.death - a.total.death);
                break;

            case SortOptions.Recovered:
                newStateList = stateList.sort((a, b) => b.total.cured - a.total.cured);
                break;

            case SortOptions.A2Z:
                newStateList = stateList.sort((a, b) => a.stateName.localeCompare(b.stateName));
                break;

            default:
                newStateList = stateList.sort((a, b) => b.stateName.localeCompare(a.stateName));
                break;
        }

        setStateList([...newStateList]);
    };

    return (
        <StateListContainer>
            <StateListHeadWrapper>
                <StateListHeadLabel>STATES &amp; UTs</StateListHeadLabel>
                <StateListSortArea>
                    <StateListSortButton
                        ref={buttonRef}
                        onClick={() => setShowDropDown(!showDropDown)}
                    >sort</StateListSortButton>
                    <SortSubText>sorted by {sortedText}.</SortSubText>
                    {showDropDown &&
                        <StateListSortDropDown>
                            <DropDownOptions
                                isActive={activeSorting === SortOptions.NewActive}
                                onClick={() => dropDownClickhandler(SortOptions.NewActive)}
                            >new active</DropDownOptions>
                            <DropDownOptions
                                isActive={activeSorting === SortOptions.Active}
                                onClick={() => dropDownClickhandler(SortOptions.Active)}
                            >active</DropDownOptions>
                            <DropDownOptions
                                isActive={activeSorting === SortOptions.Deaths}
                                onClick={() => dropDownClickhandler(SortOptions.Deaths)}
                            >deaths</DropDownOptions>
                            <DropDownOptions
                                isActive={activeSorting === SortOptions.Recovered}
                                onClick={() => dropDownClickhandler(SortOptions.Recovered)}
                            >recovered</DropDownOptions>
                            <DropDownOptions
                                isActive={activeSorting === SortOptions.A2Z}
                                onClick={() => dropDownClickhandler(SortOptions.A2Z)}
                            >alphabetical (a-z)</DropDownOptions>
                            <DropDownOptions
                                isActive={activeSorting === SortOptions.Z2A}
                                onClick={() => dropDownClickhandler(SortOptions.Z2A)}
                            >alphabetical (z-a)</DropDownOptions>
                        </StateListSortDropDown>
                    }
                </StateListSortArea>
            </StateListHeadWrapper>
            <ListWrapper ref={listAreaRef}>
                {stateList.map((stateData) => <StatsCard key={stateData.stateCode} statsData={stateData} />)}
            </ListWrapper>
            <BackToTopWrapper>
                <BackToTop opacity={opacity} onClick={() => { doScrollTop(); }} />
            </BackToTopWrapper>
            <MapSubContentWrapper>
                <Map stateDataList={stateList} />
            </MapSubContentWrapper>
            <FooterWrapper>
                <Footer />
            </FooterWrapper>
        </StateListContainer>
    );
};