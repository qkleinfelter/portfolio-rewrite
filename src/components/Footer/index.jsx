import Styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} Quinn Kleinfelter
      <small className={Styles.byline}>🚀 Built with Astro</small>
    </footer>
  );
}
export default Footer;
