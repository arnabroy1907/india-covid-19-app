import { LogoContainer, LogoImageSection, LogoMainText, LogoSloganText, LogoTextsection } from './navbar.styles';
// @ts-ignore
import CovidLogo from '../../static/media/covidlogo.png';

export const Logo = () => {
    return (
        <LogoContainer>
            <LogoImageSection>
                <img src={CovidLogo} alt='covidlogo.png' />
            </LogoImageSection>
            <LogoTextsection>
                <LogoMainText>INDIA COVID-19</LogoMainText>
                <LogoSloganText>INDIA FIGHTS COVID</LogoSloganText>
            </LogoTextsection>
        </LogoContainer>
    );
};