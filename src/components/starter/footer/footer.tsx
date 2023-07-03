import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer>
      <div class="container">
        <a href="https://www.builder.io/" target="_blank" class={styles.anchor}>
          <span>Made with ♡ by carlosqdev</span>
          <span class={styles.spacer}>|</span>
          <span>Built with Qwik</span>
        </a>
      </div>
    </footer>
  );
});
