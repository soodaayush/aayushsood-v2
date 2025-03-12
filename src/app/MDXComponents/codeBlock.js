import styles from "../styles/blog/codeblock.module.css";

const CodeBlock = ({ children, className }) => {
  const language = className ? className.replace(/language-/, "") : "";

  return (
    <pre className={`${styles.codeBlock} ${language}`}>
      <code>{children}</code>
    </pre>
  );
};

export default CodeBlock;
