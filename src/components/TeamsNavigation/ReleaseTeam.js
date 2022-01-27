import TeamsTable from './TeamsTable';

const ReleaseTeam = () => {
  return (
    <TeamsTable
      teamName={'Release Team'}
      data={[
        { name: 'Disha', email: 'disha@eventconn.com', team: 'Dev Support', technologies: 'Jenkins, Spinnaker' },
        {
          team: 'Testing',
          technologies: 'Sonarqube, Performance, Quality',
          name: 'Vijay',
          email: 'vijay.sethupathi@eventconn.com',
        },
        {
          team: 'Support and Operations',
          technologies: 'Support and On-Call Activities',
          name: 'Tamizh Pandian',
          email: 'tamizh.pandian@eventconn.com',
        },
      ]}
    />
  );
};
export default ReleaseTeam;
