import { h } from 'preact';
import { useState } from 'preact/hooks';
import PropTypes from 'prop-types';
import VizSensor from 'react-visibility-sensor';

// VizAwareChart.propTypes = {
//   type: PropTypes.oneOf(['bar', 'circle']),
//   value: PropTypes.number.isRequired,
//   content?: PropTypes.string,
// };

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
    <li className="display">
      <div className="circle">
        <svg width="108" height="108" className="circle__svg">
          <circle
            cx="54"
            cy="54"
            r={radius}
            className="circle__progress circle__progress--path"
          ></circle>
          <circle
            cx="54"
            cy="54"
            r={radius}
            className="circle__progress circle__progress--fill"
            style={extraStyle}
          ></circle>
        </svg>

        <div className="percent">
          <span className="percent__label">{content || ''}</span>
        </div>
      </div>
    </li>
  );

  const drawBarChart = () => (
    <div className="bar">
      <div
        className="fill"
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

export default VizAwareChart;
