const students = [
    {id:302, name:'Tonmay Sen'},
    {id:303, name:'Shuvro Dev Srakar'},
    {id:305, name:'Md. Meherab Rahman'},
    {id:308, name:'Shohid Islam'}
]

names_array = []
students.forEach(student => {
    names_array.push(student.name);
});

console.log(names_array);

names = students.map(student => student.name)
ids = students.map(student => student.id)

allIdsAbove303 = students.filter(student => student.id > 303)
console.log(names, ids, allIdsAbove303);