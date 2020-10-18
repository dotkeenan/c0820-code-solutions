/* eslint-disable no-console */
// code to get rid of eslint error of $ not being defined.  Unnecessary
const $ = window.$;
const form = document.querySelector('form');
const tbody = document.querySelector('tbody');

form.addEventListener('submit', handleSubmit);
// Run at load in order to render current api data to DOM
getData();

// Get data from inputs after submit is clicked, and run postForm.
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formDataName = formData.get('name');
  const formDataCourse = formData.get('course');
  const formDataGrade = formData.get('grade');

  postForm(formDataName, formDataCourse, formDataGrade);
  event.target.reset();
}

// Post the form's data to the API.  On success, run getData() and clear
// the tbody to render the API data again on the DOM.
const postForm = (name, course, grade) => {
  $.ajax({
    url: '/api/grades',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      name: name,
      course: course,
      grade: grade
    }),
    success: dataPostSucc
  });
};

// get the newly updated API data and clear the tbody
function dataPostSucc() {
  getData();
  tbody.innerHTML = '';
}

// get data from the API and run getDataSuccess(data) on success.
function getData() {
  $.ajax({
    url: 'http://localhost:3000/api/grades',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    success: data => {
      getDataSuccess(data);
      console.log('current student data:', data);
    },
    error: getDataError
  });
}

// for each element in the array (individual students' data),
// render the dom corresponding to the element at the current iteration.
function getDataSuccess(data) {
  // both work
  // data.map(x => {
  //   table.append(renderDom(x));
  // });
  data.forEach(element => {
    tbody.append(renderDom(element));
  });
}

function getDataError(error) {
  console.error(error);
}

// function that creates elements and renders the tbody to the DOM
function renderDom(data) {

  const row = document.createElement('tr');
  const nameTd = document.createElement('td');
  const idTd = document.createElement('td');
  const courseTd = document.createElement('td');
  const gradeTd = document.createElement('td');

  nameTd.textContent = data.name;
  idTd.textContent = data.id;
  courseTd.textContent = data.course;
  gradeTd.textContent = data.grade;

  row.append(nameTd, idTd, courseTd, gradeTd);
  return row;
}
