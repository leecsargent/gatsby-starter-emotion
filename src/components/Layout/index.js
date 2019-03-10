import React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';

import globalStyles from './global';
import Header from './header';
import MainNav from './mainNav';
import config from '../../utils/config';

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: ${config.maxWidth}px;
  padding: 0 1.0875rem 2rem;
`;

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  componentDidUpdate(prevProps) {
    const { location: currentLocation } = this.props;
    if (prevProps.location !== currentLocation) {
      this.setState({ isOpen: false });
    }
  }

  handleToggle = () => {
    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  };

  render() {
    const { location, children } = this.props;
    const { isOpen } = this.state;
    return (
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
            <Global styles={globalStyles} />
            <MainNav
              isOpen={isOpen}
              onToggle={this.handleToggle}
              location={location}
            />
            <Header siteTitle={data.site.siteMetadata.title} />
            <ContentContainer>
              <main>{children}</main>
              <footer>
                Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer>
            </ContentContainer>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

Layout.defaultProps = {
  location: {
    pathname: '',
  },
};

export default Layout;
