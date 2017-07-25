import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { Link } from 'react-router';
import { Flex, Box } from 'reflexbox';

class NowIndex extends Component {
  render() {
    return (
      <Flex flexColumn align="center" justify="center" style={{height: '100%'}}>
        <Helmet title="Ashwin Saxena | Now" />
        <h1 className="fade-in">Now.</h1>

        <Flex style={{maxWidth: 650}} flexColumn>
          <p><em><small>Last updated 7/3/2017</small></em></p>

          <p>
            I am Ashwin Saxena. Just Starting This Blog.  
          </p>

          
        </Flex>
      </Flex>
    );
  }
}

export default NowIndex;
