var the_hour=new Date();
var hour=the_hour.getHours();
console.log(hour);
var result=(hour>=5&& hour<=11)?"Good Morning 🌄":(hour>=12&&hour<=17)?"Good AfterNoon 😎":(hour>=18&&hour<=21)?"Good Evening 🌇":(hour>=22&&hour<=24)?"Good Night 🌆":(hour>=0&&hour<=4)?"Good Night 🌆":"Invaild Time ❌";
console.log(result);