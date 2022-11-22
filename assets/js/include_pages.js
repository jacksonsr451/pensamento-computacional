let pages_includes = document.getElementsByTagName('pages');

for(var i=0; i<pages_includes.length; i++){
    let include = pages_includes[i];
    load_file(pages_includes[i].attributes.src.value, function(text){
        include.insertAdjacentHTML('afterend', text);
        include.remove();
    });
}

function load_file(filename, callback) {
    fetch(filename).then(response => response.text()).then(text => callback(text));
}
