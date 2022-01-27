import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MessageBox, MessageBoxTypes } from '@ui5/webcomponents-react';
import { usersGetDataThunk } from '../../store/middleware/usersHelperSlice';
import { credentialGetDataThunk } from '../../store/middleware/credentialHelperSlice';

/**
 * Component to handle every Actions results/errors.
 * The Toast, MessageViewDialog and MessageBox can be reused for any actions.
 * Separated from the ActionsPopover as it re-renders every time it's being opened.
 */
function AddDeleteHandler() {
  const dispatch = useDispatch();
  const [isMessageBoxOpen, setIsMessageBoxOpen] = useState(false);
  const [messageBoxType, setMessageBoxType] = useState(MessageBoxTypes.ERROR);
  const [messageBoxTitle, setMessageBoxTitle] = useState();
  const [messageBoxContent, setMessageBoxContent] = useState();

  const addUserStatusCode = useSelector((state) => state.addUserService.responses.statusCode);

  const deleteUserStatusCode = useSelector((state) => state.deleteUserService.responses.statusCode);

  const addCredentialStatusCode = useSelector((state) => state.addCredentialService.responses.statusCode);

  const deleteCredentialStatusCode = useSelector((state) => state.deleteCredentialService.responses.statusCode);

  const showMessageBoxHelper = useCallback((title, type, message) => {
    setMessageBoxTitle(title);
    setMessageBoxType(type);
    setMessageBoxContent(message);
    setIsMessageBoxOpen(true);
  }, []);

  useEffect(() => {
    if (addUserStatusCode === 200) {
      showMessageBoxHelper('Success', MessageBoxTypes.SUCCESS, 'User Added Successfully.!');
      dispatch(usersGetDataThunk());
    } else if (addUserStatusCode === 401 || addUserStatusCode === 404) {
      showMessageBoxHelper('Error', MessageBoxTypes.ERROR, 'Add User Failed.!');
    }
  }, [dispatch, addUserStatusCode, showMessageBoxHelper]);

  useEffect(() => {
    if (deleteUserStatusCode === 200) {
      showMessageBoxHelper('Success', MessageBoxTypes.SUCCESS, 'User Deleted Successfully.!');
      dispatch(usersGetDataThunk());
    } else if (deleteUserStatusCode === 401) {
      showMessageBoxHelper('Error', MessageBoxTypes.ERROR, 'User Deletion Failed.!');
    } else if (deleteUserStatusCode === 404) {
      showMessageBoxHelper('Error', MessageBoxTypes.ERROR, 'User Not Found.!');
    }
  }, [dispatch, deleteUserStatusCode, showMessageBoxHelper]);

  useEffect(() => {
    if (addCredentialStatusCode === 200) {
      showMessageBoxHelper('Success', MessageBoxTypes.SUCCESS, 'Credential Added Successfully.!');
      dispatch(credentialGetDataThunk());
    } else if (addCredentialStatusCode === 401 || addCredentialStatusCode === 404) {
      showMessageBoxHelper('Error', MessageBoxTypes.ERROR, 'Add Credential Failed.!');
    }
  }, [dispatch, addCredentialStatusCode, showMessageBoxHelper]);

  useEffect(() => {
    if (deleteCredentialStatusCode === 200) {
      showMessageBoxHelper('Success', MessageBoxTypes.SUCCESS, 'Credential Deleted Successfully.!');
      dispatch(credentialGetDataThunk());
    } else if (deleteCredentialStatusCode === 401) {
      showMessageBoxHelper('Error', MessageBoxTypes.ERROR, 'Credential Deletion Failed.!');
    } else if (deleteCredentialStatusCode === 404) {
      showMessageBoxHelper('Error', MessageBoxTypes.ERROR, 'Credential Not Found.!');
    }
  }, [dispatch, deleteCredentialStatusCode, showMessageBoxHelper]);

  /* istanbul ignore next */
  const handleOnCloseMessageBox = () => {
    setIsMessageBoxOpen(false);
  };

  return (
    <div data-testid="actionsHandler">
      <MessageBox style={{ width: '20rem' }} data-testid="actionsHandlerMessageBox" open={isMessageBoxOpen} type={messageBoxType} title={messageBoxTitle} onClose={handleOnCloseMessageBox}>
        {messageBoxContent}
      </MessageBox>
    </div>
  );
}

export default AddDeleteHandler;
