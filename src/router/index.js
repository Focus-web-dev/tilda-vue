import { createRouter } from 'vue-router';

const routes = [
    {
        path: "/",
        name: "Projects",
        component: () => import('../pages/ProjectsView'),
    },
    {
        path: "/profile",
        name: "Profile",
        component: () => import('../pages/ProfilePage'),
    },
    {
        path: "/project/:projectId",
        name: "ProjectPages",
        params: { projectId: 'public' },
        component: () => import('../pages/ProjectPagesView'),
    },
    {
        path: "/project/:projectId/edit/:pageId",
        name: "EditPage",
        params: { pageId: 'public' },
        component: () => import('../pages/EditPage'),
    },
    {
        path: "/project/:projectId/preview/:pageId",
        name: "PreviewPage",
        component: () => import('../pages/PreviewPage'),
    }
];

const router = createRouter({
    routes,
})

export default router;