import './PricingPage.css';

const PricingPage = () => {
  return (
    <div style={{ padding: '5rem' }}>
      <div className="columns">
        <ul className="price">
          <li className="header" style={{ backgroundColor: 'var(--sapContent_Illustrative_Color2)' }}>
            Basic
          </li>
          <li className="grey">Free</li>
          <li>Limited tools</li>
          <li>Free Plugins Only</li>
          <li>Limited Cloud Resources</li>
          <li>1GB Bandwidth</li>
        </ul>
      </div>

      <div className="columns">
        <ul className="price">
          <li className="header" style={{ backgroundColor: 'var(--sapIndicationColor_6)' }}>
            Pro
          </li>
          <li className="grey">$ 50 / Month</li>
          <li>Multi Tools</li>
          <li>Free/Paid Plugins</li>
          <li>Hyperscaler access</li>
          <li>2GB Bandwidth</li>
        </ul>
      </div>

      <div className="columns">
        <ul className="price">
          <li className="header" style={{ backgroundColor: 'var(--sapHighlightColor)' }}>
            Premium
          </li>
          <li className="grey">$ 100 / Month</li>
          <li>Unlimited tools</li>
          <li>BYO Plugins</li>
          <li>Hypersccaler and Automated journey</li>
          <li>5GB Bandwidth</li>
        </ul>
      </div>
    </div>
  );
};

export default PricingPage;
