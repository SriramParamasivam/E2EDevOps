import React, { useState, useRef, useEffect, useCallback } from 'react';
import ReactFlow, { ReactFlowProvider, addEdge, Controls } from 'react-flow-renderer';

import Sidebar from './Sidebar';

import './dnd.css';
import styles from './ReactFlow.module.css';
import { Bar, BusyIndicator, Button, ButtonDesign, ComboBox, ComboBoxItem, Dialog, Icon, Input, Label, Title } from '@ui5/webcomponents-react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { credentialGetDataThunk } from '../../store/middleware/credentialHelperSlice';
import { getGithubDataThunk } from '../../store/middleware/githubConnectivitySlice';
import { postVMAzureBuildDataThunk } from '../../store/middleware/vmAzureBuildSlice';

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState([]);
  const [tempElements, setTempElements] = useState();
  const dispatch = useDispatch();
  const credentials = useSelector((state) => state.credentialHelperService.responses.data);
  const credentialsOriginal = useSelector((state) => state.credentialHelperService.responses.data);
  const githubConnectivity = useSelector((state) => state.githubConnectivityService.responses.githubVerification);
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const githubDialogRef = useRef();
  const vmAzureDialogRef = useRef();
  const { t } = useTranslation();

  const [repoURL, setRepoURL] = useState();
  const [branch, setBranch] = useState();
  const [credentialName, setCredentialName] = useState();

  const [hostName, setHostName] = useState();
  const [azureBuildType, setVMType] = useState();
  const [azureBuildDisk, setVMDisk] = useState();

  const onLoad = (_reactFlowInstance) => setReactFlowInstance(_reactFlowInstance);

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const createNewNode = (event, sourcePosition, targetPosition) => {
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    const newNode = {
      id: getId(),
      position,
      data: {
        label: <BusyIndicator active={true} />,
      },
      sourcePosition: sourcePosition,
      targetPosition: targetPosition,
      style: { backgroundColor: 'var(--sapHighlightTextColor)' },
    };
    return newNode;
  };

  const createConnector = (id, sourceId, targetId) => {
    const connector = {
      id: id,
      source: sourceId,
      target: targetId,
      type: 'step',
      animated: true,
      style: { stroke: 'var(--sapPositiveElementColor)' },
    };
    return connector;
  };

  const onDrop = (event) => {
    event.preventDefault();
    const name = event.dataTransfer.getData('application/name');
    if (name === t('shell.pipelines.dnd.sidebar.github')) {
      const newNode = createNewNode(event, 'right', 'right');
      githubDialogRef.current.open();
      dispatch(credentialGetDataThunk({}));
      setTempElements(newNode);
    } else if (name === t('shell.pipelines.dnd.sidebar.VMBuildAzure')) {
      const newNode2 = createNewNode(event, 'left', 'left');
      const connector = createConnector('connector1', 'dndnode_2', 'dndnode_1');
      vmAzureDialogRef.current.open();
      setTempElements([...elements, newNode2, connector]);
    }
  };

  const onRepoChange = (evt) => {
    setRepoURL(evt.target.value);
  };

  const onBranchChange = (evt) => {
    setBranch(evt.target.value);
  };

  const onCredentialChange = (evt) => {
    setCredentialName(evt.detail.item.text);
  };

  const onHostNameChange = (evt) => {
    setHostName(evt.target.value);
  };

  const onTypeChange = (evt) => {
    setVMType(evt.target.value);
  };

  const onDiskChange = (evt) => {
    setVMDisk(evt.detail.item.text);
  };

  const onGithubConnectivitySubmit = (evt) => {
    githubDialogRef.current.close();
    setElements((es) => es.concat(tempElements));
    const selectedCredential = credentialsOriginal.filter((credential) => credential.name === credentialName);
    if (selectedCredential && selectedCredential.length > 0) {
      const selectedCredentialObj = selectedCredential[0];
      dispatch(getGithubDataThunk({ repoURL, branch, selectedCredentialObj }));
    }
  };

  const onVMBuildConnectivityCheck = (evt) => {
    vmAzureDialogRef.current.close();
    setElements([]);
    setElements((es) => es.concat(tempElements));
    dispatch(postVMAzureBuildDataThunk({ hostName, azureBuildType, azureBuildDisk }));
  };

  const addRemoveNodes = useCallback(
    (color) => {
      setElements([]);
      const position = reactFlowInstance.project({
        x: 400,
        y: 300,
      });

      const newNode = {
        id: getId(),
        position,
        data: {
          label: <Button>Github</Button>,
        },
        sourcePosition: 'right',
        targetPosition: 'right',
        style: { backgroundColor: color },
      };
      setElements([newNode]);
    },
    [reactFlowInstance],
  );

  useEffect(() => {
    if (githubConnectivity === 201) {
      addRemoveNodes('var(--sapPositiveElementColor)');
    } else if (githubConnectivity === 401) {
      addRemoveNodes('var(--sapButton_Negative_Background)');
    }
  }, [addRemoveNodes, githubConnectivity, reactFlowInstance, tempElements]);

  const onAfterCloseDialog = (evt) => {
    setBranch('');
    setCredentialName('');
    setRepoURL('');
  };

  const renderGithubCredentials = () => {
    return (
      <Dialog
        ref={githubDialogRef}
        className=""
        footer={
          <Bar
            endContent={
              <>
                <Button
                  design={ButtonDesign.Emphasized}
                  onClick={(evt) => {
                    onGithubConnectivitySubmit(evt);
                  }}
                  disabled={!repoURL || !branch || !credentialName}
                >
                  {t('app.generics.ok')}
                </Button>
                <Button
                  onClick={function noRefCheck() {
                    githubDialogRef.current.close();
                  }}
                >
                  {t('app.generics.close')}
                </Button>
              </>
            }
          />
        }
        header={<Bar endContent={<Icon name="activities" />} middleContent={<Title>GitHub Credentials</Title>} />}
        onAfterClose={(evt) => {
          onAfterCloseDialog(evt);
        }}
      >
        <div className={styles.formStyle}>
          <div className={styles.formItem}>
            <Label showColon required>
              {t('shell.pipelines.dnd.github.repoURL')}
            </Label>
            <br></br>
            <Input onInput={(evt) => onRepoChange(evt)} type="Text" required={true} value={repoURL} />
          </div>
          <div className={styles.formItem}>
            <Label showColon required>
              {t('shell.pipelines.dnd.github.branch')}
            </Label>
            <br></br>
            <Input type="Text" onInput={(evt) => onBranchChange(evt)} required={true} value={branch} />
          </div>
          <div className={styles.formItem}>
            <Label showColon required>
              {t('shell.pipelines.dnd.github.credentialName')}
            </Label>
            <br></br>
            <ComboBox onSelectionChange={(evt) => onCredentialChange(evt)} value={credentialName}>
              {credentials.map((credential) => (
                <ComboBoxItem id={credential.name} text={credential.name} />
              ))}
            </ComboBox>
          </div>
        </div>
      </Dialog>
    );
  };

  const renderVMAzureBuild = () => {
    return (
      <Dialog
        ref={vmAzureDialogRef}
        className=""
        footer={
          <Bar
            endContent={
              <>
                <Button
                  design={ButtonDesign.Emphasized}
                  onClick={(evt) => {
                    onVMBuildConnectivityCheck(evt);
                  }}
                  disabled={!hostName || !azureBuildType || !azureBuildDisk}
                >
                  {t('app.generics.ok')}
                </Button>
                <Button
                  onClick={function noRefCheck() {
                    vmAzureDialogRef.current.close();
                  }}
                >
                  {t('app.generics.close')}
                </Button>
              </>
            }
          />
        }
        header={<Bar endContent={<Icon name="building" />} middleContent={<Title>Azure VM</Title>} />}
        onAfterClose={(evt) => {
          onAfterCloseDialog(evt);
        }}
      >
        <div className={styles.formStyle}>
          <div className={styles.formItem}>
            <Label showColon required>
              {t('shell.pipelines.dnd.azureBuild.hostName')}
            </Label>
            <br></br>
            <Input onInput={(evt) => onHostNameChange(evt)} type="Text" required={true} value={hostName} />
          </div>
          <div className={styles.formItem}>
            <Label showColon required>
              {t('shell.pipelines.dnd.azureBuild.type')}
            </Label>
            <br></br>
            <Input type="Text" onInput={(evt) => onTypeChange(evt)} required={true} value={azureBuildType} />
          </div>
          <div className={styles.formItem}>
            <Label showColon required>
              {t('shell.pipelines.dnd.azureBuild.disk')}
            </Label>
            <br></br>
            <ComboBox onSelectionChange={(evt) => onDiskChange(evt)} value={azureBuildDisk}>
              <ComboBoxItem id={'yes'} text={'Yes'} />
              <ComboBoxItem id={'no'} text={'No'} />
            </ComboBox>
          </div>
        </div>
      </Dialog>
    );
  };

  return (
    <>
      <div className="dndflow">
        <ReactFlowProvider>
          <div className="reactflow-wrapper" ref={reactFlowWrapper}>
            <ReactFlow elements={elements} onConnect={onConnect} onLoad={onLoad} onDrop={onDrop} onDragOver={onDragOver}>
              <Controls />
            </ReactFlow>
          </div>
          <Sidebar />
        </ReactFlowProvider>
        {renderGithubCredentials()}
        {renderVMAzureBuild()}
      </div>
    </>
  );
};

export default DnDFlow;
