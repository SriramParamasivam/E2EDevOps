import { Bar, Button, ButtonDesign, ComboBox, ComboBoxItem, Dialog, Icon, Input, InputType, Label, Title } from '@ui5/webcomponents-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { addCredentialPostDataThunk } from '../../store/middleware/addCredentialSlice';
import styles from './CredentialManagementDialog.module.css';

const CredentialManagementDialog = ({ dialogRef }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [owner, setOwner] = useState('');
  const [password, setPassword] = useState('');

  const onNameChange = (evt) => {
    setName(evt.target.value);
  };

  const onUsernameChange = (evt) => {
    setUsername(evt.target.value);
  };

  const onOwnerChange = (evt) => {
    setOwner(evt.detail.item.text);
  };

  const onPasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const onAddCredentialSubmit = (evt) => {
    dispatch(addCredentialPostDataThunk({ name, username, owner, password }));
    dialogRef.current.close();
  };

  const onAfterCloseDialog = (evt) => {
    setName('');
    setUsername('');
    setOwner('');
    setPassword('');
  };

  return (
    <Dialog
      ref={dialogRef}
      footer={
        <Bar
          endContent={
            <>
              <Button
                design={ButtonDesign.Emphasized}
                onClick={(evt) => {
                  onAddCredentialSubmit(evt);
                }}
                disabled={!name || !username || !owner || !password}
              >
                {t('app.generics.submit')}
              </Button>
              <Button
                onClick={() => {
                  dialogRef.current.close();
                  onAfterCloseDialog();
                }}
              >
                {t('app.generics.cancel')}
              </Button>
            </>
          }
        />
      }
      header={<Bar endContent={<Icon name="shield" />} middleContent={<Title>{t('shell.menuitem.addCredential')}</Title>} />}
      onAfterClose={(evt) => {
        onAfterCloseDialog(evt);
      }}
    >
      <div className={styles.formStyle}>
        <div className={styles.formItem}>
          <Label showColon required>
            {t('app.generics.name')}
          </Label>
          <br></br>
          <Input
            type={InputType.Text}
            required={true}
            onInput={(evt) => {
              onNameChange(evt);
            }}
            value={name}
          />
        </div>
        <div className={styles.formItem}>
          <Label showColon required>
            {t('app.generics.userName')}
          </Label>
          <br></br>
          <Input
            type={InputType.Text}
            required={true}
            onInput={(evt) => {
              onUsernameChange(evt);
            }}
            value={username}
          />
        </div>
        <div className={styles.formItem}>
          <Label showColon required>
            {t('app.generics.owner')}
          </Label>
          <br></br>
          <ComboBox
            icon={<Icon name="employee" />}
            onSelectionChange={(evt) => {
              onOwnerChange(evt);
            }}
            value={owner}
          >
            <ComboBoxItem text={t('app.credential.admin')} />
            <ComboBoxItem text={t('app.credential.devTeam')} />
            <ComboBoxItem text={t('app.credential.buildTeam')} />
          </ComboBox>
        </div>
        <div className={styles.formItem}>
          <Label showColon required>
            {t('app.generics.passwordToken')}
          </Label>
          <br></br>
          <Input
            type={InputType.Password}
            required={true}
            onInput={(evt) => {
              onPasswordChange(evt);
            }}
            value={password}
          />
        </div>
      </div>
    </Dialog>
  );
};

export default CredentialManagementDialog;
