import React, { useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { Avatar, AvatarShape, Button, ShellBar, StandardListItem } from '@ui5/webcomponents-react';
import '@ui5/webcomponents-icons/dist/customer';
import PopoverListItems from '../Popover/List/PopoverListItems';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import { ROUTES } from '../../routes/Routes';
import { useDispatch, useSelector } from 'react-redux';
import { Roles } from '../Constants/Roles';
import { invalidateSession } from '../../store/middleware/loginSlice';
import { credentialGetDataThunk } from '../../store/middleware/credentialHelperSlice';
import { usersGetDataThunk } from '../../store/middleware/usersHelperSlice';

const style = {
  shell: {
    position: 'fixed',
    width: '100%',
    zIndex: 100,
  },
  emptySpace: {
    paddingTop: '44px',
  },
};

const Shell = ({ title, ...props }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const verified = useSelector((state) => state.loginService.responses.verified);
  const role = useSelector((state) => state.loginService.responses.role);
  const userName = useSelector((state) => state.loginService.responses.userName);
  const popoverConfigItemsRef = useRef(null);
  const popoverItems = useMemo(
    () => [
      {
        description: t('shell.button.user.settings.item.themeSwitch'),
        icon: 'customize',
        children: <ThemeSwitch />,
      },
      {
        description: t('shell.button.user.settings.item.leavingSoon'),
        icon: 'question-mark',
        children: (
          <Button
            style={{ width: '10rem' }}
            icon="log"
            onClick={() => {
              document.getElementById('cai-webclient-main') && document.getElementById('cai-webclient-main').remove();
              document.getElementById('cai-webclient-builtin-button') && document.getElementById('cai-webclient-builtin-button').remove();
              window.location.href = ROUTES.LOGIN;
              dispatch(invalidateSession());
            }}
          >
            {t('shell.button.user.settings.item.logOut')}
          </Button>
        ),
      },
    ],
    [dispatch, t],
  );

  const menuItems = [
    { id: ROUTES.HOME_PAGE, name: t('shell.menuitem.home'), icon: 'home' },
    { id: ROUTES.TEAMS, name: t('shell.menuitem.teams'), icon: 'group' },
    { id: ROUTES.REACT_FLOW, name: t('shell.menuitem.pipelines'), icon: 'pipeline-analysis' },
    { id: ROUTES.TOOLS, name: t('shell.menuitem.tools'), icon: 'inventory' },
    { id: ROUTES.PLUGINS, name: t('shell.menuitem.plugins'), icon: 'connected' },
  ];

  if (role === Roles.ADMIN) {
    menuItems.push({ id: ROUTES.CREDENTIAL_MANAGEMENT, name: t('shell.menuitem.credentialManage'), icon: 'crm-service-manager' });
    menuItems.push({ id: ROUTES.USER_MANAGEMENT, name: t('shell.menuitem.userManage'), icon: 'manager' });
  }
  if (verified === 'yes' && document.body) {
    var chatMe = document.createElement('script');
    chatMe.src = 'https://cdn.cai.tools.sap/webclient/bootstrap.js';
    chatMe.id = 'cai-webclient-custom';
    chatMe.setAttribute('data-channel-id', '7a4e0f30-a985-412e-9349-d7bbf492055b');
    chatMe.setAttribute('data-token', 'bc72ef524dda834e4717ad45088820c5');
    chatMe.setAttribute('data-expander-type', 'CAI');
    chatMe.setAttribute(
      'data-expander-preferences',
      'JTdCJTIyZXhwYW5kZXJMb2dvJTIyJTNBJTIyaHR0cHMlM0ElMkYlMkZjZG4uY2FpLnRvb2xzLnNhcCUyRndlYmNoYXQlMkZ3ZWJjaGF0LWxvZ28uc3ZnJTIyJTJDJTIyZXhwYW5kZXJUaXRsZSUyMiUzQSUyMkNsaWNrJTIwb24lMjBtZSElMjIlMkMlMjJvbmJvYXJkaW5nTWVzc2FnZSUyMiUzQSUyMkNoYXQlMjB3aXRoJTIwbWUhJTIyJTJDJTIydGhlbWUlMjIlM0ElMjJERUZBVUxUJTIyJTdE',
    );
    document.body.appendChild(chatMe);
  }
  menuItems.push({ id: ROUTES.PRICING, name: t('shell.menuitem.cost'), icon: 'lead' });
  menuItems.push({ id: ROUTES.SUPPORT, name: t('shell.menuitem.support'), icon: 'headset' });

  const onMenuItemClick = ({ detail }) => {
    const id = detail.item.id;
    switch (id) {
      case ROUTES.CREDENTIAL_MANAGEMENT:
        dispatch(credentialGetDataThunk({}));
        break;
      case ROUTES.USER_MANAGEMENT:
        dispatch(usersGetDataThunk({}));
        break;
      default:
        break;
    }
    detail && detail.item && detail.item.id && history.push(id);
  };

  const onLogoClickAction = (e) => {
    if (verified === 'yes') {
      history.push(ROUTES.HOME_PAGE);
    } else {
      history.push(ROUTES.LOGIN);
    }
  };

  return (
    <>
      {verified === 'yes' ? (
        <>
          <ShellBar
            data-testid="shell-wrapper"
            menuItems={
              <>
                {menuItems.map((menuItem, index) => {
                  return (
                    <StandardListItem id={menuItem.id} icon={menuItem.icon} data-key={index}>
                      {menuItem.name}
                    </StandardListItem>
                  );
                })}
              </>
            }
            primaryTitle={title}
            style={style.shell}
            logo={<img alt={t('shell.logo.alt')} src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg" />}
            onLogoClick={(e) => {
              onLogoClickAction(e);
            }}
            profile={<Avatar icon="customer" shape={AvatarShape.Circle} />}
            onProfileClick={(e) => popoverConfigItemsRef.current.openBy(e.detail.targetRef)}
            onMenuItemClick={(e) => {
              onMenuItemClick(e);
            }}
            {...props}
          />
          <div data-testid="emptySpace-wrapper" style={style.emptySpace} />
          <PopoverListItems popoverRef={popoverConfigItemsRef} title={userName} items={popoverItems} />
        </>
      ) : (
        <>
          <ShellBar
            data-testid="shell-wrapper"
            primaryTitle={title}
            style={style.shell}
            logo={<img alt={t('shell.logo.alt')} src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg" />}
            onLogoClick={(e) => {
              onLogoClickAction(e);
            }}
          />
        </>
      )}
    </>
  );
};

export default Shell;
