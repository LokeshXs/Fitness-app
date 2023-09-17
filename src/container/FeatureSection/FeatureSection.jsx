import styles from "./FeatureSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";
const FeatureSection = () => {

  return (
    <>
      <section className={`${styles.featureSection}`}>
        <h2 className={styles.featureTitle}>YOUR FITNESS EXPERIENCE DOES NOT MATTER - ONLY YOUR MINDSET  DOES</h2>
        <div className={styles.features}>
          <div className={`${styles.featurePointContainer} ${styles['community_feature']}`}>
            <div className={styles['featurePointContainer-text']}>
              <p>WORLD WIDE COMMUNITY</p>
              <FontAwesomeIcon icon={faArrowUpRightDots} className={styles.icon} />
            </div>
          </div>
          <div className={`${styles.featurePointContainer} ${styles['tracker_feature']}`}>
            <div className={styles['featurePointContainer-text']}>
              <p>WORKOUT TRACKER</p>
              <FontAwesomeIcon icon={faArrowUpRightDots}  className={styles.icon} />
            </div>
          </div>
          <div className={`${styles.featurePointContainer} ${styles['trainer_feature']}`}>
            <div className={styles['featurePointContainer-text']}>
              <p>EXPERIENCED TRAINER</p>
              <FontAwesomeIcon icon={faArrowUpRightDots} className={styles.icon} />
            </div>
          </div>
          <div className={`${styles.featurePointContainer} ${styles['nutrition_feature']}`}>
            <div className={styles['featurePointContainer-text']}>
              <p>HEALTHY NUTRITION PLAN</p>
              <FontAwesomeIcon icon={faArrowUpRightDots} className={styles.icon} />
            </div>
          </div>
          <div className={`${styles.featurePointContainer} ${styles['newsletter_feature']}`}>
            <div className={styles['featurePointContainer-text']}>
              <p>NEWSLETTER</p>
              <FontAwesomeIcon icon={faArrowUpRightDots} className={styles.icon} />
            </div>
          </div>

        </div>
      </section>

      <section className={`${styles.featureSection}`}>
        <h2 className={styles.featureTitle}>YOUR FITNESS EXPERIENCE DOES NOT MATTER - ONLY YOUR MINDSET  DOES</h2>

      </section>
    </>
  )
};

export default FeatureSection;