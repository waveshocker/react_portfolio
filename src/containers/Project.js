import React, { Component } from 'react';
import styled from 'styled-components';

import { CenteredHeader } from './App.js'

const ProjectThumbnail = styled.img`
  width: 70%;
  display: block;
  margin: 0 auto;
`;

const ProjectHeader = styled.h4`
  font-size: 1.25em;
  text-align: center;
`;

const ProjectBlurb = styled.div`
  padding: 4% 0;
  width: 75%;
  margin: auto;
`

const ProjectRow = styled.div`
  margin: 20px -15px;
`

class Project extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHeader>Here are some of the current projects I've worked on:</CenteredHeader>
        </div>
        {/*Row 1*/}
        <ProjectRow className="row">
          <div className="col-md-6 col-sm-12">
            <a href="https://lit-plains-40651.herokuapp.com/home/" target="_blank">
              <ProjectThumbnail src={require('../assets/bike_app.png')}/>
              <ProjectHeader>Bike App</ProjectHeader>
            </a>
            <ProjectBlurb>Here's an App utilizing Open Data Toronto to find where bike parkings are!</ProjectBlurb>
          </div>
          <div className="col-md-6 col-sm-12">
            <a href="https://gh0stl0nely.github.io/Budget-your-budget/" target="_blank">
              <ProjectThumbnail src={require('../assets/budget_project.png')}/>
              <ProjectHeader>Budget Project</ProjectHeader>
            </a>
            <ProjectBlurb>An app to help keep track of budget.</ProjectBlurb>
          </div>
        </ProjectRow>
        {/*Row 2*/}
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <a href="https://waveshocker.github.io/code_quiz/" target="_blank">
              <ProjectThumbnail src={require('../assets/code_quiz.jpg')}/>
              <ProjectHeader>Code Quiz</ProjectHeader>
            </a>
            <ProjectBlurb>Test your coding knowledge of JS</ProjectBlurb>
          </div>
          <div className="col-md-6 col-sm-12">
            <a href="https://waveshocker.github.io/pass_gen/" target="_blank">
              <ProjectThumbnail src={require('../assets/password_gen.jpg')}/>
              <ProjectHeader>Password Generator</ProjectHeader>
            </a>
            <ProjectBlurb>Generate new password!</ProjectBlurb>
          </div>
        </div>        
      </div>
    );
  }
}

export default Project;
