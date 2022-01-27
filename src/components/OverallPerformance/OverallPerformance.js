import { Title, TitleLevel } from '@ui5/webcomponents-react';
import { PieChart } from '@ui5/webcomponents-react-charts';
import styles from './OverallPerformance.module.css';

const OverallPerformance = () => {
  return (
    <>
      <Title className={styles.approvalsHeading} level={TitleLevel.H2}>
        Overall Performance
      </Title>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PieChart
          dataset={[
            {
              name: 'January',
              users: 100,
            },
            {
              name: 'February',
              users: 230,
            },
            {
              name: 'March',
              users: 240,
            },
            {
              name: 'April',
              users: 280,
            },
            {
              name: 'May',
              users: 100,
            },
            {
              name: 'June',
              users: 230,
            },
            {
              name: 'July',
              users: 20,
            },
            {
              name: 'August',
              users: 220,
            },
            {
              name: 'September',
              users: 200,
            },
            {
              name: 'October',
              users: 250,
            },
            {
              name: 'November',
              users: 240,
            },
            {
              name: 'December',
              users: 280,
            },
          ]}
          dimension={{
            accessor: 'name',
          }}
          measure={{
            accessor: 'users',
          }}
          onClick={function noRefCheck() {}}
          onDataPointClick={function noRefCheck() {}}
          onLegendClick={function noRefCheck() {}}
          style={{
            width: '50%',
          }}
        />
      </div>
    </>
  );
};

export default OverallPerformance;
