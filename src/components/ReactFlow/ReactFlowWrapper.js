import React, { useRef } from 'react';
import ReactFlow, { ReactFlowProvider, Controls } from 'react-flow-renderer';

import './dnd.css';

const ReactFlowWrapper = ({ elements }) => {
  const reactFlowWrapper = useRef(null);

  return (
    <>
      <div className="dndflow">
        <ReactFlowProvider>
          <div className="reactflow-wrapper" ref={reactFlowWrapper}>
            <ReactFlow elements={elements}>
              <Controls />
            </ReactFlow>
          </div>
        </ReactFlowProvider>
      </div>
    </>
  );
};

export default ReactFlowWrapper;
