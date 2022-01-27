import TeamsTable from './TeamsTable';

const BuildTeam = () => {
  return (
    <TeamsTable
      teamName={'Build Team'}
      data={[
        { name: 'Nagesh Shetty', email: 'nagesh.shetty@eventconn.com', team: 'Java Team', technologies: 'Maven,Ant' },
        {
          team: 'New Onboarding of tools',
          technologies: 'Security Scan,Nagios',
          name: 'Franklin',
          email: 'franklyn@eventconn.com',
        },
        {
          team: 'Patching and Onboarding',
          technologies: 'CISCAT,hadolint',
          name: 'Don Bosco',
          email: 'donbosco@eventconn.com',
        },
      ]}
    />
  );
};
export default BuildTeam;
