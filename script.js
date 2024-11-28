var x = 5;
var y = 3;

// console.log("x+y", x + y);//8
// console.log("x-y", x - y);//2
// console.log("x*y", x * y);//15
// console.log("x/y", x / y);//1.666666667
// console.log("x%y", x % y);//2

// console.log("++x =", ++x);//6
// console.log("x++ =", x++);//6
// console.log("x = ", x);//7

// console.log("--x =", --x);//6
// console.log("x-- =", x--);//6
// console.log("x = ", x);//5

// console.log("x**y", x ** y);//125

// console.log(2==2); //true
// console.log(2=='2')// true

// console.log(3!=2)// true
// console.log('hello' != 'Hello');//true

// console.log(2===2);//true
// console.log(2==='2');//false

// console.log(2!=='2');//true
// console.log(2!==2);//false

// console.log(true && true);// true
// console.log(true && false);//false

// console.log(true || false);//true
// console.log (!true);//false

// console.log("hello" + "world");//Helloworld

// var a = "JavaScript";

// a+="tutorial";
// console.log(a);//JavaScriptturorial

// var value1 = "one";
// var value2 = "two";

// console.log(value1);
// console.log(value2);

// var swp = value1;
// value1 = value2;
// value2 = swp;

// console.log("luc sau");

// console.log(value1);
// console.log(value2);

// function kq(r){
//     var s = 2 * r**2;
//     return s;
// };

// var rs = kq(7);
// console.log(rs);

// function reverse(string){
//     var tmp = string;
//     var rvs = string.split("").reverse().join("");
//     return rvs === tmp;
// }

// var rs = reverse('test');
// console.log(rs);

// console.log(typeof "le van a");//string
// console.log(typeof 5000);// number
// console.log(typeof 500.99);//number
// console.log(typeof [10, 15, 17]);//object
// console.log(typeof {name: "le van a", age: 18, country: "viet nam"});// object

// console.log((typeof true));//boolean
// console.log(typeof false);// boolean
// console.log(typeof undefined);//undefined
// console.log(typeof null);//object

// var img= "<https://cdn.daca.vn/media/blog/lap-trinh/js%20tips%20-%20m%E1%BB%99t%20s%E1%BB%91%20c%C3%A1ch%20vi%E1%BA%BFt%20js%20ng%E1%BA%AFn%20g%E1%BB%8Dn%20h%C6%A1n.png>";

// var title = "hello";

// var desc = "hom nay dep troi";

// var url = "<https:..>"

// var string = `
//     <div class="article">
//         <a href="${url}">
//             <div class="inner-image">
//                 <img src="${img}"/>
//             </div>
//             <div class = "inner-content">
//                 <h2 class= "inner-title">${title}</h2>
//                 <p class="inner-desc">${desc}</p>
//             </div>
//         </a>
//     </div>
// `;
// console.log(string);

// var a = "100";
// var b = 20;
// var c = true;
// console.log(+a +b +c);//121
// 	console.log(+a + b + c);
// Trả về: 121
// Giải thích:
// +a: có dấu cộng ở trước biến a thì JS sẽ chuyển string "100" thành số 100
// b: 20
// c: là kiểu boolean, nếu c = true tương đương với 1, nếu c = false tương đương với 0

// var a = 10;
// a=a+20;
// console.log(a);

// a= a+70;
// console.log(a);

// a+=100;
// console.log(a);

// a-=50;
// console.log(a);

// a/=50;
// console.log(a);

var a = 10;
var b = "20";
var c = 80;

var test1 = ++a + +b++ + +c++ - +a++;
console.log(test1);
console.log(a, b, c);
console.log("----------------");

//Kết quả test1: 11 + (+20) + (+80) - (+11) = 100
// Kết quả a, b, c:
// a = 12
// b = 21
// c = 81

var test2 = ++a + -b + +c++ - -a++ + +a;
console.log(test2);
console.log(a, b, c);
console.log("----------------");

// •	//Kết quả test2: 13 + (-21) + (+81) - (-13) + (+14) = 100
// •	// Kết quả a, b, c:
// •	// a = 14
// •	// b = 21
// •	// c = 82

var test3 = --c + +b + --a * +b++ - +b * a + --a - +true;

console.log(test3);
console.log(a, b, c);
console.log("---------------");

// •	//Kết quả test3: 81 + (+21) + 13 * (+21) - (+22) * 13 + 12 - (+1) = 100
// •	// Kết quả a, b, c:
// •	// a = 12
// •	// b = 22
// •	// c = 81

// console.log(Math.round(99.2));

// console.log(Math.round(99.5));

// console.log(Math.ceil(99.2));

// console.log(Math.floor(99.9));

// console.log(Math.min(10, 20, 100, -100, 90));

// console.log(Math.max(10, 20, 100, -100, 90));

// console.log(Math.pow(2, 4));

// console.log(Math.random());

// console.log(Math.trunc(99.5));

// var theName = "  28Tech  ";

// console.log(theName); // "  28Tech  "
// console.log(theName[1]); // " "
// console.log(theName[5]); // "e"

// console.log(theName.charAt(1)); // " "
// console.log(theName.charAt(5)); // "e"

// console.log(theName.length); // 10

// console.log(theName.trim()); // "28Tech"

// console.log(theName.toUpperCase()); // "  28TECH  "
// console.log(theName.toLowerCase()); // "  2tech  "

// console.log(theName.trim().charAt(5).toUpperCase()); // "H"

// var a = "Daca.vn - Professional Web Design Services.";

// console.log(a.indexOf("Web")); // 23
// console.log(a.indexOf("Web", 24)); // -1
// console.log(a.indexOf("vn")); // 5

// console.log(a.lastIndexOf("Design")); // 27

// console.log(a.slice(10, 22)); // Professional
// console.log(a.slice(-2, -1)); // s

// console.log(10 == "10"); // true
// console.log(-100 == "-100"); // true
// console.log(10 != "10"); // false

// console.log(10 === "10"); // false
// console.log(10 !== "10"); // true
// console.log(10 !== 10); // false

// console.log(10 > 20); // false
// console.log(10 > 10); // false
// console.log(10 >= 10); // true

// console.log(10 < 20); // true
// console.log(10 < 10); // false
// console.log(10 <= 10); // true

// console.log(typeof "Daca.vn" === typeof "Nam Dang"); // true

// console.log(true); // true

// console.log(!true); // false

// console.log(!(10 == "10")); // false

// console.log(10 == "10" && 10 > 8 && 10 > 50); // false

// console.log(10 == "10" || 10 > 80 || 10 > 50); // true




	const myFriends1 = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];
	
	myFriends1.unshift("Vu Van E", "Nguyen Van F");
	console.log(myFriends1);
	/*
o	[
o	  "Vu Van E",
o	  "Nguyen Van F",
o	  "Le Van A",
o	  "Nguyen Thi B",
o	  "Do Van C",
o	  "Dao Thi D"
o	]
o	*/
	
	const myFriends2 = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];
	
	myFriends2.push("Vu Van E", "Nguyen Van F");
	console.log(myFriends2);
	/*
o	[
o	  "Le Van A",
o	  "Nguyen Thi B",
o	  "Do Van C",
o	  "Dao Thi D",
o	  "Vu Van E",
o	  "Nguyen Van F"
o	]
o	*/

	const myFriends3 = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];
	
	myFriends3.shift();
	console.log(myFriends3);
	/*
o	[
o	  "Nguyen Thi B",
o	  "Do Van C",
o	  "Dao Thi D"
o	]
o	*/

	const myFriends4 = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];
	
	myFriends4.pop();
	console.log(myFriends4);
	/*
o	[
o	  "Le Van A",
o	  "Nguyen Thi B",
o	  "Do Van C"
o	]
o	*/
