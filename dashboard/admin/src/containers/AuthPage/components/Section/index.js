import styled from 'styled-components';


/* eslint-disable indent */

const Section = styled.section`
  text-align: ${({ textAlign }) => textAlign};
  ${({ withBackground }) =>
    withBackground &&
    `
    background-color: transparent;
    `}
`;

Section.defaultProps = {
  withBackground: true,
  textAlign: 'initial',
};

export default Section;
