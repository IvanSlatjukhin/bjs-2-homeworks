function compareArrays(arr1, arr2) {
  if (arr1.length === arr2.length)
    return arr1.every((element, index) => element === arr2[index]);
  else return false;
}

function getUsersNamesInAgeRange(users, gender) {
  return users
    .filter(user => user.gender === gender)
    .map(student => student.age)
    .reduce((summ, userAge, index, array) => {
        if(index === array.length - 1) {
            return (summ + userAge) / array.length;
        }
        return summ + userAge;
    }, 0);
}