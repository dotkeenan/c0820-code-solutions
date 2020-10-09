const library = [
  {
    isbn: 1234567890,
    title: 'Ready Player One',
    author: 'Ernest Cline'
  },
  {
    isbn: 9876543210,
    title: 'Ready Player Two',
    author: 'Ernest Cline 9 years older'
  },
  {
    isbn: 2468013579,
    title: 'Ready Player Three',
    author: 'Ernest Cline 18 years older'
  }
];

console.log('library value:', library);
console.log('typeof library:', typeof library);

const libraryStringified = JSON.stringify(library);
console.log('JSON string of library:', libraryStringified);

const student1 = '{"id":12345, "name":"Wade Watts"}';
console.log('student1:', student1);
console.log('typeof student1:', typeof student1);

const parsedStudent1 = JSON.parse(student1);
console.log('student1 parsed:', parsedStudent1);
console.log('typeof parsedStudent1:', typeof parsedStudent1);
