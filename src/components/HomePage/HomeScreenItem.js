import { Button } from '@ui5/webcomponents-react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomeScreenItem = ({ id, viewButtonIcon, childComponent, isViewMoreVisible, inlineStyle }) => {
  const history = useHistory();
  const { t } = useTranslation();
  const onViewDetailsClick = (evt) => {
    evt && evt.target && evt.target.id && history.push(evt.target.id);
  };
  return (
    <div className={styles.homePageTile}>
      <div style={inlineStyle}>
        {isViewMoreVisible && (
          <Button
            id={id}
            icon={viewButtonIcon}
            style={{ float: 'right', margin: '0.5rem' }}
            onClick={(evt) => {
              onViewDetailsClick(evt);
            }}
          >
            {t('app.generics.viewMore')}
          </Button>
        )}
      </div>
      {childComponent}
    </div>
  );
};

export default HomeScreenItem;
