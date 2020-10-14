/* global $ */
/* eslint-disable no-console */

// ajax call to get api data
$.ajax({
  url: '/api/grades',
  method: 'GET',
  success: function (data) {
    console.log(data);
    renderStuff(data);
  },
  error: function (data) {
    console.error(data);
  }
});

// experimental code to render the returned data to the DOM
const renderStuff = data => {
  const ajaxData = document.getElementById('ajaxData');

  data.forEach(element => {
    for (const keys in element) {
      const info = document.createElement('p');
      info.textContent = `${keys}: ${element[keys]}`;
      ajaxData.append(info);
    }
  });
};
