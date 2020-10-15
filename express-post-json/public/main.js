/* eslint-disable no-console */

const $ = window.$;

const form = document.querySelector('form');

const handleSubmit = event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formDataName = formData.get('name');
  const formDataCourse = formData.get('course');
  const formDataGrade = formData.get('grade');
  postForm(formDataName, formDataCourse, formDataGrade);
  // postForm('keenan', 'javascript', 99);
  // console.log(formData);
  // console.log(formDataName);
  // console.log(formDataCourse);
  // console.log(formDataGrade);
  event.target.reset();
};

form.addEventListener('submit', handleSubmit);

const postForm = (name, course, grade) => {
  $.ajax({
    url: '/api/grades',
    method: 'POST',
    data: {
      name: 'keenan',
      course: 'javascript',
      grade: 99
    },
    contentType: false,
    processData: false,
    success: data => {
      console.log('hello:', data);
    },
    error: error => {
      console.error('an error:', error);
    }
  });
};
