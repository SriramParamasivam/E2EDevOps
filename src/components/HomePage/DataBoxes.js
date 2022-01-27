import { RadialChart } from '@ui5/webcomponents-react-charts';
import styles from './DataBoxes.module.css';

const DataBoxes = () => {
  return (
    <div style={{ padding: '0rem 4rem 1rem 4rem' }}>
      <div className={styles.columns}>
        <ul className={styles.price}>
          <li className={styles.header} style={{ backgroundColor: 'var(--sapLink_SubtleColor)' }}>
            Total Builds
          </li>
          <li className={styles.grey}>398</li>
        </ul>
      </div>

      <div className={styles.columns}>
        <ul className={styles.price}>
          <li className={styles.header} style={{ backgroundColor: 'var(--sapIndicationColor_4_Active_Background)' }}>
            Success
          </li>
          <li className={styles.grey}>254</li>
        </ul>
      </div>
      <div className={styles.columns}>
        <ul className={styles.price}>
          <li className={styles.header} style={{ backgroundColor: 'var(--sapIndicationColor_2_Hover_Background)' }}>
            Failure
          </li>
          <li className={styles.grey}>123</li>
        </ul>
      </div>
      <div className={styles.columns} style={{ padding: '.5rem' }}>
        <RadialChart displayValue="70%" value={70} style={{ height: '130px', border: '3px solid var(--sapHighlightColor)', borderRadius: '5%' }} />
      </div>
      <div className={styles.columns}>
        <ul className={styles.price}>
          <li className={styles.header} style={{ backgroundColor: 'var(--sapAccentColor1)' }}>
            Aborted
          </li>
          <li className={styles.grey}>0</li>
        </ul>
      </div>

      <div className={styles.columns}>
        <ul className={styles.price}>
          <li className={styles.header} style={{ backgroundColor: 'var(--sapAccentColor4)' }}>
            Skipped
          </li>
          <li className={styles.grey}>17</li>
        </ul>
      </div>

      <div className={styles.columns}>
        <ul className={styles.price}>
          <li className={styles.header} style={{ backgroundColor: 'var(--sapContent_Illustrative_Color3)' }}>
            In Progress
          </li>
          <li className={styles.grey}>4</li>
        </ul>
      </div>
    </div>
  );
};

export default DataBoxes;
