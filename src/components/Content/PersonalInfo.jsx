import { h } from 'preact';
import { MainInfo } from '../../data/personal';
import { LanguageExperience, SoftwareExperience } from '../../data/experience';
import VizAwareChart from './VizAwareChart';

const PersonalInfo = () => (
  <div className="col s24 m9 l6">
    <h5>Personal</h5>
    <table>
      <tbody>
        {MainInfo.map((info) => (
          <tr key={info.key}>
            <td>{info.key}</td>
            <td>{info.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <h5>Programming Languages</h5>
    <table className="software">
      <tbody>
        {LanguageExperience.map((experience) => (
          <tr key={experience.name}>
            <td>{experience.name}</td>
            <td>
              <VizAwareChart value={experience.xp} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <h5>Software Experience</h5>
    <table className="software">
      <tbody>
        {SoftwareExperience.map((experience) => (
          <tr key={experience.name}>
            <td>{experience.name}</td>
            <td>
              <VizAwareChart value={experience.xp} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default PersonalInfo;
