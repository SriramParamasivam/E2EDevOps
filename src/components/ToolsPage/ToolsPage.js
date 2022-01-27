import { SideNavigation, SideNavigationItem } from '@ui5/webcomponents-react';
import { useState } from 'react';
const azure = require('./azure_console.png').default;
const gcp = require('./GCP_console.png').default;
const grafana = require('./Grafana.png').default;
const jenkins = require('./Jenkins.png').default;
const jira = require('./Jira.png').default;
const qcert = require('./qcert_ui.png').default;
const rundeck = require('./rundeck_ui.png').default;
const serviceNow = require('./ServiceNow.png').default;
const vcenter = require('./vcenter_console.png').default;

export const ToolsPage = () => {
  const [srcURL, setSrcURL] = useState(azure);

  const onSideNavigationClick = (evt) => {
    switch (evt.target.id) {
      case 'Azure':
        setSrcURL(azure);
        break;
      case 'GCP':
        setSrcURL(gcp);
        break;
      case 'Grafana':
        setSrcURL(grafana);
        break;
      case 'Jenkins':
        setSrcURL(jenkins);
        break;
      case 'Jira':
        setSrcURL(jira);
        break;
      case 'Q-Cert':
        setSrcURL(qcert);
        break;
      case 'RunDeck':
        setSrcURL(rundeck);
        break;
      case 'ServiceNow':
        setSrcURL(serviceNow);
        break;
      case 'vCenter':
        setSrcURL(vcenter);
        break;
      default:
        setSrcURL(azure);
        break;
    }
  };

  return (
    <div style={{ display: 'flex', height: 'inherit', padding: '0.25rem' }}>
      <SideNavigation onSelectionChange={function noRefCheck() {}} slot="" style={{}} tooltip="">
        <SideNavigationItem icon="database" id="Azure" text="Azure" onClick={(evt) => onSideNavigationClick(evt)} />
        <SideNavigationItem icon="cloud" id="GCP" text="GCP" onClick={(evt) => onSideNavigationClick(evt)} />
        <SideNavigationItem icon="world" id="Grafana" text="Grafana" onClick={(evt) => onSideNavigationClick(evt)} />
        <SideNavigationItem icon="kpi-managing-my-area" id="Jenkins" text="Jenkins" onClick={(evt) => onSideNavigationClick(evt)} />
        <SideNavigationItem icon="workflow-tasks" id="Jira" text="Jira" onClick={(evt) => onSideNavigationClick(evt)} />
        <SideNavigationItem icon="shield" id="Q-Cert" text="Q-Cert" onClick={(evt) => onSideNavigationClick(evt)} />
        <SideNavigationItem icon="key-user-settings" id="RunDeck" text="RunDeck" onClick={(evt) => onSideNavigationClick(evt)} />
        <SideNavigationItem icon="badge" id="ServiceNow" text="ServiceNow" onClick={(evt) => onSideNavigationClick(evt)} />
        <SideNavigationItem icon="commission-check" id="vCenter" text="vCenter" onClick={(evt) => onSideNavigationClick(evt)} />
      </SideNavigation>
      <div style={{ width: '99%', height: '99%' }}>
        <img style={{ width: 'inherit', height: 'inherit' }} src={srcURL} alt="Azure"></img>
      </div>
    </div>
  );
};

export default ToolsPage;
