const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

const handleSubmit = event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  var formDataName = formData.get('name');
  var formDataCourse = formData.get('course');
  var formDataGrade = formData.get('grade');
  postForm(formDataName, formDataCourse, formDataGrade);
  event.target.reset();
};

const postForm = (name, course, grade) => {
  $.ajax({
    url: '/api/grades',
    method: 'POST',
    data: {
      name: name,
      course: course,
      grade: grade
    },
    success: data => {

    },
    error: error => {
      console.error(error);
    }
  });
};
