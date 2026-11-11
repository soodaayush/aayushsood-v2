import styles from "../../styles/home/home.module.css";

export default function TechnicalSkills({ skills }) {
  return (
    <>
      <h2 className={styles.heading}>/ skills</h2>
      <dl className={styles.list}>
        {skills.map((group) => (
          <div key={group.type}>
            <dt>{group.type.toLowerCase()}</dt>
            <dd>{group.skills.map((skill) => skill.name).join(", ")}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}
