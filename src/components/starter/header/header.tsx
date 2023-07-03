import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}></div>
        <ul>
          <li>
            <a href="/" target="_blank">
              Home
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              Experiences
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
