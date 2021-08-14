import styled from 'styled-components';
/* eslint-disable indent */

const Section = styled.section`
  text-align: ${({ textAlign }) => textAlign};
  ${({ withBackground }) =>
  withBackground &&
  `
    background-color: transparent;
    background-position-x: center;
    background-position-Y: center;
    `}
`;

Section.defaultProps = {
  withBackground: false,
  textAlign: 'initial',
};

export default Section;
