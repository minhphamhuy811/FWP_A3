import React from 'react';
import { Checkbox } from '@buffetjs/core';
import { useIntl } from 'react-intl';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { BaselineAlignment } from 'strapi-helper-plugin';

import Button from '../../../../components/FullWidthButton';
import AuthLink from '../AuthLink';
import Box from '../Box';
import Input from '../Input';
import LogoOne from '../LogoTwo';
import LogoTwo from '../LogoOne';
import Section from '../Section';
// import Background from './Background';

const Login = ({ children, formErrors, modifiedData, onChange, onSubmit, requestError }) => {
  const {formatMessage} = useIntl();

  return (
    <div style={{backgroundImage: 'url("../../../../assets/images/bglogin.jpeg")'}}>
      <Section textAlign="center">
        <LogoTwo />
        <LogoOne />
        <h1>Hệ Thống Quản Lý Đơn Khai Báo Y Tế</h1>
      </Section>
      <Section>
        <BaselineAlignment top size="25px">
          <h4 className="text-center">Login Portal</h4>
          <Box errorMessage={get(requestError, 'errorMessage', null)}>
            <form onSubmit={onSubmit}>
              <Input
                style={{borderColor:'gray'}}
                autoFocus
                error={formErrors.email}
                label="Auth.form.email.label"
                name="email"
                onChange={onChange}
                placeholder="nguyenvana@boyte.gov.vn"
                type="email"
                validations={{ required: true }}
                value={modifiedData.email}
              />
              <Input
                style={{borderColor:'gray'}}
                error={formErrors.password}
                label="Auth.form.password.label"
                name="password"
                onChange={onChange}
                type="password"
                validations={{ required: true }}
                value={modifiedData.password}
              />
              <Checkbox
                type="checkbox"
                style={{color: '#001c3d'}}
                message={formatMessage({ id: 'Auth.form.rememberMe.label' })}
                name="rememberMe"
                onChange={onChange}
                value={modifiedData.rememberMe}
              />
              <BaselineAlignment top size="27px">
                <Button type="submit" textTransform="uppercase">
                  {formatMessage({ id: 'Auth.form.button.login' })}
                </Button>
              </BaselineAlignment>
            </form>
            {children}
          </Box>
        </BaselineAlignment>
      </Section>
      <AuthLink label="Auth.link.forgot-password" to="/auth/forgot-password" />
    </div>
  );
};

Login.defaultProps = {
  children: null,
  onSubmit: e => e.preventDefault(),
  requestError: null,
};

Login.propTypes = {
  children: PropTypes.node,
  formErrors: PropTypes.object.isRequired,
  modifiedData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  requestError: PropTypes.object,
};

export default Login;
