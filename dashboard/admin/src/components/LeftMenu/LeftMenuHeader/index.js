import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo_byt.svg';
import Wrapper from './Wrapper';

const LeftMenuHeader = () => (
  <Wrapper>
    <Link to="/" className="leftMenuHeaderLink">
        <div className="projectName">
          <img src={Logo} alt=""/>
          <div className="projectNameTitle">BỘ Y TẾ</div>
        </div>
    </Link>
  </Wrapper>
);

export default LeftMenuHeader;
