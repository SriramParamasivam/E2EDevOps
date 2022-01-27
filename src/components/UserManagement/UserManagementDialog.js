import { Bar, Button, ButtonDesign, ComboBox, ComboBoxItem, Dialog, Icon, Input, InputType, Label, Title } from '@ui5/webcomponents-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { addUserPostDataThunk } from '../../store/middleware/addUserSlice';
import styles from './UserManagementDialog.module.css';

const UserManagementDialog = ({ dialogRef }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');

  const onNameChange = (evt) => {
    setName(evt.target.value);
  };

  const onRoleChange = (evt) => {
    setRole(evt.detail.item.text);
  };

  const onEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const onPasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const onAddUserSubmit = (evt) => {
    dispatch(addUserPostDataThunk({ name, email, role, password }));
    dialogRef.current.close();
  };

  const onAfterCloseDialog = (evt) => {
    setName('');
    setEmail('');
    setRole('');
    setPassword('');
  };

  return (
    <Dialog
      ref={dialogRef}
      className=""
      footer={
        <Bar
          endContent={
            <>
              <Button
                design={ButtonDesign.Emphasized}
                onClick={(evt) => {
                  onAddUserSubmit(evt);
                }}
                disabled={!name || !email || !role || !password}
              >
                {t('shell.menuitem.addUser')}
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
      header={<Bar endContent={<Icon name="add-employee" />} middleContent={<Title>{t('shell.menuitem.addUser')}</Title>} />}
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
            {t('app.generics.email')}
          </Label>
          <br></br>
          <Input
            type={InputType.Email}
            required={true}
            onInput={(evt) => {
              onEmailChange(evt);
            }}
            value={email}
          />
        </div>
        <div className={styles.formItem}>
          <Label showColon required>
            {t('app.generics.role')}
          </Label>
          <br></br>
          <ComboBox
            icon={<Icon name="employee" />}
            onSelectionChange={(evt) => {
              onRoleChange(evt);
            }}
            value={role}
          >
            <ComboBoxItem text={t('app.user.admin')} />
            <ComboBoxItem text={t('app.user.read')} />
            <ComboBoxItem text={t('app.user.write')} />
          </ComboBox>
        </div>
        <div className={styles.formItem}>
          <Label showColon required>
            {t('app.generics.password')}
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

export default UserManagementDialog;
