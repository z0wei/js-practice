function makeUser() {
  return {
    name: "John",
    ref: this
  };
} 

let user = makeUser();

alert( user.ref.name ); // Ошибка так как this === undefained