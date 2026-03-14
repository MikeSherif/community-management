import { Helmet } from "react-helmet-async";
import { useRouterState } from "@tanstack/react-router";
import { ROUTES } from "../router/routes";

const SeoProvider = () => {
    //Реализованный провайдер для автоматической установки title, description и т.д (SEO)
    const pathname = useRouterState({
        select: (state) => state.location.pathname,
    });

    const route = Object.values(ROUTES).find(
        (r) => r.path === pathname || (r.path !== "/" && pathname.startsWith(r.path))
    );

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
