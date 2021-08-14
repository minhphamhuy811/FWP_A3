import styled from 'styled-components';
import { Button as Base } from '@buffetjs/core';

const Button = styled(Base)`
  width: 100%;
  text-transform: ${({textTransform}) => textTransform};
  background-color: #001c3d;
  border-color: #001c3d;
  border-radius: 5px;

  :hover {
    background-color: #000307;
    border-color: #000307;
  }
`;


Button.defaultProps = {
  color: 'primary',
  type: 'button',
  textTransform: 'none',
};

export default Button;
