import mainPageStyles from "./MainPage.module.scss";
import styles from "./AboutPage.module.scss";
import classNames from "classnames/bind";

const bind = classNames.bind(styles);

function About() {
  return (
    <div className={styles.About}>
      <h1 className={`${mainPageStyles.title} ${styles.title}`}>About Page</h1>
      <p className={bind("long-line-height", { highlight: true })}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odit
        dolor corrupti, magnam autem ipsum consequatur aliquid officia mollitia
        saepe.
      </p>
    </div>
  );
}

export default About;
