var name = 'karthik';
var age =  22;
var isStudent = true;

function userInfo(username, userage, studentStatus){
    return ('name : '+ username + ', age : ' + userage + ', is Student : ' + studentStatus);

};

console.log(userInfo(name, age, isStudent));