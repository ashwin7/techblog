import React from 'react'
import Avatar from 'components/Avatar';
import Ashwin from './about/nerd-ashwin-min.jpg';
import MailchimpForm from 'components/MailchimpForm';
import HeaderLink from 'components/HeaderLink';
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import { Flex, Box } from 'reflexbox';
import { fonts } from 'css';

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Ashwin's Tech Blog - My adventures in JavaScript and Python."},
            {"name": "keywords", "content": "Programming, blog, , React, AngularJS, Python, Node, Javascript, ES6"},
          ]}
        />
        <Flex flexColumn align="center">
          <h1 className="fade-in" style={{fontSize: '2.2em',marginBottom:'0.9rem'}}> Tech Blah Blah... </h1>
          <p>
            Javascript, Python and general coding thingies.
          </p>

          <Box mt={3}>
            <Avatar 
              src={Ashwin} 
              alt="Ashwin Saxena" 
            />
          </Box>
          {/*
          <Box my={2} flex flexColumn align="center">
            <p>Join the monthly newsletter and never miss a post.</p>
             <MailchimpForm inline /> 
          </Box> */}
        </Flex>

        <Flex mt={2} flexColumn>
          <h2 style={{
            fontFamily: fonts.primary,
            fontWeight: fonts.bold,
          }}>Latest Entries...</h2>

          <HeaderLink to="/blog/hackerearth-problem-solving-with-node-windows/">
            Solving hackerearth problems with Javascript on Windows
          </HeaderLink>
          <HeaderLink to="blog/about-this-blog/">
            Learn more about this blog
          </HeaderLink>

        </Flex>

        <Flex mt={2} flexColumn>
          <h2 style={{
            fontFamily: fonts.primary,
            fontWeight: fonts.bold,
          }}>New? Start Here</h2>

          <HeaderLink to="blog/about-this-blog/">
            Learn more about this blog
          </HeaderLink>

          <HeaderLink to="now/">
            See what I'm up to Now.
          </HeaderLink>
        </Flex>
      </div>
    )
  }
}
