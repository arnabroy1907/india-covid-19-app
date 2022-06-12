import { FooterContainer } from './footer.styles';

const mohLink = 'https://www.mohfw.gov.in/';
const linkedIn = 'https://www.linkedin.com/in/arnab-roy-1907/';

export const Footer = () => {
    return (
        <FooterContainer>
            <span> Data acquired from <a href={mohLink} target='_blank'>MOH-India.</a></span>
            <span> Site owner - <a href={linkedIn} target='_blank'> Arnab Roy </a></span>
        </FooterContainer>
    );
};