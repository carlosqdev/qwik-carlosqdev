import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
import ImgProfile from "~/media/profile.webp?jsx";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
      <ImgProfile />
      <h1>Carlos Quintero</h1>
      <p>
        Systems engineer with over 2 years of experience in ReactJS, JavaScript,
        TypeScript, HTML, CSS, NodeJS, Git, and GitHub. In my free time, I enjoy
        exploring new technologies and learning about different areas of
        programming.
      </p>
      <div class={styles["button-group"]}>
        <a
          href="https://linkedin.com/in/carlosqdev"
          target="_blank"
          class="button button-dark"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/carlosqdev"
          target="_blank"
          class="button button-dark"
        >
          GitHub
        </a>
      </div>
    </div>
  );
});
