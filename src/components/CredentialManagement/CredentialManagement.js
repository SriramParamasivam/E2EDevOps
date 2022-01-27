import styles from './CredentialManagement.module.css';
import { AnalyticalTable, FlexBox, Button, Title, ButtonDesign, Icon, MessageBox } from '@ui5/webcomponents-react';
import CredentialManagementDialog from './CredentialManagementDialog';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCredentialPostDataThunk } from '../../store/middleware/deleteCredentialSlice';

const CredentialManagement = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const credentialData = useSelector((state) => state.credentialHelperService.responses.data);
  const [rowData, setRowData] = useState({});
  const [isOpen, setIsOpen] = useState();
  const isLoading = useSelector((state) => {
    return state.credentialHelperService.isLoading || state.addCredentialService.isLoading || state.deleteCredentialService.isLoading;
  });
  const dialogRef = useRef();

  const onCredentialRowClicked = ({
    detail: {
      row: { original },
    },
  }) => {
    setRowData(original);
    setIsOpen(true);
  };

  const onDeleteButton = (evt) => {
    if (evt.target && evt.target.closest("[role='cell']")) {
      evt.target.closest("[role='cell']").click();
    }
  };

  const onCloseMessageBox = (evt) => {
    if (evt.detail.action === 'OK') {
      dispatch(deleteCredentialPostDataThunk({ rowData }));
    }
    setIsOpen(false);
  };

  return (
    <>
      <Title className={styles.userManageTitle}>
        <Icon name="crm-service-manager" style={{ paddingRight: '0.25rem' }} />
        {t('shell.menuitem.credentialManage')}
      </Title>
      <div className={styles.addUserButtonDiv}>
        <Button
          icon="shield"
          design={ButtonDesign.Emphasized}
          className={styles.addUserButton}
          onClick={(e) => {
            dialogRef.current.open();
          }}
        >
          {t('shell.menuitem.addCredential')}
        </Button>
      </div>
      <div className={styles.userManageDiv}>
        <AnalyticalTable
          columns={[
            {
              Header: t('app.generics.name'),
              accessor: 'name',
            },
            {
              Header: t('app.generics.userName'),
              accessor: 'userName',
            },
            {
              Header: t('app.generics.passwordToken'),
              accessor: 'token',
            },
            {
              Header: t('app.generics.owner'),
              accessor: 'owner',
            },
            {
              responsivePopIn: true,
              responsiveMinWidth: 801,
              id: 'actions',
              Header: 'Actions',
              width: 100,
              canResize: false,
              Cell: (instance) => {
                return (
                  <FlexBox>
                    <Button
                      icon="delete"
                      onClick={(evt) => {
                        onDeleteButton(evt);
                      }}
                    >
                      {t('app.generics.delete')}
                    </Button>
                  </FlexBox>
                );
              },
            },
          ]}
          groupable
          data={credentialData}
          header="Current width: auto"
          onRowClick={(evt) => {
            onCredentialRowClicked(evt);
          }}
          loading={isLoading}
        />
      </div>
      <MessageBox open={isOpen} onClose={(evt) => onCloseMessageBox(evt)}>
        Are you sure want to delete this Credential?
      </MessageBox>
      <CredentialManagementDialog dialogRef={dialogRef} />
    </>
  );
};

export default CredentialManagement;
