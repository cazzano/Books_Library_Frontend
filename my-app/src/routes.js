import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Books from "./components/Books.vue";
import Contact from "./components/Contact.vue";

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "Home | Al-Baraka Islamic Center",
      description:
        "Welcome to Al-Baraka - Your source for Islamic knowledge and spiritual guidance",
      keywords: "Islamic center, spiritual guidance, Islamic knowledge",
    },
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: "About Us | Al-Baraka Islamic Center",
      description:
        "Learn about Al-Baraka Islamic Center, our mission and services",
      keywords: "Islamic center history, our mission, Al-Baraka foundation",
    },
  },
  {
    path: "/books",
    component: Books,
    meta: {
      title: "Islamic Books | Al-Baraka Islamic Center",
      description:
        "Browse our collection of Islamic books, manuscripts and educational resources",
      keywords: "Islamic books, Quran, Hadith, Fiqh, Islamic manuscripts",
    },
  },
  {
    path: "/contact",
    component: Contact,
    meta: {
      title: "Contact Us | Al-Baraka Islamic Center",
      description:
        "Get in touch with Al-Baraka Islamic Center for inquiries and assistance",
      keywords: "contact islamic center, Al-Baraka contact information",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Update meta tags on route change
router.beforeEach((to, from, next) => {
  // Update the page title
  document.title = to.meta.title || "Al-Baraka Islamic Center";

  // Find and update the description meta tag
  let descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute(
      "content",
      to.meta.description || "Al-Baraka Islamic Center",
    );
  } else {
    descriptionMeta = document.createElement("meta");
    descriptionMeta.name = "description";
    descriptionMeta.content = to.meta.description || "Al-Baraka Islamic Center";
    document.head.appendChild(descriptionMeta);
  }

  // Find and update the keywords meta tag
  let keywordsMeta = document.querySelector('meta[name="keywords"]');
  if (keywordsMeta) {
    keywordsMeta.setAttribute("content", to.meta.keywords || "");
  } else {
    keywordsMeta = document.createElement("meta");
    keywordsMeta.name = "keywords";
    keywordsMeta.content = to.meta.keywords || "";
    document.head.appendChild(keywordsMeta);
  }

  next();
});

export default router;
