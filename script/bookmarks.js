import config from './config.js';

const {general, routes} = config;

function renderBookmarks() {
    const target = general.newPageOpen ? "_blank" : "_self";
    const bookmarksContainer = document.getElementById("bookmarks");
    let content = "";

    for (const category in routes) {
        const categoryData = routes[category];
        content += `<ul class="category">\n\t<li class="title">> ${categoryData.title}</li>\n`;

        Object.entries(categoryData.href).forEach(([key, href]) => {
            content += `\t<li><a href="${href}" target="${target}">${key}</a></li>\n`;
        });

        content += "</ul>";
    }

    bookmarksContainer.innerHTML = content;
};

export default renderBookmarks;
