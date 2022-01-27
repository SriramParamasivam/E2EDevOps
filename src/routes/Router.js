import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { BusyIndicator } from '@ui5/webcomponents-react';
import { ROUTES } from './Routes';
import LoginPage from '../components/LoginPage/LoginPage';
import DnDFlow from '../components/ReactFlow/ReactFlow';
import HomePage from '../components/HomePage/HomePage';
import UserManagement from '../components/UserManagement/UserManagement';
import TeamsPage from '../components/TeamsPage/TeamsPage';
import CredentialManagement from '../components/CredentialManagement/CredentialManagement';
import { useSelector } from 'react-redux';
import OverallPerformance from '../components/OverallPerformance/OverallPerformance';
import ToolsPage from '../components/ToolsPage/ToolsPage';
import { Roles } from '../components/Constants/Roles';
import BuildTeam from '../components/TeamsNavigation/BuildTeam';
import ReleaseTeam from '../components/TeamsNavigation/ReleaseTeam';
import InfraTeam from '../components/TeamsNavigation/InfraTeam';
import AllPipelines from '../components/AllPipelines/AllPipelines';
import AllDeadlinePipelines from '../components/AllDeadlinePipelines/AllDeadlinePipelines';
import AllApprovals from '../components/AllApprovals/AllApprovals';
import PluginsPage from '../components/PluginsPage/PluginsPage';
import PricingPage from '../components/PricingPage/PricingPage';
import SupportPage from '../components/SupportPage/SupportPage';
import DevPipelineDummy from '../components/ReactFlow/DevPipelineDummy';
import SecurityPipelineDummy from '../components/ReactFlow/SecurityPipelineDummy';

const NotFound = lazy(() => import('../pages/Fallback/NotFound'));
const Buggy = lazy(() => import('../pages/Fallback/Buggy'));

const Router = () => {
  const verified = useSelector((state) => state.loginService.responses.verified);
  const role = useSelector((state) => state.loginService.responses.role);
  return (
    <Suspense fallback={<BusyIndicator active />}>
      <Switch>
        {verified === 'yes' && <Route path={ROUTES.REACT_FLOW} exact component={DnDFlow} />}
        {verified === 'yes' && <Route path={ROUTES.REACT_FLOW_DEV} exact component={DevPipelineDummy} />}
        {verified === 'yes' && <Route path={ROUTES.REACT_FLOW_SECURITY} exact component={SecurityPipelineDummy} />}
        {verified === 'yes' && <Route path={ROUTES.HOME_PAGE} exact component={HomePage} />}
        {verified === 'yes' && <Route path={ROUTES.TEAMS} exact component={TeamsPage} />}
        {verified === 'yes' && <Route path={ROUTES.TEAMS_BUILD} exact component={BuildTeam} />}
        {verified === 'yes' && <Route path={ROUTES.TEAMS_INFRA} exact component={InfraTeam} />}
        {verified === 'yes' && <Route path={ROUTES.TEAMS_RELEASE} exact component={ReleaseTeam} />}
        {verified === 'yes' && <Route path={ROUTES.TOOLS} exact component={ToolsPage} />}
        {verified === 'yes' && <Route path={ROUTES.PLUGINS} exact component={PluginsPage} />}
        {verified === 'yes' && <Route path={ROUTES.PRICING} exact component={PricingPage} />}
        {verified === 'yes' && <Route path={ROUTES.SUPPORT} exact component={SupportPage} />}
        {verified === 'yes' && <Route path={ROUTES.HOME_PAGE_APPROVALS} exact component={AllApprovals} />}
        {verified === 'yes' && <Route path={ROUTES.HOME_PAGE_PIPELINES} exact component={AllPipelines} />}
        {verified === 'yes' && <Route path={ROUTES.HOME_PAGE_DEADLINES} exact component={AllDeadlinePipelines} />}
        {verified === 'yes' && <Route path={ROUTES.HOME_PAGE_OVERALL_PERFORMANCE} exact component={OverallPerformance} />}
        {verified === 'yes' && role === Roles.ADMIN && <Route path={ROUTES.USER_MANAGEMENT} exact component={UserManagement} />}
        {verified === 'yes' && role === Roles.ADMIN && <Route path={ROUTES.CREDENTIAL_MANAGEMENT} exact component={CredentialManagement} />}
        <Route path={ROUTES.BUGGY} exact component={Buggy} />
        <Route path={ROUTES.LOGIN} exact component={LoginPage} />
        <Route path={ROUTES.NOT_FOUND} exact component={NotFound} />
        <Route path={ROUTES.ANY} component={LoginPage} />
      </Switch>
    </Suspense>
  );
};

export default Router;
