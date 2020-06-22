import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';

const ProfileImage = styled.img`
  width: 12em;
  height: 12em;
  border-radius: 50%;
`;

const ProfileTitle = styled.h1`
  color: Blue;
`

const HeaderDiv = styled.div`
  padding-top: 5vh;
  text-align: center;
  font-family: 'Zilla Slab Highlight', sans-serif;
  color: black;
`;

const NavLink = styled(Link)`
  display: inline-flex;
  margin: 0 5px;
  color: blue;
  font-size: 16px;
`


class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <Link to="/">
          <ProfileImage src={require('../assets/binhu_headshot.png')} alt='Bin Hu'/>
          <ProfileTitle>Bin Hu</ProfileTitle>
        </Link>
        <div>
          <NavLink to='/'>ABOUT</NavLink>
          <NavLink to='/code'>CODE</NavLink>          
          <NavLink to='/project'>Project</NavLink>
        </div>
        <hr/>
      </HeaderDiv>
    );
  }
}

export default Header;