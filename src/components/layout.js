/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import theme from '../styles/theme';
import StyledGlobal from '../styles/StyledGlobal';

import NewsTicker from './NewsTicker';
import UserMenu from './UserMenu';

import './layout.css';

const StyledLayout = styled.div`
  height: 100vh;
  width: 100vw;
  font-family: roboto, "Noto Sans Myanmar UI", arial, sans-serif;

  main {
    height: 100%;
  }

  footer {
    position: absolute;
    bottom: 0;
  }
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledGlobal>
      <StyledLayout>
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={data => (
            <>
              <NewsTicker />
              <UserMenu />
              <main>{children}</main>
              <footer>
                ©
                {' '}
                {new Date().getFullYear()}
, Built with
                {' '}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer>
            </>
          )}
        />
      </StyledLayout>
    </StyledGlobal>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
