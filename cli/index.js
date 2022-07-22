// Available commands 

// search 

// Content creator
var data = ""

document.querySelector('.js-form')?.addEventListener('submit', e => {
    e.preventDefault();
    let command = "";
    let rest = "";

    if (searchValue.value.indexOf(" ") > 0){
        command = searchValue.value.substring(0, searchValue.value.indexOf(" "));
        rest = searchValue.value.substring(searchValue.value.indexOf(" ")+1);
    } else {
        command = searchValue.value;
        rest = "";
    }
    
    data += `\n~/homepage > ${searchValue.value}`
    
    switch (command) {
        case 'search':
            window.open(`https://duckduckgo.com/?q=${rest}`, "_self");
            break;
        case 'clear':
            data = "";
            break;
        case 'cls':
            data = "";
            break;
        case 'date':
            data += `\n${new Date().toLocaleString('pl-PL')}`;
            break;
        default:
            data += `\ncommand not found: ${command}`
    }

    content.innerText = data;
    searchValue.value = ""
  });

// Background
body.style.backgroundImage = `url(https://picsum.photos/1920/1080?random=1)`;