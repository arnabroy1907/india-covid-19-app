import { useEffect, useState } from 'react';
import { BackToTopProps } from '../../../types';
import { BackToTopContainer, BackToTopItem } from './backtotop.styles';

export const BackToTop = (props: BackToTopProps) => {
    const [opacity, setOpacity] = useState<number>(props.opacity);

    useEffect(() => {
        setOpacity(props.opacity)
    }, [props.opacity]);

    return (
        <BackToTopContainer>
            <BackToTopItem
                style={{ opacity: opacity }}
                onClick={() => props.onClick()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="5 0 50 80" >
                    <polyline fill="none" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" points="0.375, 35.375 28.375, 0.375 58.67, 35.375 " />
                </svg>
            </BackToTopItem>
        </BackToTopContainer>
    );
};