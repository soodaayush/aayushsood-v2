import styles from "../../styles/home/home.module.css";

export default function Interests({ interests }) {
  return (
    <>
      <h2 className={styles.heading}>/ interests</h2>
      <dl className={styles.list}>
        {interests.map((interest) => (
          <div key={interest.name}>
            <dt>{interest.name.toLowerCase()}</dt>
            <dd>
              {[...interest.channels]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((channel, index) => (
                  <span key={channel.name}>
                    {index > 0 && ", "}
                    <a
                      href={channel.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {channel.name}
                    </a>
                  </span>
                ))}
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}
