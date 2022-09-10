const modules = ["search"]

function loadHTML(target) {
    const text = fetch(`../modules/${target}/${target}.html`).then(response => response.text())
    return Promise.resolve(text)
}

console.log(await loadHTML("search"));

let content = "";

for (let module in modules){
    const text = await loadHTML(modules[module])
    content += text
}

document.getElementById("terminal").innerHTML = content