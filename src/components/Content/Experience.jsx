import { h } from 'preact';
import VizAwareChart from './VizAwareChart';
import { FrontEndSkills, BackEndSkills } from '../../data/skills';
import { JobsExperience, EducationExperience } from '../../data/experience';

const Experience = () => (
  <div className="row inset col s24 m15 l18">
    <div className="of-title">
      <h5>Work Experience</h5>
    </div>
    <div className="special row">
      <div className="timeline col s24">
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
    <div className="of-title">
      <h5>Education</h5>
    </div>
    <div className="special row">
      <div className="timeline col s24">
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
    <div className="of-title" style={{ paddingBottom: 0 }}>
      <h5>Front-End Skills</h5>
    </div>
    <div className="charts">
      {FrontEndSkills.map((skill) => (
        <span className="chart" key={skill.name}>
          <VizAwareChart value={skill.percent} type="circle" content={skill.name} />
        </span>
      ))}
    </div>
    <div className="of-title" style={{ paddingBottom: 0 }}>
      <h5>Back-End Skills</h5>
    </div>
    <div className="charts">
      {BackEndSkills.map((skill) => (
        <span className="chart" key={skill.name}>
          <VizAwareChart value={skill.percent} type="circle" content={skill.name} />
        </span>
      ))}
    </div>
  </div>
);

export default Experience;
