import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

const FadeStyles = styled.div`
  .post-transition {
    transition-delay: ${props => props.delay}ms;

    @media (prefers-reduced-motion) {
      transition: 0ms !important;
    }
  }

  .post-transition-appear {
    opacity: 0.01;
    transform: translate3d(0, 20px, 0);
  }

  .post-transition-appear.post-transition-appear-active {
    opacity: 1;
    transition-duration: 0.5s;
    transition-easing-function: ease-out;
    transform: translate3d(0, 0, 0);
  }
`;

export default function WithFadeTransition({ delay, children }) {
  return (
    <FadeStyles>
      <TransitionGroup>
        <CSSTransition
          appear={true}
          classNames="post-transition"
          timeout={{ appear: 500 + (delay || 0) }}
        >
          <div>{children}</div>
        </CSSTransition>
      </TransitionGroup>
    </FadeStyles>
  );
}
