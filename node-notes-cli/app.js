/* eslint-disable no-console */

/* Make a switch case to handle which module should run when user
enters a command in the terminal
 */

const read = require('./read.js');
const create = require('./create.js');
const deleteNote = require('./delete.js');
const update = require('./update.js');
const action = process.argv[2];

switch (action) {
  case 'read':
    read();
    break;
  case 'create':
    create();
    break;
  case 'delete':
    deleteNote();
    break;
  case 'update':
    update();
    break;
  default:
    console.log('invalid action');
}
