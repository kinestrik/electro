import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)",
      name: "NotFound",
      component: () => import("../components/layouts/AppError.vue"),
    },
    {
      path: "/nds",
      name: "nds",
      component: () => import("../components/layouts/UnErr.vue"),
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: () => import("../views/Forms/SignUp.vue"),
    },
    {
      path: "/check-email",
      name: "check-email",
      component: () => import("../views/Forms/CheckEmail.vue"),
    },

    {
      path: "/login",
      name: "login",
      component: () => import("../views/Forms/Login.vue"),
    },
    {
      path: "/enter-email",
      name: "enter-email",
      // Enter Email
      component: () => import("../views/Forms/ChangePasswordEmail.vue"),
    },
    {
      path: "/enter-code",
      name: "enter-code",
      // Enter Code
      component: () => import("../views/Forms/CheckEmail.vue"),
    },
    {
      path: "/new-password",
      name: "new-password",
      // Enter Code
      component: () => import("../views/Forms/ChangePassword.vue"),
    },
    {
      // Примеры работ
      path: "/examples",
      name: "examples",
      component: () => import("../views/Exemples/ExemplesPage.vue"),
    },
    {
      // Страница примера работы
      path: "/examples/:id",
      name: "example",
      component: () => import("../views/Exemples/ItemPage2.vue"),
    },
    {
      // Профиль
      path: "/profile",
      name: "profile",
      component: () => import("../views/Profile/ProfilePage.vue"),
    },
    {
      // Форма обратной связи
      path: "/feedback",
      name: "feedback",
      component: () => import("../views/other/feedback.vue"),
    },
    {
      // Добавление примера
      path: "/add-ex",
      name: "add-ex",
      component: () => import("../views/Exemples/AddExWork.vue"),
    },
    {
      // Добавление примера
      path: "/edit-ex/:id",
      name: "edit-ex",
      component: () => import("../views/Exemples/EditExWork.vue"),
    },
    // {
    //   // Редактирование примера
    //   path: '/add-ex',
    //   name: 'add-ex',
    //   component: () => import('../views/Exemples/AddExWork.vue')
    // },
    {
      path: "/forum-que",
      name: "forum-que",
      component: () => import("../views/Forum/ForumQuePage.vue"),
    },
    {
      path: "/forum-state",
      name: "forum-state",
      component: () => import("../views/Forum/ForumStatePage.vue"),
    },
    {
      path: "/add-forum-q",
      name: "add-forum-q",
      component: () => import("../views/Forum/AddQueForum.vue"),
    },
    {
      path: "/edit-forum-q/:id",
      name: "edit-forum-q",
      component: () => import("../views/Forum/EditQueForum.vue"),
    },
    {
      path: "/add-forum-s/",
      name: "add-forum-s",
      component: () => import("../views/Forum/AddStateForum.vue"),
    },
    {
      path: "/edit-forum-s/:id",
      name: "edit-forum-s",
      component: () => import("../views/Forum/EditStateForum.vue"),
    },
    {
      path: "/que/:id",
      name: "que",
      component: () => import("../views/Forum/Question.vue"),
    },
    {
      path: "/state/:id",
      name: "state",
      component: () => import("../views/Forum/State.vue"),
    },
    {
      path: "/add-ans/:id",
      name: "add-ans",
      component: () => import("../views/Forum/AddAnswer.vue"),
    },
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomePage/Head.vue"),
    },
    {
      path: "/services",
      name: "services",
      component: () => import("../views/services/Services.vue"),
    },
    {
      path: "/service/:name",
      name: "service",
      component: () => import("../views/services/ItemService.vue"),
    },
  ],
});

export default router;
