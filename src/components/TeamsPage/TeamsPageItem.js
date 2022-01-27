import { Avatar, AvatarShape, AvatarSize, Text } from '@ui5/webcomponents-react';
import { useHistory } from 'react-router-dom';
import styles from './TeamsPage.module.css';

const TeamsPageItem = ({ id, iconName, iconBackgroundColor, iconText, shape, titleText }) => {
  const history = useHistory();
  const onAvatarItemClick = (evt) => {
    const id = evt.target.id;
    switch (id) {
      case 'github':
        window.open('https://github.com/', '_blank');
        break;
      case 'maven':
        window.open('https://maven.apache.org/', '_blank');
        break;
      case 'security':
        window.open('https://www.sap.com/india/about/trust-center/security.html', '_blank');
        break;
      case 'azure':
        window.open('https://azure.microsoft.com/en-in/', '_blank');
        break;
      case 'gcp':
        window.open('https://cloud.google.com/', '_blank');
        break;
      default:
        break;
    }
    if (id && !(['github', 'maven', 'security', 'azure', 'gcp'].indexOf(id) > -1)) {
      history.push(id);
    }
  };
  return (
    <div className={styles.avatarParent}>
      <Avatar
        id={id}
        icon={iconName}
        size={AvatarSize.XL}
        shape={shape ? shape : AvatarShape.Circle}
        className={styles.avatarStyle}
        style={{ backgroundColor: iconBackgroundColor }}
        onClick={(evt) => {
          onAvatarItemClick(evt);
        }}
        tooltip={titleText}
      />
      <Text className={styles.iconText}>{iconText}</Text>
    </div>
  );
};

export default TeamsPageItem;
