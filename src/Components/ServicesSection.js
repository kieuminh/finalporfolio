import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import react from '../img/React-icon.svg';
import database from '../img/amazon-database.svg';
import figma from '../img/Figma-logo.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Technologies'} span={'technologies'} />
                <div className="services">
                    <ServiceCard                         
                        image={react} 
                        title={'Front-End'} 
                        paragraph={'Experience with HTML, CSS, SASS, Reactjs...'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={database} 
                            title={'Back-End'} 
                            paragraph={'Experience with Nodejs, MongoDB...'}
                        />
                    </div>
                    <ServiceCard 
                        image={figma} 
                        title={'UI/UX - CGI'} 
                        paragraph={'Experience with Figma, Photoshop, Nuke, Maya.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
