import { h } from 'preact';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'preact/hooks';
import VizSensor from 'react-visibility-sensor';
import Styles from './styles.module.scss';

const VizAwareChart = ({ value, content, type }) => {
  const [radius] = useState(48);
  const [transitionDuration] = useState(600); // ms

  const [extraStyle, setExtraStyle] = useState({});
  const [sensorVisible, setSensorVisible] = useState(false);

  const width = sensorVisible ? `${value}%` : '0%';

  const strokeTransition = () => {
    let circumference = 2 * Math.PI * radius;
    let offset = (circumference * (10 - value / 10)) / 10;

    setExtraStyle({
      strokeDashoffset: offset,
      '--initialStroke': circumference,
      '--transitionDuration': `${transitionDuration}ms`,
    });
  };

  const drawCircleChart = () => (
    <li className={Styles.display}>
      <div className={Styles.circle}>
        <svg
          width="108"
          height="108"
          className={cx(Styles.circle__svg, Styles['circle__progress--path'])}
        >
          <circle cx="54" cy="54" r={radius} className={Styles.circle__progress}></circle>
          <circle
            cx="54"
            cy="54"
            r={radius}
            className={cx(Styles.circle__progress, Styles['circle__progress--fill'])}
            style={extraStyle}
          ></circle>
        </svg>

        <div className={Styles.percent}>
          <span className={Styles.percent__label}>{content || ''}</span>
        </div>
      </div>
    </li>
  );

  const drawBarChart = () => (
    <div className={Styles.bar}>
      <div
        className={Styles.fill}
        style={{ width, transition: `width ${transitionDuration}ms ease` }}
      ></div>
    </div>
  );

  const onVisibilityChange = (visible = false) => {
    // only set visible once
    // don't revert visible on exit
    if (!sensorVisible && visible) {
      setSensorVisible(true);

      if (type === 'circle') {
        strokeTransition();
      }
    }
  };

  return (
    <VizSensor onChange={onVisibilityChange}>
      {type === 'circle' ? drawCircleChart() : drawBarChart()}
    </VizSensor>
  );
};

VizAwareChart.propTypes = {
  type: PropTypes.oneOf(['bar', 'circle']),
  value: PropTypes.number.isRequired,
  content: PropTypes.string,
};

export default VizAwareChart;
