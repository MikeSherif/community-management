import { Helmet } from "react-helmet-async";
import { useRouterState } from "@tanstack/react-router";
import { ROUTES } from "../router/routes";

const getRouteRegex = (path) => {
    if (path === "*") return null;
    const pattern = path.replace(/\$[^/]+/g, "[^/]+");
    return new RegExp(`^${pattern}$`);
};

const SeoProvider = () => {
    //Реализованный провайдер для автоматической установки title, description и т.д (SEO)
    const pathname = useRouterState({
        select: (state) => state.location.pathname,
    });

    const routeCandidates = Object.values(ROUTES)
        .filter((routeItem) => routeItem.path !== "*")
        .sort((first, second) => second.path.length - first.path.length);

    const route = routeCandidates.find((routeItem) => {
        const regex = getRouteRegex(routeItem.path);
        return regex?.test(pathname);
    });

    const seo = route?.seo || ROUTES.notFound.seo;

    return (
        <Helmet>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
        </Helmet>
    );
};

export default SeoProvider;
