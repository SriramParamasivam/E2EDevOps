import TeamsTable from './TeamsTable';

const InfraTeam = () => {
  return (
    <TeamsTable
      teamName={'Infra Team'}
      data={[
        { name: 'Nitish Nigam', employeeId: 'D000923', email: 'nitish.nigam@eventconn.com', team: 'Baremetal and VMware', technologies: 'VMware,Baremetal,Private cloud' },
        {
          team: 'Hyper Scalers',
          technologies: 'GCP,Azure,AWS,Alibaba',
          name: 'Chein Christian',
          email: 'chein.christian@eventconn.com',
        },
        {
          team: 'Serverless Technologies',
          technologies: 'Docker,Kubernetes, SAAS',
          name: 'Robert Bosch',
          email: 'robert.bosch@eventconn.com',
        },
      ]}
    />
  );
};
export default InfraTeam;
