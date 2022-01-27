import React from 'react';
import { useSelector } from 'react-redux';
import styles from './HomePage.module.css';
import HomeScreenItem from './HomeScreenItem';
import { ROUTES } from '../../routes/Routes';
import TopPipelines from '../TopPipelines/TopPipelines';
import NotificationActions from '../../NotificationActions/NotificationActions';
import OverallPerformance from '../OverallPerformance/OverallPerformance';
import Deadlines from '../Deadlines/Deadlines';
import { Title, TitleLevel } from '@ui5/webcomponents-react';
import DataBoxes from './DataBoxes';

const HomePage = () => {
  const userName = useSelector((state) => state.loginService.responses.userName);
  return (
    <>
      <Title level={TitleLevel.H1} style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
        Welcome {userName}.!
      </Title>
      <Title level={TitleLevel.H2} style={{ display: 'flex', justifyContent: 'center', padding: '1rem', paddingTop: '0' }}>
        Overall View
      </Title>
      <DataBoxes />
      <div className={styles.homePageTileParent}>
        <HomeScreenItem id={ROUTES.HOME_PAGE_PIPELINES} viewButtonIcon={'pipeline-analysis'} childComponent={<TopPipelines />} isViewMoreVisible={true} inlineStyle={{ height: 0 }} />
        <HomeScreenItem id={ROUTES.HOME_PAGE_APPROVALS} viewButtonIcon={'validate'} childComponent={<NotificationActions />} isViewMoreVisible={true} inlineStyle={{}} />
      </div>
      <div className={styles.homePageTileParent}>
        <HomeScreenItem id={ROUTES.HOME_PAGE_DEADLINES} viewButtonIcon={'pending'} childComponent={<Deadlines />} isViewMoreVisible={true} inlineStyle={{ height: 0 }} />
        <HomeScreenItem id={ROUTES.HOME_PAGE_OVERALL_PERFORMANCE} childComponent={<OverallPerformance />} isViewMoreVisible={false} inlineStyle={{ height: 0 }} />
      </div>
    </>
  );
};

export default HomePage;
