import styles from "./section-one.module.css";

import DesktopPc from "../../images/image-computer.png";

const SectionOne = () => {
  return (
    <section>
      <div className={styles.container}>
        <h3>Keep track of your snippets</h3>
        <p>
          Clipboard instantly stores any item you copy inthe cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>
      <div className={styles.image_content}>
        <div className={styles.image}>
          <img src={DesktopPc} alt="" />
        </div>

        <div className={styles.topics}>
          <div className={styles.topic_one}>
            <h3>Quick Search</h3>
            <p>
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          <div className={styles.topic_two}>
            <h3>iCloud Sync</h3>
            <p>Instantly saves and syncs snippets across all your devices.</p>
          </div>
          <div className={styles.topic_three}>
            <h3>Complete History</h3>
            <p>
              Retriave any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
