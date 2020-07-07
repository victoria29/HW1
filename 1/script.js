var elem = null;

function checkSelectedItem() {
    var items = document.getElementsByTagName('li');
    for(i = 0; i < items.length; i++){
        items[i].style.color = "";
    }
}

function chooseFirst() {
    checkSelectedItem();
    var firstItem = document.getElementById("List").firstElementChild;
    firstItem.style.color = "red";
}

function chooseLast() {
    checkSelectedItem();
    var item = document.getElementById("List").lastElementChild;
    item.style.color = "red";
}

function nextSblng() {
    checkSelectedItem();

    if(elem == null){
        var list = document.getElementById('List');
        elem = list.firstElementChild;
        elem.style.color = "blue";
        return;
    }
    elem = elem.nextElementSibling;
    if(elem != null){
        elem.style.color = "blue";
    }
}

function prevSblng() {
    checkSelectedItem();

    if(elem == null){
        var list = document.getElementById('List');
        elem = list.lastElementChild;
        elem.style.color = "blue";
        return;
    }
    elem = elem.previousElementSibling;
    if(elem != null){
        elem.style.color = "blue";
    }
}
function append() {
    var newItem = document.createElement("li");
    newItem.innerText = "New Item";
    document.getElementById("List").appendChild(newItem);
}

function remove() {
    var lastItem = List.lastChild;// по Id списка
    lastItem.parentNode.removeChild(lastItem);
}

function insrtBefore() {
    var newItem = document.createElement("li");
    var textnode = document.createTextNode("New Item");
    newItem.appendChild(textnode);

    var list = document.getElementById("List");
    list.insertBefore(newItem, list.childNodes[0]);
}