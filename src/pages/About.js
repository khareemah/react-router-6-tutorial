import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className="section">
      <h2>About</h2>
      <Link to="/" className="btn">
        Back to Home
      </Link>
      <br />
      <a href="https://www.google.com">google.com</a>
    </section>
  );
};
export default About;
