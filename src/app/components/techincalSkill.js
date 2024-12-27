import styles from "../styles/technicalSkill.module.css";

export default function TechnicalSkill(props) {
  return (
    <div className={styles.technicalSkillContainer}>
      <h1 className={styles.skillType}>{props.type}</h1>
      {props.skills.map((skill) => (
        <div className={styles.technicalSkill} key={skill.id}>
          <p className={styles.skillTitle}>{skill.name}</p>
          <label className={styles.skillExperience}>
            {skill.experience} Experience
          </label>
        </div>
      ))}
    </div>
  );
}
