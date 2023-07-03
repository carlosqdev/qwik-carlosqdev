import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/starter/hero/hero";

export default component$(() => {
  return (
    <>
      <Hero />

      {/* <div class="container container-flex"></div> */}
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Carlosqdev",
  meta: [
    {
      name: "description",
      content: "Carlosqdev site built with Qwik.",
    },
  ],
};
