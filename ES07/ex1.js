// 1a
const user = {};
console.log(user);
// 1b
user.name = 'John';

// 1c
user.surname = 'Smith';
console.log(user);

// 1d
user.name = 'Pete';

// 1e
delete user.name;
console.log(user);
