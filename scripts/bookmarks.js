import data from "../data/routes.json" assert {type: 'json'}
import config from "../data/config.json" assert {type: 'json'}

let content = "";
let target = "_self";
if(config.newPageOpen){
    target = "_blank";
}

for (let category in data) {
    content +=  `<ul class="category">\n\t<li class="title">> ${data[category].title}</li>\n`;
    const keys = Object.keys(data[category].href)
    for(let key in keys) {
        content += `\t<li><a href="${data[category].href[keys[key]]}" target="${target}">${keys[key]}</a></li>\n`;
    }
    content += "</ul>"
}

document.getElementById("bookmarks").innerHTML = content;