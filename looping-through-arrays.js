const pets =['cat', 'dog', 'rat']
for (let i = 0; i < 3; i++) {
    //en dessous is a function, for the loop to be put in {}
    pets[i] = pets[i] + 's'
  }
console.log(pets)