/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.
var matches = document.getElementById('matCount');
matches.innerHTML = 11;

//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.
var messages = document.getElementById('msgCount');
messages.innerHTML = 23; 

//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.
var trueName = document.getElementById('fullname');
trueName.innerHTML = 'Ronald McDonald';

//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.
var trueAge = document.getElementById('age');
trueAge.innerHTML = 'Age: '+63;

//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.

var jobDisc = document.createElement('div');
jobDisc.id = 'job';
jobDisc.innerHTML = 'Job Discription: Clown and Restauranteur.';
data.appendChild(jobDisc);

//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.
var like2Do = document.createElement('div');
like2Do.id = 'hobbies';
like2Do.innerHTML = 'Hobbies: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.';
data.appendChild(like2Do);

//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.
var whereAt = document.createElement('div');
whereAt.id = 'location';
whereAt.innerHTML = 'Location: Honolulu, HI';
data.appendChild(whereAt);

//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.
var desires = document.createElement('div');
desires.id = 'wants';
desires.innerHTML = 'Looking for a Mrs. Mcdonald.';
data.appendChild(desires);

//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).
var profile2 = document.createElement('p');
profile2.id = 'pro2';
profile2.innerHTML = "Hey sexy, is your body from McDonalds cuz I'm lovin' it. You're lucky I haven't eaten yet, you can be my Happy Meal."
profile.appendChild(profile2);

//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.
var fName = document.getElementsByClassName('firstName');
fName[0].innerHTML = 'Wendy';

//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.
var fElementAge = document.getElementsByClassName('otherAge');
fElementAge[0].innerHTML = 48; 

//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.
var martialStatus = document.getElementsByClassName('status');
martialStatus[0].innerHTML = 'Single Mother';

//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.

//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.

 //Final Boss Create your own profile into the page:
 //change image to match your profile
 //div with class name of firstName
 //div with class name of otherAge
 //div with class name of status
 //div with class anem of Motto




