import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Button from '../Button';

const InnerTranstion = styled.span`
  position: absolute;
  transition: 0.6s;
  &.button-transition-exit-active {
    opacity: 0;
  }
  &.button-transition-enter-done {
    opacity: 1;
  }
`;

const ToggleButton = ({ onClick, isOpen }) => (
  <Button
    aria-label="Menu Toggle"
    onClick={onClick}
    className={isOpen ? 'menu-toggle is-open' : 'menu-toggle'}
  >
    <TransitionGroup>
      <CSSTransition
        classNames="button-transition"
        key={isOpen}
        timeout={{
          enter: 600,
          exit: 600,
        }}
      >
        {() => {
          return (
            <InnerTranstion>
              {isOpen ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </InnerTranstion>
          );
        }}
      </CSSTransition>
    </TransitionGroup>
  </Button>
);

ToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default ToggleButton;
