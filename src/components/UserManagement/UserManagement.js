import styles from './UserManagement.module.css';
import { AnalyticalTable, FlexBox, Button, Title, ButtonDesign, Icon, MessageBox } from '@ui5/webcomponents-react';
import UserManagementDialog from './UserManagementDialog';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserPostDataThunk } from '../../store/middleware/deleteUserSlice';

const UserManagement = () => {
  const dialogRef = useRef();
  const dispatch = useDispatch();
  const [rowData, setRowData] = useState({});
  const usersData = useSelector((state) => state.usersHelperService.responses.data);
  const [isOpen, setIsOpen] = useState();
  const isLoading = useSelector((state) => {
    return state.addUserService.isLoading || state.usersHelperService.isLoading || state.deleteUserService.isLoading;
  });
  const { t } = useTranslation();

  const onUserRowClicked = ({
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
      dispatch(deleteUserPostDataThunk({ rowData }));
    }
    setIsOpen(false);
  };
  return (
    <>
      <Title className={styles.userManageTitle}>
        <Icon name="manager" style={{ paddingRight: '0.25rem' }} />
        {t('shell.menuitem.userManage')}
      </Title>
      <div className={styles.addUserButtonDiv}>
        <Button
          icon="add-employee"
          design={ButtonDesign.Emphasized}
          className={styles.addUserButton}
          onClick={(e) => {
            dialogRef.current.open();
          }}
        >
          {t('shell.menuitem.addUser')}
        </Button>
      </div>
      <div className={styles.userManageDiv}>
        <AnalyticalTable
          columns={[
            {
              Header: t('app.generics.userName'),
              accessor: 'userName',
            },
            {
              Header: t('app.generics.email'),
              accessor: 'email',
            },
            {
              Header: t('app.generics.role'),
              accessor: 'role',
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
          data={usersData}
          header="Current width: auto"
          onRowClick={(evt) => {
            onUserRowClicked(evt);
          }}
          loading={isLoading}
        />
      </div>
      <MessageBox open={isOpen} onClose={(evt) => onCloseMessageBox(evt)}>
        Are you sure want to delete this User?
      </MessageBox>
      <UserManagementDialog dialogRef={dialogRef} />
    </>
  );
};

export default UserManagement;
