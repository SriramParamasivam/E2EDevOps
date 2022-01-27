import { Button } from '@ui5/webcomponents-react';
import ReactFlowWrapper from './ReactFlowWrapper';

const DevPipelineDummy = () => {
  const dummyElements = [
    {
      id: 'horizontal-1',
      sourcePosition: 'right',
      type: 'input',
      style: { backgroundColor: 'var(--sapPositiveElementColor)' },
      data: {
        label: <Button>Start</Button>,
      },
      position: { x: 50, y: 250 },
    },
    {
      id: 'horizontal-2',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: {
        label: <Button>Github</Button>,
      },
      style: { backgroundColor: 'var(--sapPositiveElementColor)' },
      position: { x: 250, y: 250 },
    },
    {
      id: 'horizontal-3',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: {
        label: <Button>Maven</Button>,
      },
      style: { backgroundColor: 'var(--sapPositiveElementColor)' },
      position: { x: 450, y: 250 },
    },
    {
      id: 'horizontal-4',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: {
        label: <Button>Security Scan</Button>,
      },
      style: { backgroundColor: 'var(--sapPositiveElementColor)' },
      position: { x: 650, y: 250 },
    },
    {
      id: 'horizontal-5',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: {
        label: <Button>Build VM</Button>,
      },
      style: { backgroundColor: 'var(--sapPositiveElementColor)' },
      position: { x: 850, y: 250 },
    },
    {
      id: 'horizontal-6',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: {
        label: <Button>Deploy Artifacts</Button>,
      },
      style: { backgroundColor: 'var(--sapPositiveElementColor)' },
      position: { x: 1050, y: 250 },
    },
    {
      id: 'horizontal-7',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: {
        label: <Button>Performance Testing</Button>,
      },
      style: { backgroundColor: 'var(--sapPositiveElementColor)' },
      position: { x: 1250, y: 250 },
    },
    {
      id: 'horizontal-8',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: {
        label: <Button>Attach DNS</Button>,
      },
      style: { backgroundColor: 'var(--sapPositiveElementColor)' },
      position: { x: 1450, y: 250 },
    },
    {
      id: 'horizontal-9',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: {
        label: <Button>VM Deploy</Button>,
      },
      style: { backgroundColor: 'var(--sapPositiveElementColor)' },
      position: { x: 1650, y: 250 },
    },
    {
      id: 'horizontal-10',
      sourcePosition: 'left',
      targetPosition: 'left',
      data: {
        label: <Button>Deployment Strategy</Button>,
      },
      style: { backgroundColor: 'var(--sapPositiveElementColor)' },
      position: { x: 1850, y: 250 },
    },
    {
      id: 'horizontal-e1-2',
      source: 'horizontal-1',
      type: 'smoothstep',
      target: 'horizontal-2',
      animated: true,
    },
    {
      id: 'horizontal-e1-3',
      source: 'horizontal-2',
      type: 'smoothstep',
      target: 'horizontal-3',
      animated: true,
    },
    {
      id: 'horizontal-e1-4',
      source: 'horizontal-3',
      type: 'smoothstep',
      target: 'horizontal-4',
      animated: true,
    },
    {
      id: 'horizontal-e3-5',
      source: 'horizontal-4',
      type: 'smoothstep',
      target: 'horizontal-5',
      animated: true,
    },
    {
      id: 'horizontal-e3-6',
      source: 'horizontal-5',
      type: 'smoothstep',
      target: 'horizontal-6',
      animated: true,
    },
    {
      id: 'horizontal-e5-7',
      source: 'horizontal-6',
      type: 'smoothstep',
      target: 'horizontal-7',
      animated: true,
    },
    {
      id: 'horizontal-e6-8',
      source: 'horizontal-7',
      type: 'smoothstep',
      target: 'horizontal-8',
      animated: true,
    },
    {
      id: 'horizontal-e6-9',
      source: 'horizontal-8',
      type: 'smoothstep',
      target: 'horizontal-9',
      animated: true,
    },
    {
      id: 'horizontal-e6-10',
      source: 'horizontal-9',
      type: 'smoothstep',
      target: 'horizontal-10',
      animated: true,
    },
  ];
  return <ReactFlowWrapper elements={dummyElements} />;
};

export default DevPipelineDummy;
