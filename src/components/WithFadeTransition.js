import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TransitionGroup } from 'react-transition-group';
import { fadeIn } from '../util/style';

const Fade = styled.div`
  transition-delay: ${props => props.delay}ms;
  ${fadeIn};

  @media (prefers-reduced-motion) {
    transition: 0ms !important;
  }
`;

export default function WithFadeTransition({ delay, children }) {
  return (
    <TransitionGroup
      transitionName="post-transition"
      transitionAppear
      timeout={{ appear: 500 + (delay || 0) }}
      enter={false}
      exit={false}
    >
      <Fade delay={delay} className="post-transition-appear">
        {children}
      </Fade>
    </TransitionGroup>
  );
}

WithFadeTransition.propTypes = {
  delay: PropTypes.number,
  children: PropTypes.node
};
