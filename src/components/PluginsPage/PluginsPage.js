import { AvatarShape } from '@ui5/webcomponents-react';
import { useTranslation } from 'react-i18next';
import TeamsPageItem from '../TeamsPage/TeamsPageItem';
import './PluginsPage.css';

const PluginsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <TeamsPageItem
          id="github"
          titleText="Manage your repository using Github"
          iconName="sap-box"
          iconBackgroundColor="var(--sapContent_FocusColor)"
          iconText={t('shell.pipelines.dnd.sidebar.github')}
          shape={AvatarShape.Square}
        />
        <TeamsPageItem
          id="maven"
          titleText="Build your artifacts using Maven"
          iconName="Netweaver-business-client"
          iconBackgroundColor="var(--sapIndicationColor_8_Hover_Background)"
          iconText={t('shell.pipelines.dnd.sidebar.maven')}
          shape={AvatarShape.Square}
        />
        <TeamsPageItem
          titleText="Prevent your environment from Security Threats"
          id="security"
          iconName="mri-scan"
          iconBackgroundColor="var(--sapLegendColor7)"
          iconText={t('shell.pipelines.dnd.sidebar.securityScan')}
          shape={AvatarShape.Square}
        />
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <TeamsPageItem
          id="azure"
          titleText="Build your environment in Azure"
          iconName="database"
          iconBackgroundColor="var(--sapButton_Information_Background)"
          iconText={t('shell.pipelines.dnd.sidebar.VMBuildAzure')}
          shape={AvatarShape.Square}
        />
        <TeamsPageItem
          id="gcp"
          iconName="cloud"
          titleText="Build your environment in  GCP"
          iconBackgroundColor="var(--sapContent_Illustrative_Color3)"
          iconText={t('shell.pipelines.dnd.sidebar.VMBuildGCP')}
          shape={AvatarShape.Square}
        />
        <TeamsPageItem
          id="addYourOwnPlugin"
          iconName="add-favorite"
          titleText="Add Your Own Favorite Plugin"
          iconBackgroundColor="var(--sapButton_Accept_Selected_BorderColor)"
          iconText={t('shell.pipelines.dnd.sidebar.addYourPlugin')}
          shape={AvatarShape.Square}
        />
      </div>
    </>
  );
};

export default PluginsPage;
