import { Button, Input, InputType, MessageStrip, MessageStripType, Title, TitleLevel } from '@ui5/webcomponents-react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './LoginPage.module.css';
import { useTranslation } from 'react-i18next';
import CenteredContent from '../Layout/CenteredContent';
import '@ui5/webcomponents-icons/dist/accept';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../routes/Routes';
import { getDataThunk } from '../../store/middleware/loginSlice';

const LoginPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const verified = useSelector((state) => state.loginService.responses.verified);
  const role = useSelector((state) => state.loginService.responses.role);
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onLoginSubmit = (e) => {
    dispatch(getDataThunk({ username, password }));
  };

  useEffect(() => {
    if (verified === 'yes') {
      history.push(ROUTES.HOME_PAGE);
    }
  }, [verified, role, history]);

  return (
    <CenteredContent>
      <Title className={styles.signInHeader} level={TitleLevel.H1}>
        {t('app.login.signInHeader')}
      </Title>
      {verified === 'no' && (
        <div className={styles.signInFieldsContainer}>
          <MessageStrip className={styles.signInField} type={MessageStripType.Negative} noCloseButton>
            {t('app.login.invalidUser')}
          </MessageStrip>
        </div>
      )}
      <div className={styles.signInFieldsContainer}>
        <Input
          onInput={(e) => {
            onUsernameChange(e);
          }}
          className={styles.signInField}
          type={InputType.Text}
          placeholder={t('app.login.username')}
        />
      </div>
      <div className={styles.signInFieldsContainer}>
        <Input
          onInput={(e) => {
            onPasswordChange(e);
          }}
          className={styles.signInField}
          type={InputType.Password}
          placeholder={t('app.login.password')}
        />
      </div>
      <div className={styles.signInFieldsContainer}>
        <Button
          icon="accept"
          onClick={(e) => {
            onLoginSubmit(e);
          }}
          className={styles.loginButton}
          disabled={!username || !password}
        >
          {t('app.login.signInButton')}
        </Button>
      </div>
    </CenteredContent>
  );
};

export default LoginPage;
