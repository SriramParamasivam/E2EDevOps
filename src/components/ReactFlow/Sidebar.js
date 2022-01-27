import { Button, Panel, Text } from '@ui5/webcomponents-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../routes/Routes';
import styles from './ReactFlow.module.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const history = useHistory();
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData('application/name', event.target.id);
    event.dataTransfer.effectAllowed = 'move';
  };

  const onBuildClick = (evt) => {
    evt.target && evt.target.id && history.push(evt.target.id);
  };

  const { t } = useTranslation();

  return (
    <aside className={styles.parentsPadding}>
      <Text>{t('shell.pipelines.dnd.sidebar.dragMessage')}</Text>
      <>
        <Panel collapsed={true} className="" headerText="Previous Builds" onToggle={function noRefCheck() {}} slot="" style={{}} tooltip="">
          <Button
            id={ROUTES.REACT_FLOW_DEV}
            className={styles.sideBarButton}
            onClick={(evt) => {
              onBuildClick(evt);
            }}
          >
            EventConn Dev Pipeline
          </Button>
          <Button
            id={ROUTES.REACT_FLOW_SECURITY}
            className={styles.sideBarButton}
            onClick={(evt) => {
              onBuildClick(evt);
            }}
          >
            EventConn Security Pipeline
          </Button>
        </Panel>
        <Panel collapsed={true} className="" headerText="Plugins" onToggle={function noRefCheck() {}} slot="" style={{}} tooltip="">
          <Button id={t('shell.pipelines.dnd.sidebar.github')} className={styles.sideBarButton} draggable slot="" onDragStart={(event) => onDragStart(event, 'input')}>
            {t('shell.pipelines.dnd.sidebar.github')}
          </Button>
          <Button id={t('shell.pipelines.dnd.sidebar.maven')} className={styles.sideBarButton} draggable onDragStart={(event) => onDragStart(event, 'input')}>
            {t('shell.pipelines.dnd.sidebar.maven')}
          </Button>
          <Button id={t('shell.pipelines.dnd.sidebar.securityScan')} className={styles.sideBarButton} draggable onDragStart={(event) => onDragStart(event, 'input')}>
            {t('shell.pipelines.dnd.sidebar.securityScan')}
          </Button>
          <Button id={t('shell.pipelines.dnd.sidebar.VMBuildAzure')} className={styles.sideBarButton} draggable onDragStart={(event) => onDragStart(event, 'input')}>
            {t('shell.pipelines.dnd.sidebar.VMBuildAzure')}
          </Button>
          <Button id={t('shell.pipelines.dnd.sidebar.VMBuildGCP')} className={styles.sideBarButton} draggable onDragStart={(event) => onDragStart(event, 'input')}>
            {t('shell.pipelines.dnd.sidebar.VMBuildGCP')}
          </Button>
        </Panel>
        <Panel collapsed={true} className="" headerText="Scheduler" onToggle={function noRefCheck() {}} slot="" style={{}} tooltip="">
          <Button id={t('shell.pipelines.dnd.sidebar.Start')} className={styles.sideBarButton} draggable slot="" onDragStart={(event) => onDragStart(event, 'input')}>
            {t('shell.pipelines.dnd.sidebar.Start')}
          </Button>
          <Button id={t('shell.pipelines.dnd.sidebar.End')} className={styles.sideBarButton} draggable onDragStart={(event) => onDragStart(event, 'input')}>
            {t('shell.pipelines.dnd.sidebar.End')}
          </Button>
        </Panel>
        <Panel collapsed={true} className="" headerText="Prerequisite" onToggle={function noRefCheck() {}} slot="" style={{}} tooltip="">
          <Button id={t('shell.pipelines.dnd.sidebar.allgreen')} className={styles.sideBarButton} draggable slot="" onDragStart={(event) => onDragStart(event, 'input')}>
            {t('shell.pipelines.dnd.sidebar.allgreen')}
          </Button>
          <Button id={t('shell.pipelines.dnd.sidebar.onestagefail')} className={styles.sideBarButton} draggable onDragStart={(event) => onDragStart(event, 'input')}>
            {t('shell.pipelines.dnd.sidebar.onestagefail')}
          </Button>
          <Button id={t('shell.pipelines.dnd.sidebar.onapprovaltoprod')} className={styles.sideBarButton} draggable onDragStart={(event) => onDragStart(event, 'input')}>
            {t('shell.pipelines.dnd.sidebar.onapprovaltoprod')}
          </Button>
        </Panel>
        <Panel collapsed={true} className="" headerText="Conditional Statements" onToggle={function noRefCheck() {}} slot="" style={{}} tooltip="">
          <Button id={t('shell.pipelines.dnd.sidebar.if')} className={styles.sideBarButton} draggable slot="" onDragStart={(event) => onDragStart(event, 'input')}>
            {t('shell.pipelines.dnd.sidebar.if')}
          </Button>
          <Button id={t('shell.pipelines.dnd.sidebar.else')} className={styles.sideBarButton} draggable onDragStart={(event) => onDragStart(event, 'input')}>
            {t('shell.pipelines.dnd.sidebar.else')}
          </Button>
          <Button id={t('shell.pipelines.dnd.sidebar.retry')} className={styles.sideBarButton} draggable onDragStart={(event) => onDragStart(event, 'input')}>
            {t('shell.pipelines.dnd.sidebar.retry')}
          </Button>
          <Button id={t('shell.pipelines.dnd.sidebar.parallel')} className={styles.sideBarButton} draggable onDragStart={(event) => onDragStart(event, 'input')}>
            {t('shell.pipelines.dnd.sidebar.parallel')}
          </Button>
        </Panel>
        <Panel collapsed={true} className="" headerText="Actions" onToggle={function noRefCheck() {}} slot="" style={{}} tooltip="">
          <Button id={t('shell.pipelines.dnd.sidebar.deploy')} className={styles.sideBarButton} draggable slot="" onDragStart={(event) => onDragStart(event, 'input')}>
            {t('shell.pipelines.dnd.sidebar.deploy')}
          </Button>
          <Button id={t('shell.pipelines.dnd.sidebar.release')} className={styles.sideBarButton} draggable onDragStart={(event) => onDragStart(event, 'input')}>
            {t('shell.pipelines.dnd.sidebar.release')}
          </Button>
          <Button id={t('shell.pipelines.dnd.sidebar.approval')} className={styles.sideBarButton} draggable onDragStart={(event) => onDragStart(event, 'input')}>
            {t('shell.pipelines.dnd.sidebar.approval')}
          </Button>
        </Panel>
      </>
    </aside>
  );
};
