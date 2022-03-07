// root/js/democlass.js

fetch('json/courses.json')
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
    coursesDropdownUl = document.getElementById('dropdown-content-democlass');
    for (let index = 0; index < data.length; index++) {
        let coursesDropdowna = document.createElement('a');
        coursesDropdowna.className = 'pointer'
        coursesDropdownUl.appendChild(coursesDropdowna).innerHTML = `${data[index].Name}`;
    }
    let dropdown = document.getElementById('dropdown-content-democlass');
    // console.log(dropdown.childNodes[0])
    for (let index = 0; index < dropdown.childElementCount - 1; index++) {
        dropdown.childNodes[index].addEventListener('click', setText);
    }
}

function setText(e) {
    let dropdown = document.getElementById('dropbtn');
    dropdown.innerText = e.target.text

    let content = document.getElementById('content');
    let result = coursedata.filter(obj => {
        return obj.Name === e.target.text
    })
    content.innerHTML = `<h1>${result[0].Name}</h1>
                        <h2>${result[0].Desc}</h2>
                        <h3>${result[0].Cost}</h3>
                        <h4>By:- ${result[0].professorName}</h4>`;
    // coursesDropdownUl.style.display = 'none';
    // coursesDropdownUl.style = 'none';
};