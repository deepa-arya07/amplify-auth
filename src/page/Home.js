import React from "react";
import styles from "./Home.module.css";
const backgroundStyle = {
  backgroundImage: "url('/bg-image.avif')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  textAlign: "center",
};

function Home() {
  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section style={backgroundStyle}>
        <div className={styles.heroContent}>
          <h1>Welcome to Pinnacle</h1>
          <p>Your one-stop destination for competitive exam preparation.</p>
          <button className={styles.ctaButton}>Get Started</button>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <h2>About Us</h2>
        <p>
          Pinnacle is a leading platform that helps students prepare for SSC,
          RRB, and other government exams with high-quality courses, test
          series, and study materials.
        </p>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <h2>Why Choose Us?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <h3>Expert Faculty</h3>
            <p>Learn from the best educators in the industry.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Comprehensive Study Material</h3>
            <p>Access well-structured notes and practice tests.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Mock Tests & Analysis</h3>
            <p>Improve your performance with real-time assessments.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
