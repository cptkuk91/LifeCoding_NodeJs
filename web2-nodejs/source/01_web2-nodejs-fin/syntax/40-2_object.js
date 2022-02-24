/*
var members = ['egoing', 'k8805', 'hoya'];
console.log(members[1]);

var i = 0;
while(i < members.length) {
  console.log('array loop', members[i]);
  i = i + 1;
}
*/

var roles = {
    'programmer':'egoing',
    'designer':'k8805',
    'manager':'hoya'
}
console.log(roles.designer);
console.log(roles['designer']);

for(job in roles){
  console.log("key", job);
}

console.log('------------------------')

for(let coca in roles){
  console.log('key', coca, 'value', roles[coca]);
}
