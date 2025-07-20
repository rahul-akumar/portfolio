<script setup>
import { Github, Linkedin, Instagram, Twitter, Mail } from "lucide-vue-next";

// Organized utility classes
const styles = {
  header: "pl-3 md:pl-12",
  title:
    "indent-0 font-medium tracking-tight text-white text-7xl md:text-7xl lg:text-8xl xl:text-[12rem]",
  main: "p-4 my-4 md:pl-16 md:p-4 md:mt-20 flex flex-col gap-8 md:gap-24 h-full",
  subtitle: "text-lg text-stone-300 uppercase",
  sections: "flex flex-row md:flex-row gap-16 md:gap-48",
  linksList: "flex list-outside list-none flex-col gap-4 md:gap-12",
  sectionHeader: "tracking-wide text-stone-300 text-lg",
  workList: "flex flex-col md:flex-row list-none gap-4 md:gap-12",
  workHeader: "tracking-wide text-stone-300 text-lg mb-0",
  footer: "pb-16 pl-3.5 md:pl-88 pt-2",
  footerGrid: "flex gap-10 md:flex gap-4 md:gap-24",
};
</script>

<template>
  <header :class="styles.header">
    <h1 :class="styles.title">
      Rahul is building <br class="hidden xl:block" />
      <a
        href="https://www.dialpad.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="underline decoration-stone-600 decoration-2 underline-offset-24 focus:ring-4 md:underline-offset-80"
        >Dialpad</a
      >.
    </h1>
  </header>

  <main :class="styles.main">
    <p :class="styles.subtitle">
      Full stack • Systems first • Software designer
    </p>

    <div :class="styles.sections">
      <section>
        <ul :class="styles.linksList">
          <header :class="styles.sectionHeader">IMPORTANT LINKS</header>
          <li>
            <a
              class="section-link"
              href="https://rahulkumar.notion.site/2343f4f51b468091ba6ad62b3ac7571d?v=2343f4f51b46801cb30e000cc8007f16&source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              class="section-link"
              href="https://rahulkumar.notion.site/Rahul-s-resume-17a3f4f51b468043b200eef691b438b5?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              class="section-link"
              href="https://rahulkumar.notion.site/Publication-7b38e95cc3f84f6c8bdbec401996065d?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </li>
        </ul>
      </section>

      <section>
        <ul :class="styles.workList">
          <li :class="styles.workHeader">PAST WORK</li>
          <li>
            <a
              class="section-link"
              href="https://github.com/rahul-akumar/REGO"
              target="_blank"
              rel="noopener noreferrer"
              >REGO</a
            >
          </li>
          <li>
            <a
              class="section-link"
              href="https://www.airtel.in/b2b/"
              target="_blank"
              rel="noopener noreferrer"
              >Airtel</a
            >
          </li>
          <li>
            <a
              class="section-link"
              href="https://www.verizon.com/"
              target="_blank"
              rel="noopener noreferrer"
              >Verizon</a
            >
          </li>
          <li>
            <a
              class="section-link"
              href=""
              target="_blank"
              rel="noopener noreferrer"
              >More soon</a
            >
          </li>
        </ul>
      </section>
    </div>
  </main>

  <footer :class="styles.footer">
    <div :class="styles.footerGrid">
      <div class="flex items-center gap-2">
        <Github size="18" class="text-stone-300" />
        <a
          href="https://github.com/rahul-akumar"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
          >GH</a
        >
      </div>
      <div class="flex items-center gap-2">
        <Instagram size="18" class="text-stone-300" />
        <a
          href="https://www.instagram.com/rahul_akumar/"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
          >IG</a
        >
      </div>
      <div class="flex items-center gap-2">
        <Twitter size="18" class="text-stone-300" />
        <a
          href="https://x.com/rahul_akumar"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
          >X</a
        >
      </div>
      <div class="flex items-center gap-2">
        <Mail size="18" class="text-stone-300" />
        <a
          href="mailto:rahulakumar93@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
          >Get in touch</a
        >
      </div>
    </div>
  </footer>
</template>

<style scoped>
h1 a:hover {
  transition: all 0.3s ease-in-out;
  color: var(--color-stone-300);
  text-decoration-color: var(--color-stone-100);
}

h1 a:hover::after {
  content: " ↗";
  color: var(--color-amber-500);
}

.section-link {
  font-size: large;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 12px;
  text-decoration-color: var(--color-stone-600);
}

.section-link:hover {
  transition: all 0.2s ease-in-out;
  color: var(--color-stone-300);
  text-decoration-color: var(--color-stone-100);
}

.section-link:hover::after {
  content: " ↗";
  color: var(--color-amber-500);
}

.footer-link {
  font-size: large;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 12px;
  text-decoration-color: var(--color-stone-600);
}

.footer-link:hover {
  transition: all 0.2s ease-in-out;
  color: var(--color-stone-300);
  text-decoration-color: var(--color-stone-100);
}

.footer-link:hover::after {
  content: " ↗";
  color: var(--color-amber-500);
}

.section-link:focus,
.footer-link:focus {
  outline: 1px solid theme("colors.stone.400");
}
</style>
