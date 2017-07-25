import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Avatar from 'components/Avatar';
import { Link } from 'react-router';
import { Flex, Box } from 'reflexbox';
import NerdAshwin from './nerd-ashwin-min.jpg';
import CoolAshwin from './cool-ashwin-min.jpg';


class AboutIndex extends Component {
  render() {
    return (
      <Flex flexColumn align="center">
        <Helmet title="Ashwin Saxena | About" />

        <h1 className="fade-in">Hi, I'm Ashwin.</h1>
        <p>And you don't know me... yet.</p>
        <Flex wrap justify="center" mb={2}>
          <Box mx={2}>
            <Avatar 
              src={NerdAshwin} 
              alt="Nerd Ashwin Saxena" 
              subtitle="Nerd Ashwin"
            />
          </Box>
          <Box mx={2}>
            <Avatar 
              src={CoolAshwin} 
              alt="Cool Ashwin Saxena" 
              subtitle="Cool Ashwin"
            />
          </Box>
        </Flex>
        <Flex style={{maxWidth: 650}} flexColumn>
          <p> 
            My name is Ashwin (<a href="https://twitter.com/Quiz_Master" target="_blank">@Quiz_Master</a>).
            
          </p>

          <p>
            Find out what I'm up to <Link to="/now/">now</Link>, connect with me <a href="/">on LinkedIn</a>, and check out some of my <a href="https://github.com/ashwin7">open source projects.</a>
          </p>

          
        </Flex>
      </Flex>
    );
  }
}

export default AboutIndex;
