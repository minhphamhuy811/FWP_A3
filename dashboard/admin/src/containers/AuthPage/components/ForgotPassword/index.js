import React from 'react';
import { useIntl } from 'react-intl';
import { Padded } from '@buffetjs/core';
import PropTypes from 'prop-types';
import { BaselineAlignment } from 'strapi-helper-plugin';
import Button from '../../../../components/FullWidthButton';
import AuthLink from '../AuthLink';
import Input from '../Input';
import Section from '../Section';
import Box from '../Box';
import LogoTwo from '../LogoOne';
import LogoOne from '../LogoTwo';
import Background from '../Background';

const ForgotPassword = ({ formErrors, modifiedData, onChange, onSubmit }) => {
  const { formatMessage } = useIntl();

  return (
    <Background>
      <Section textAlign="center">
        <LogoTwo />
        <LogoOne />
        <h1>Hệ Thống Quản Lý Đơn Khai Báo Y Tế</h1>
      </Section>
      <Section withBackground>
        {/* FIXME IN BUFFET.JS */}
        <BaselineAlignment top size="20px">
          <h4 className="text-center">Khôi Phục Mật Khẩu</h4>
          <Padded top size="xs">
            <Box>
              <form onSubmit={onSubmit}>
                <Input
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
                <BaselineAlignment top size="3px" />
                <Padded top>
                  <Button type="submit" color="primary" textTransform="uppercase">
                    {formatMessage({ id: 'Auth.form.button.forgot-password' })}
                  </Button>
                </Padded>
              </form>
            </Box>
          </Padded>
        </BaselineAlignment>
        <AuthLink label="Auth.link.ready" to="/auth/login" />
      </Section>
    </Background>
  );
};

ForgotPassword.defaultProps = {
  onSubmit: e => e.preventDefault(),
};

ForgotPassword.propTypes = {
  formErrors: PropTypes.object.isRequired,
  modifiedData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
};

export default ForgotPassword;
