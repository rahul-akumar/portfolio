<script setup>
import { Github, Linkedin, Instagram, Twitter, Mail } from "lucide-vue-next";
</script>

<template>
  <header class="pl-12">
    <h1 class="indent-0 font-medium tracking-tight text-white">
      Rahul is building <br />
      <a
        href="https://www.dialpad.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="underline decoration-stone-600 decoration-2 underline-offset-80 focus:ring-4"
        >Dialpad</a
      >.
    </h1>
  </header>

  <main class="pl-16 pt-32 flex flex-col gap-24 h-full">
    <p class="text-lg tracking-widest text-stone-300 uppercase">Super IC • Full stack • Software builder</p>
    <div class="flex gap-48">
    <section>
      <ul class="flex list-outside list-disc flex-col gap-12">
        <header class="tracking-widest text-stone-300">IMPORTANT LINKS</header>
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
      <ul class="flex list-none gap-12">
        <li class="tracking-widest text-stone-300">PAST WORK</li>
        <li>
          <a
            class="section-link"
            href="https://github.com/rahul-akumar/WEGO"
            target="_blank"
            rel="noopener noreferrer"
            >WEGO</a
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
      </ul>
    </section>
    </div>
  </main>

  <footer class="pl-152">
    <div class="flex gap-24">
      <div class="flex gap-2 items-center">
        <Github size="18" class="text-stone-300" />
        <a
        href="https://github.com/rahul-akumar"
        target="_blank"
        rel="noopener noreferrer"
        class="footer-link"
        >GH</a></div>
      <div class="flex gap-2 items-center"> 
        <Instagram size="18" class="text-stone-300" />
        <a
        href="https://www.instagram.com/rahul_akumar/"
        target="_blank"
        rel="noopener noreferrer"
        class="footer-link"
        >IG</a
      ></div>
      <div class="flex gap-2 items-center">
        <Twitter size="18" class="text-stone-300" />
        <a
        href="https://x.com/rahul_akumar"
        target="_blank"
        rel="noopener noreferrer"
        class="footer-link"
        >X</a
      ></div>
      <div class="flex gap-2 items-center">
        <Mail size="18" class="text-stone-300"/>
        <a
        href="mailto:rahulakumar93@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        class="footer-link"
        >Get in touch</a
      > </div>
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

.section-link:focus, .footer-link:focus {
  @apply ring-1;
}
</style>
