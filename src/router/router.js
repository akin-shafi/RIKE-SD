import { createRouter, createWebHistory } from "vue-router";

const ViewPage = () =>
import(
  /* webpackChunkName: "index-page" */ "@/views/ViewIndexPage.vue" //? Entry Point
);
  
const HomePage = () =>
  import(
    /* webpackChunkName: "home-page" */ "@/views/HomePage.vue"
  );
const AboutPage = () =>
  import(
    /* webpackChunkName: "About-page" */ "@/views/AboutPage.vue"
  );

const EventPage = () =>
  import(
    /* webpackChunkName: "Event-page" */ "@/views/EventPage.vue"
  );

const TeamPage = () =>
  import(
    /* webpackChunkName: "Team-page" */ "@/views/TeamPage.vue"
  );

  const CommunityPage = () =>
  import(
    /* webpackChunkName: "Team-page" */ "@/views/CommunityPage.vue"
  );

  const MarketplacePage = () =>
  import(
    /* webpackChunkName: "Team-page" */ "@/views/MarketplacePage.vue"
  );

  const ProfilePage = () =>
  import(
    /* webpackChunkName: "Team-page" */ "@/views/ProfilePage.vue"
  );
  

  const ResearchOutputPage = () =>
  import(
    /* webpackChunkName: "Team-page" */ "@/views/ResearchOutputPage.vue"
  );
  
  
  


const routes = [

  {
    path: "/",
    name: "Index",
    metaTags: {
      title: "Research for Impact, Knowledge, Economy & Sustainable Development",
    },
    component: ViewPage,
    children: [

      {
        path: "/",
        name: "Home",
        component: HomePage,
        meta: {
          title: "Home | RIKE-SD",
          requiresAuth: true,
          metaTags: [
            {
              name: "description",
              content: "Research for Impact, Knowledge, Economy & Sustainable Development.",
            },
            {
              property: "og:description",
              content: "Research for Impact, Knowledge, Economy & Sustainable Development.",
            },
          ],
        },
      },

      {
        path: "/about",
        name: "About",
        component: AboutPage,
        meta: {
          title: "About | RIKE-SD",
          requiresAuth: true,
          metaTags: [
            {
              name: "description",
              content: "Research for Impact, Knowledge, Economy & Sustainable Development.",
            },
            {
              property: "og:description",
              content: "Research for Impact, Knowledge, Economy & Sustainable Development.",
            },
          ],
        },
      },

      {
        path: "/event",
        name: "Event",
        component: EventPage,
        meta: {
          title: "Event | RIKE-SD",
          requiresAuth: true,
          metaTags: [
            {
              name: "description",
              content: "Research for Impact, Knowledge, Economy & Sustainable Development.",
            },
            {
              property: "og:description",
              content: "Research for Impact, Knowledge, Economy & Sustainable Development.",
            },
          ],
        },
      },

      {
        path: "/team",
        name: "Team",
        component: TeamPage,
        meta: {
          title: "Team | RIKE-SD",
          requiresAuth: true,
          metaTags: [
            {
              name: "description",
              content: "Research for Impact, Knowledge, Economy & Sustainable Development.",
            },
            {
              property: "og:description",
              content: "Research for Impact, Knowledge, Economy & Sustainable Development.",
            },
          ],
        },
      },
      {
        path: "/community",
        name: "Community",
        component: CommunityPage,
        meta: {
          title: "Community | RIKE-SD",
          requiresAuth: true,
          metaTags: [
            {
              name: "description",
              content: "Research for Impact, Knowledge, Economy & Sustainable Development.",
            },
            {
              property: "og:description",
              content: "Research for Impact, Knowledge, Economy & Sustainable Development.",
            },
          ],
        },
      },

      {
        path: "/marketplace",
        name: "Marketplace",
        component: MarketplacePage,
        meta: {
          title: "Marketplace | RIKE-SD",
          requiresAuth: true,
          metaTags: [
            {
              name: "description",
              content: "Research for Impact, Knowledge, Economy & Sustainable Development.",
            },
            {
              property: "og:description",
              content: "Research for Impact, Knowledge, Economy & Sustainable Development.",
            },
          ],
        },
      },

      {
        path: "/profile",
        name: "Profile",
        component: ProfilePage,
        meta: {
          title: "Profile | RIKE-SD",
          requiresAuth: true,
          metaTags: [
            {
              name: "description",
              content: "Research for Impact, Knowledge, Economy & Sustainable Development.",
            },
            {
              property: "og:description",
              content: "Research for Impact, Knowledge, Economy & Sustainable Development.",
            },
          ],
        },
      },

      {
        path: "/researchOutput",
        name: "ResearchOutput",
        component: ResearchOutputPage,
        meta: {
          title: "ResearchOutput | RIKE-SD",
          requiresAuth: true,
          metaTags: [
            {
              name: "description",
              content: "Research for Impact, Knowledge, Economy & Sustainable Development.",
            },
            {
              property: "og:description",
              content: "Research for Impact, Knowledge, Economy & Sustainable Development.",
            },
          ],
        },
      },

      {
        path: "/:catchAll(.*)",
        component: () => import("@/components/NotFound.vue"),
        meta: {
          title: "Error 404 | RIKE-SD",
          metaTags: [
            {
              name: "description",
              content: "The error 404 page of RIKE-SD.",
            },
            {
              property: "og:description",
              content: "The error 404 page of RIKE-SD.",
            },
          ],
        },
      },
      
     
      // CommunityContent.vue'
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return {
        savedPosition,
        behavior: "smooth",
      };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;

router.beforeEach((to, from, next) => {
  /* ---------------------------------------------//? SEO Friendly META -------------------------------------------- */

  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  // if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    (el) => el.parentNode.removeChild(el)
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag));

  next();
});
