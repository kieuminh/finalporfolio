import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'10/2021 - Present'} 
                        title={'Work as freelancer'}
                        subTitle={'Freelancer'}
                        text={'Working with freelancer team, learn new technical'} 
                    />
                    <ResumeItem 
                        year={'07/2020 - 09/2021'} 
                        title={'Front End Developer'}
                        subTitle={'LOTTE DATA COMMUNITY'}
                        text={'Building stable and maintainable codebase using React. Creating modular responsive template using modern CSS techniques and JavaScript libraries. Conducting testing to identify bugs and UI improvements. Convert functionality from old version IE to chrome, firefox.'} 
                        
                    />
                    <ResumeItem 
                        year={'01/2017 - 07/2020'} 
                        title={'CGI and Front End Developer'}
                        subTitle={'UbuntuStudio'}
                        text={'Performing bug fixes and code reviews. Designing and implementing HTML email templates and new sletters for company. Produced stunning visual elements of web applications by translating UI/UX design wireframes into code while producing high quality, reusable markup using HTML5 and CSS3'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2009 - 2013'} 
                        title={'Computer Science'}
                        subTitle={'University Of Science'}
                        text={'Computer science overview'} 
                    />
                    <ResumeItem 
                        year={'2018 - 2019'} 
                        title={'Front End - Dev'}
                        subTitle={'Korea IT School'}
                        text={'Learn and working on real project'} 
                    />                    
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .left-content{
        width: 20%;
    }

    .right-content{
        width: 80%;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
