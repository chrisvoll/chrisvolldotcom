import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import { fadeIn } from '../util/style';

const Fade = styled.div`
  transition-delay: ${props => props.delay}ms;
  ${fadeIn};
`;

export default function WithFadeTransition({ delay, children }) {
  return (
    <CSSTransitionGroup
      transitionName="post-transition"
      transitionAppear
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <Fade delay={delay}>
        {children}
      </Fade>
    </CSSTransitionGroup>
  );
}

WithFadeTransition.propTypes = {
  delay: PropTypes.number,
  children: PropTypes.node
};
