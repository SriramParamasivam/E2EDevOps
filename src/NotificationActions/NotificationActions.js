import { Label, NotificationAction, NotificationListItem, Title, TitleLevel, Toast } from '@ui5/webcomponents-react';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './NotificationActions.module.css';

const NotificationActions = () => {
  const { t } = useTranslation();
  const toastRef = useRef();
  const [toastContent, setToastContent] = useState();
  const [hide, setHide] = useState(false);
  const onCloseAction = (evt) => {
    setToastContent('EventConn-BuildPipelinepatchb211 - deploy in prod is Rejected.!');
    setHide(true);
    toastRef.current.show();
  };
  const onAcceptAction = () => {
    setToastContent('EventConn-BuildPipelinepatchb211 - deploy in prod is Approved.!');
    setHide(true);
    toastRef.current.show();
  };
  return (
    <>
      <div className={styles.parentDiv}>
        <Title className={styles.approvalsHeading} level={TitleLevel.H2}>
          {t('home.items.approvals')}
        </Title>
        {!hide && (
          <NotificationListItem
            actions={<NotificationAction onClick={(evt) => onAcceptAction(evt)} text="Approve" />}
            footnotes={<Label>30 mins ago</Label>}
            showClose
            heading="EventConn-BuildPipelinepatchb211 - deploy in prod"
            onClose={(evt) => onCloseAction(evt)}
          ></NotificationListItem>
        )}
        <NotificationListItem actions={<NotificationAction text="Approve" />} footnotes={<Label>1 hour ago</Label>} showClose heading="EventConn-DevPipeline1- deploy in dev"></NotificationListItem>
        <NotificationListItem actions={<NotificationAction text="Approve" />} footnotes={<Label>1 day ago</Label>} showClose heading="EventConn-BuildPipeline1"></NotificationListItem>
        <NotificationListItem actions={<NotificationAction text="Approve" />} footnotes={<Label>3 Days</Label>} showClose heading="EventConn-Pipeline1-deploy in preview"></NotificationListItem>
      </div>
      <Toast ref={toastRef}>{toastContent}</Toast>
    </>
  );
};

export default NotificationActions;
