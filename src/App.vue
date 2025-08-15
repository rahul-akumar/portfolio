<script setup>
import { Github, Linkedin, Instagram, Twitter, Mail } from "lucide-vue-next";

// Organized utility classes
const styles = {
  header: "pl-8 flex flex-col gap-20",
  title:
    "indent-0 font-medium tracking-tighter text-white text-7xl md:text-8xl lg:text-9xl xl:text-[12rem]",
  subtitle: "px-2 text-md lg:text-lg text-white/70 uppercase tracking-widest",
  main: "pl-6 mt-20 flex flex-col gap-8 md:gap-24",
  section: "flex pl-4 gap-20 md:gap-40",
  sectionList: "flex list-none flex-col gap-10 text-md lg:text-lg",
  sectionHeader: "tracking-widest text-white/70 text-md lg:text-lg",
  sectionItem:
    " text-white underline underline-offset-12 decoration-white/50 hover:decoration-white hover:text-white/80 focus:ring-2 hover:after:content-['_↗'] after:text-amber-500",
  footer: "py-16 pl-3.5 md:pl-68 pt-2",
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
        class="underline decoration-white/70 decoration-2 underline-offset-24 focus:ring-4 md:underline-offset-80"
        >Dialpad</a
      >.
    </h1>
    <p :class="styles.subtitle">Systems first • Software designer</p>
  </header>

  <main :class="styles.main">
    <div :class="styles.section">
      <section>
        <ul :class="styles.sectionList">
          <header :class="styles.sectionHeader">IMPORTANT LINKS</header>
          <li>
            <a
              :class="styles.sectionItem"
              href="https://rahulkumar.notion.site/2343f4f51b468091ba6ad62b3ac7571d?v=2343f4f51b46801cb30e000cc8007f16&source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              :class="styles.sectionItem"
              href="https://rahulkumar.notion.site/Rahul-s-resume-17a3f4f51b468043b200eef691b438b5?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              :class="styles.sectionItem"
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
        <ul :class="styles.sectionList" class="flex flex-col sm:flex-row">
          <li :class="styles.sectionHeader">PAST WORK</li>
          <li>
            <a
              :class="styles.sectionItem"
              href="https://rahul-akumar.github.io/REGO/"
              target="_blank"
              rel="noopener noreferrer"
              >REGO</a
            >
          </li>
          <li>
            <a
              :class="styles.sectionItem"
              href=""
              target="_blank"
              rel="noopener noreferrer"
              >Airtel</a
            >
          </li>
          <li>
            <a
              :class="styles.sectionItem"
              href="https://www.verizon.com/"
              target="_blank"
              rel="noopener noreferrer"
              >Verizon</a
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

.footer-link {
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
</style>
