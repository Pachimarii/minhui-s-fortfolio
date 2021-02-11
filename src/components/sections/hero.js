import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 500px;
  }

  .hero-btn {
    ${({ theme }) => theme.mixins.bigButton};
    margin: 40px 15px 0 0;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Minhui Xie.</h2>;
  const three = <h3 className="medium-heading">I enjoy building cool websites.</h3>;
  const four = (
    <p>
      I'm a web developer graduated from University of Maryland in Dec, 2020; who is always keeping the good coding habits and currently specializing in front end development. 
      <br/>
      <br/>
      I am always excited about learning and exploring new technologies, therefore I would be more than happy to adapt to any tools that are required! :D
    </p>
  );
  const five = (
    <div>
      <a className="hero-btn resume-link" target="_blank" href="/resume.pdf" rel="noopener noreferrer"> Checkout My Resume</a>
      <a href={`mailto:${email}`} className="hero-btn email-link">
        Get In Touch
      </a>
    </div>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledHeroSection>
  );
};

export default Hero;
