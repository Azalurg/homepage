// Asynchronously fetch JSON data
const fetchJSON = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Failed to fetch data from ${url}:`, error);
        throw error;
    }
};

// Initialize and render the bookmarks
const renderBookmarks = async () => {
    try {
        const [routes, config] = await Promise.all([
            fetchJSON("../data/routes.json"),
            fetchJSON("../data/config.json")
        ]);

        const target = config.newPageOpen ? "_blank" : "_self";
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
    } catch (error) {
        console.error('Error rendering bookmarks:', error);
        const bookmarksContainer = document.getElementById("bookmarks");
        bookmarksContainer.innerHTML = `<p>Error loading bookmarks. Please try again later.</p>`;
    }
};

// Call the function to render bookmarks
renderBookmarks();
