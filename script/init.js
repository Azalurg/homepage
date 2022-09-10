import data from "../data/routes.json" assert {type: 'json'}

let content = "";
console.log(data);
for (let category in data) {
    content +=  `<div class="category">\n\t<li class="title">> ${data[category].title}</li>\n`;
    const keys = Object.keys(data[category].href)
    for(let key in keys) {
        content += `\t<li><a href="${data[category].href[keys[key]]}">${keys[key]}</a></li>\n`;
    }
    content += "</div>"
}

document.getElementById("bookmarks").innerHTML = content;