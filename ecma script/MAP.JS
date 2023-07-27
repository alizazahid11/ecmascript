//Q1
function mapToSquare(arr) {
    return arr.map(num => num * num);
  }
  
  const nums = [1, 2, 3, 4, 5];
  const squaredMap = mapToSquare(nums);
  console.log(squaredMap);
  
  //Q2
  function mapNameToAge(arr) {
    const nameToAgeMap = {};
  
    for (const obj of arr) {
      nameToAgeMap[obj.name] = obj.age;
    }
  
    return nameToAgeMap;
  }
  const people = [
    { name: 'Aliza', age: 22 },
    { name: 'ali', age: 23 },
    { name: 'mahi', age: 22 }
  ];
  const nameToAgeMap = mapNameToAge(people);
  console.log(nameToAgeMap);
 
 //Q3
 function hasKey(map, key) {
    return key in map;
  }
  const myMap = {
    name: 'Alice',
    age: 30
  };
  
  console.log(hasKey(myMap, 'name')); 
  console.log(hasKey(myMap, 'gender'));
   
 //Q5
 function mergeMaps(map1, map2) {
    const mergedMap = new Map([...map1, ...map2]);
    return mergedMap;
  }
  const map1 = new Map();
  map1.set('name', 'Aliza');
  map1.set('age', 22
  );
  
  const map2 = new Map();
  map2.set('name', 'zahid');
  map2.set('gender', 'male');
  
  const merged = mergeMaps(map1, map2);
  console.log(merged);
  
