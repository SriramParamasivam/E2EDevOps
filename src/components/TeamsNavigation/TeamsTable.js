import { AnalyticalTable, Badge, Button, FlexBox, Icon, Title } from '@ui5/webcomponents-react';
import styles from './TeamsNavigation.module.css';

const TeamsTable = ({ teamName, data }) => {
  return (
    <>
      <Title className={styles.headingStyle}>{teamName}</Title>
      <AnalyticalTable
        columns={[
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'Team',
            accessor: 'team',
          },
          {
            Header: 'Technologies',
            accessor: 'technologies',
            Cell: (instance) => {
              const technologies = instance.value.split(',');
              return technologies.map((technology) => {
                return (
                  <Badge colorScheme="6" icon={<Icon name="it-system" />}>
                    {technology}
                  </Badge>
                );
              });
            },
          },

          {
            Cell: (instance) => {
              return (
                <FlexBox>
                  <Button
                    icon="email"
                    onClick={(evt) => {
                      window.open('mailto:');
                    }}
                    style={{ paddingRight: '2px' }}
                  ></Button>
                  <Button
                    icon="call"
                    onClick={(evt) => {
                      window.open('https://teams.microsoft.com/l/chat/0/0?users=astikey@eventconn.com,vignesh@eventconn.com&topicName=EventConn');
                    }}
                  ></Button>
                </FlexBox>
              );
            },
            Header: 'Contact',
            accessor: '.',
            canResize: false,
            id: 'actions',
            width: 100,
          },
        ]}
        data={data}
        filterable
        groupBy={[]}
        groupable
        header="Table Title"
        infiniteScroll
        rowHeight={44}
        selectedRowIds={{
          3: true,
        }}
        style={{ padding: '1rem' }}
        selectionMode="SingleSelect"
        withRowHighlight
      />
    </>
  );
};

export default TeamsTable;
