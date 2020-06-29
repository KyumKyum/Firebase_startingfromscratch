const dbList = document.querySelector('#list');

//create elements & render the list
function renderList(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('city');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;

    li.appendChild(name);
    li.appendChild(city);

    dbList.appendChild(li);

}


db.collection('cafe').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
            renderList(doc);
    });
})