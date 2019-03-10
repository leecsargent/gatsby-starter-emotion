import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import config from '../../utils/config';

const TitleHeader = styled.h1`
  font-size: 1rem;
  margin: 0;
  text-align: right;
`;

const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const HeaderInner = styled.div`
  margin: 0 auto;
  padding: 1.45rem 2rem;
`;

const TitleLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderInner>
      <TitleHeader>
        <TitleLink to="/">{siteTitle}</TitleLink>
      </TitleHeader>
    </HeaderInner>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
