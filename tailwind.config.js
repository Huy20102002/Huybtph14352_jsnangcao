module.exports = {
    content: ["*.html", "./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
    plugins: [
        // eslint-disable-next-line global-require
        require("tw-elements/dist/plugin"),
    ],
    theme: {
        screens: {
            tablet: "640px",
            // => @media (min-width: 640px) { ... }

            laptop: "1024px",
            // => @media (min-width: 1024px) { ... }

            desktop: "1280px",
            // => @media (min-width: 1280px) { ... }
        },
        extend: {
            height: {
                600: "34rem",
            },
        },
    },
};