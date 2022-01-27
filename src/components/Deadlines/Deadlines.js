import { AnalyticalTable, Button, FlexBox, Title, TitleLevel } from '@ui5/webcomponents-react';
import styles from './Deadlines.module.css';

const Deadlines = () => {
  return (
    <>
      <Title className={styles.approvalsHeading} level={TitleLevel.H2} style={{ height: 0 }}>
        Deadlines
      </Title>
      <div style={{ display: 'flex', justifyContent: 'center', height: '20rem' }}>
        <AnalyticalTable
          columns={[
            {
              Header: 'Pipeline Name',
              accessor: 'pipelineName',
              canResize: false,
            },
            {
              Header: 'Start At',
              accessor: 'startAt',
              canResize: false,
            },
            {
              Header: 'Triggered by',
              accessor: 'triggeredBy',
              canResize: false,
            },
            {
              Header: 'Owner',
              accessor: 'owner',
              canResize: false,
            },
            {
              Header: '',
              accessor: '.',
              canResize: false,
              id: 'actions',
              width: '50',
              Cell: (instance) => {
                return (
                  <FlexBox>
                    <Button
                      icon="show"
                      onClick={(evt) => {
                        // onDeleteButton(evt);
                      }}
                    ></Button>
                  </FlexBox>
                );
              },
            },
          ]}
          data={[
            {
              startAt: 'Aug 26th 12:05:49',
              owner: 'Admin',
              triggeredBy: 'Jerry Anand',
              pipelineName: 'EventConn-Pipeline1',
              status: 'Warning',
            },
            {
              startAt: 'Aug 26th 10:42:49',
              owner: 'Dev',
              triggeredBy: 'Luna Albert',
              pipelineName: 'EventConn-DevPipeline',
              status: 'Error',
            },
            {
              startAt: 'Aug 26th 12:42:49',
              owner: 'Testing',
              triggeredBy: 'Misha Jospeh',
              pipelineName: 'EventConn-Pipeline3',
              status: 'Warning',
            },
            {
              startAt: 'Aug 27th 10:42:49',
              owner: 'Dev',
              triggeredBy: 'Luna Albert',
              pipelineName: 'EventConn-DevPipeline',
              status: 'Error',
            },
            {
              startAt: 'Aug 27th 12:42:49',
              owner: 'Testing',
              triggeredBy: 'Misha Jospeh',
              pipelineName: 'EventConn-Pipeline3',
              status: 'Warning',
            },
          ]}
          header="Table Title"
          rowHeight={44}
          selectedRowIds={{
            3: true,
          }}
          style={{ width: '95%' }}
          selectionMode="SingleSelect"
          withRowHighlight
        />
      </div>
    </>
  );
};

export default Deadlines;
