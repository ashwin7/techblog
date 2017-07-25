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
            {"name": "description", "content": "Ashwin Saxena's Blog - A blog about programming and life."},
            {"name": "keywords", "content": "Programming, blog, lifestyle design, React, Redux"},
          ]}
        />
        <Flex flexColumn align="center">
          <h1 className="fade-in" style={{fontSize: '3em'}}> Ashwin Saxena's Blog </h1>
          <p>
            Articles, screencasts, and tutorials to level up your Javascript, Python, and general programming skills.
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
