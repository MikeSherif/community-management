import {
    RouterProvider,
    createRouter,
    createRootRoute,
    createRoute,
    Outlet,
} from "@tanstack/react-router";
import { ROUTES } from "@/app/router/routes";

import { AppLayout } from "@/app/layouts";

import Dashboard from "@/pages/dashboard";
import Login from "@/pages/login";
import MyApplications from "@/pages/my-applications";
import Account from "@/pages/account";
import Documents from "@/pages/documents";
import Concierge from "@/pages/concierge";
import Polls from "@/pages/polls";
import Profile from "@/pages/profile";
import Contacts from "@/pages/contacts";
import NotFound from "@/pages/404";
import { fetchMockApplications } from "@/pages/my-applications/model/applicationsStore.js";

const normalizePath = (path) => {
    if (path === "/" || path === "*") return path;
    return path.replace(/^\//, "");
};

const rootRoute = createRootRoute({
    component: () => <Outlet />,
    loader: async () => null,
});

const appLayoutRoute = createRoute({
    getParentRoute: () => rootRoute,
    id: "app-layout",
    component: AppLayout,
    loader: async () => null,
});

const dashboardRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: normalizePath(ROUTES.dashboard.path),
    component: Dashboard,
    loader: async () => null,
});

const applicationsRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: normalizePath(ROUTES.applications.path),
    component: MyApplications,
    loader: async () => fetchMockApplications(),
});

const accountRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: normalizePath(ROUTES.account.path),
    component: Account,
    loader: async () => null,
});

const documentsRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: normalizePath(ROUTES.documents.path),
    component: Documents,
    loader: async () => null,
});

const conciergeRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: normalizePath(ROUTES.concierge.path),
    component: Concierge,
    loader: async () => null,
});

const pollsRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: normalizePath(ROUTES.polls.path),
    component: Polls,
    loader: async () => null,
});

const profileRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: normalizePath(ROUTES.profile.path),
    component: Profile,
    loader: async () => null,
});

const contactsRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: normalizePath(ROUTES.contacts.path),
    component: Contacts,
    loader: async () => null,
});

const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: normalizePath(ROUTES.login.path),
    component: Login,
    loader: async () => null,
});

const notFoundRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: normalizePath(ROUTES.notFound.path),
    component: NotFound,
    loader: async () => null,
});

const routeTree = rootRoute.addChildren([
    appLayoutRoute.addChildren([
        dashboardRoute,
        applicationsRoute,
        accountRoute,
        documentsRoute,
        conciergeRoute,
        pollsRoute,
        profileRoute,
        contactsRoute,
    ]),
    loginRoute,
    notFoundRoute,
]);

const router = createRouter({
    routeTree,
    basepath: import.meta.env.BASE_URL,
});

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
