let consoleObj = localStorage.getItem('person');

let data = JSON.parse(consoleObj);
console.log(data.name);