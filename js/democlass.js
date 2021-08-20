let dropdownItem = document.getElementsByClassName('dropdown-item');
// dropdownItem[0].addEventListener('click', setText);

fetch('courses.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        coursedata = data;
        courses(data);
    })
    .catch(function(err) {
        console.log('Error: ' + err)
    });

function courses(data) {
    let coursesDropdownUl = document.getElementById('courses-dropdown-ul');
    for (let index = 0; index < data.length; index++) {
        let coursesDropdownLi = document.createElement('li');
        coursesDropdownUl.appendChild(coursesDropdownLi);

        let coursesDropdownUla = document.createElement('a');
        coursesDropdownUla.className = 'dropdown-item pointer';
        coursesDropdownLi.appendChild(coursesDropdownUla).innerHTML = `${data[index].Name}`;
    }
    for (let index = 0; index < dropdownItem.length; index++) {
        dropdownItem[index].addEventListener('click', setText);
    }
}

function setText(e) {
    console.log(e.target.name)
    let dropdown = document.getElementById('dropdownMenuButton1');
    dropdown.innerText = e.target.text

    let content = document.getElementById('content');
    let result = coursedata.filter(obj => {
        return obj.Name === e.target.text
    })
    content.innerHTML = `<h2>${result[0].Name}</h2>
                        <h3>${result[0].Desc}</h3>
                        <h4>${result[0].Cost}</h4>
                        <h5>By:- ${result[0].professorName}</h5>`;
};