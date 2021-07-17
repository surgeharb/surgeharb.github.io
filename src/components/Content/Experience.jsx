import { h } from 'preact';
import cx from 'classnames';
import VizAwareChart from '../VizAwareChart/index.jsx';
import { FrontEndSkills, BackEndSkills } from '../../data/skills';
import { JobsExperience, EducationExperience } from '../../data/experience';
import Styles from './styles.module.scss';

const Experience = () => (
  <div className="row inset col s24 m15 l18">
    <div className={Styles.ofTitle}>
      <h5>Work Experience</h5>
    </div>
    <div className={cx('row', Styles.special)}>
      <div className={cx('col s24', Styles.timeline)}>
        <ul>
          {JobsExperience.map((experience, i) => (
            <li key={`${i}`}>
              <div>
                <h6>
                  <span>{experience.position}</span>
                  <span>{experience.year ? ' @ ' : ''}</span>
                  <span>{experience.location}</span>
                  <span>{experience.year}</span>
                </h6>
                <p dangerouslySetInnerHTML={{ __html: experience.description }}></p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className={Styles.ofTitle}>
      <h5>Education</h5>
    </div>
    <div className={cx('row', Styles.special)}>
      <div className={cx('col s24', Styles.timeline)}>
        <ul>
          {EducationExperience.map((experience, i) => (
            <li key={`${i}`}>
              <div>
                <h6>
                  <span>{experience.position}</span>
                  <span>{experience.year ? ' @ ' : ''}</span>
                  <span>{experience.location}</span>
                  <span>{experience.year}</span>
                </h6>
                <p dangerouslySetInnerHTML={{ __html: experience.description }}></p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className={Styles.ofTitle} style={{ paddingBottom: 0 }}>
      <h5>Front-End Skills</h5>
    </div>
    <div className={Styles.charts}>
      {FrontEndSkills.map((skill) => (
        <span className="chart" key={skill.name}>
          <VizAwareChart value={skill.percent} type="circle" content={skill.name} />
        </span>
      ))}
    </div>
    <div className={Styles.ofTitle} style={{ paddingBottom: 0 }}>
      <h5>Back-End Skills</h5>
    </div>
    <div className={Styles.charts}>
      {BackEndSkills.map((skill) => (
        <span className="chart" key={skill.name}>
          <VizAwareChart value={skill.percent} type="circle" content={skill.name} />
        </span>
      ))}
    </div>
  </div>
);

export default Experience;
