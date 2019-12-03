const users = [
    { id: 1, name: 'John', age: 22,  gender: 'm' },
    { id: 2, name: 'Ellis', age: 46, gender: 'f'},
    { id: 3, name: 'Sara', age: 33, gender: 'f'},
    { id: 4, name: 'Will', age: 30, gender: 'm'},
    { id: 5, name: 'Jane', age: 35, gender: 'f'},
    { id: 6, name: 'Mike', age: 52, gender: 'm'},
  ];
//example function that 
function idsOnly(users){
    var ids = users.map(function(user){
        return user.id;
    });
    return ids;
}
//Question 1

function malesOnly(users){
    var males = users.filter(function(male){
        if(male.gender == 'm')
        return male.name, male.age;
    });
    return males;
}
//Question 2

function onlyNamesThatStartWithJ(users){
    var femJ = users.filter(function(fem){
        if(fem.name.charAt(0) == 'J' && (fem.gender == 'f'))
            return fem.name;
    });
    return femJ;
}
//Question 3
function femalesOverThirty(users){
    var fem30 = users.filter(function(fem){
        if(fem.age > 30 && (fem.gender == 'f'))
            return fem.name;
    });
    return fem30;
}