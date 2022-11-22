let partials_includes = document.getElementsByTagName('partials');

for(var i=0; i<partials_includes.length; i++){
    let include = partials_includes[i];
    load_file(partials_includes[i].attributes.src.value, function(text){
        include.insertAdjacentHTML('afterend', text);
        include.remove();
    });
}

function load_file(filename, callback) {
    fetch(filename).then(response => response.text()).then(text => callback(text));
}