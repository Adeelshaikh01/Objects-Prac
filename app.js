// var itemsArray = [
//     {name:"juice",price:"50", quantity:"3"},
//     {name:"cookie",price:"30", quantity:"9"},
//     {name:"shirt",price:"880", quantity:"1"},
//     {name:"pen",price:"100", quantity:"2"}
// ];
    
// var item1 = itemsArray[0].price * itemsArray[0].quantity;
// var item2 = itemsArray[1].price * itemsArray[1].quantity;
// var item3 = itemsArray[2].price * itemsArray[2].quantity;
// var item4 = itemsArray[3].price * itemsArray[3].quantity;
    
// var allItems = item1 + item2 + item3 + item4;
// document.write("Juice " + item1 + "<br>");
// document.write("Cookie " + item2 + "<br>");
// document.write("Shirt " + item3 + "<br>");
// document.write("Pen " + item4 + "<br>");
// document.write("All Items Total: " + allItems);


// ============================================================


// var userObj = {
// 	name: "adeel",
//   password: "123",
//   age: "23",
//   gender: "male",
//   city: "karachi",
//   country: "Pakistan"
// };

// if("age" in userObj && "country" in userObj){
// document.write("Age and Country property exist in Object" + "<br>")
// }
// else{
// document.write("Properties not found"  + "<br>")
// }

// if("firstName" in userObj == false && "lastName" in userObj == false){
// document.write("firstName and lastName property not exist in Object")
// }
// else{
// document.write("Properties found")
// }


// ============================================================


// function Student_Info(id,name,email,age) {
//     this.name = id;
//     this.name = name;
//     this.email = email;
//     this.age = age;
// }

// var Students = [
// 	new Student_Info(12,"adeel","adeel@gmail.com",23),
//     new Student_Info(13,"hanzilla","hanzilla@gmail.com",18),
//     new Student_Info(14,"sharjeel","sharjeel@gmail.com",20),
//     new Student_Info(14,"abeer","abeer@gmail.com",21),
//     new Student_Info(15,"ahmed","ahmed@gmail.com",24)
// ];


// ============================================================

// function PopulationCheck(name,gender,address,education,profession){
//     this.Name = name;
//     this.Gender = gender;
//     this.Address = address;
//     this.education = education;
//     this.profession = profession;
//   }
  
//   function valueGet(){
//     var userName = document.getElementById("name").value;
//     var userAddress = document.getElementById("address").value;
//     var userEducation = document.getElementById("education").value;
//     var userProfession = document.getElementById("profession").value;
//     var userGender = document.getElementById("genderInfo").value;
    
//     window.localStorage.setItem('Name', userName);
//     window.localStorage.setItem('Address', userAddress);
//     window.localStorage.setItem('education', userEducation);
//     window.localStorage.setItem('profession', userProfession);
//     window.localStorage.setItem('Gender', userGender);

//     var uName = window.localStorage.getItem('Name');
//     var uAdd = window.localStorage.getItem('Address');
//     var uEdu = window.localStorage.getItem('education');
//     var uPro = window.localStorage.getItem('profession');
//     var uGender = window.localStorage.getItem('Gender');
    
//     var pop = new PopulationCheck(uName,uGender,uAdd,uEdu,uPro);
    
//   }

// =========================== Object Data set ===========================

var mobileObject = {
    name: "Apple",
    rom: [64,128,256],
    ram: [4,6],
    color: ["Silver","Graphite","Gold","Pacific Blue"],
    brands: [
        "iPhone 6","iPhone 6 Plus","iPhone 7","iPhone 7 Plus","iPhone 8","iPhone 8 Plus",
        "iPhone X","iPhone XS","iPhone 11","iPhone 11 Pro","iPhone 11 Pro Max",
        "iPhone 12","iPhone 12 Pro","iPhone 12 Pro Max"
    ]
}

console.log(mobileObject.name + " " +mobileObject.brands[10]+" "+mobileObject.rom[1]
            +"gb"+" "+mobileObject.ram[1]+"gb"+" "+mobileObject.color[2]);

  