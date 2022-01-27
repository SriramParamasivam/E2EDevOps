import { AvatarShape } from '@ui5/webcomponents-react';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '../../routes/Routes';
import styles from './TeamsPage.module.css';
import TeamsPageItem from './TeamsPageItem';

const TeamsPage = ({ title }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.teamsParent}>
        <TeamsPageItem id={ROUTES.TEAMS_BUILD} iconName="key-user-settings" iconBackgroundColor="var(--sapLegendColor6)" iconText={t('shell.teams.build')} shape={AvatarShape.Circle} />
        <TeamsPageItem id={ROUTES.TEAMS_INFRA} iconName="visits" iconBackgroundColor="var(--sapButton_Information_Background)" iconText={t('shell.teams.infra')} shape={AvatarShape.Circle} />
        <TeamsPageItem id={ROUTES.TEAMS_RELEASE} iconName="kpi-managing-my-area" iconBackgroundColor="var(--sapButton_TextColor)" iconText={t('shell.teams.release')} shape={AvatarShape.Circle} />
      </div>
    </>
  );
};

export default TeamsPage;
