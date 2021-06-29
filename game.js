if (interval == undefined) {
  clearInterval(interval);
}
var money = 0;
var clickLevel = 1;
var nextClickLevel = 2;
var upgradeClickCost = 100;
var interval = setInterval(machinePoints,4);
var h1N = 0;
var h2N = 0;
var h3N = 0;
var h4N = 0;
var h5N = 0;
var h6N = 0;
var helper1Cost = 25;
var helper2Cost = 200;
var helper3Cost = 1000;
var helper4Cost = 10000;
var helper5Cost = 100000;
var helper6Cost = 1000000;
var h1dps = 0;
var h2dps = 0;
var h3dps = 0;
var h4dps = 0;
var h5dps = 0;
var h6dps = 0;
var dps = 0;
var mhp = 10;
var level = 1;




//Shows current $
function update() {
  dps=h1dps+h2dps+h3dps+h4dps+h5dps+h6dps
  document.getElementById('dps').innerHTML =  "gps: "+dps;
  document.getElementById('money').innerHTML =  Math.floor(money);
}
function machinePoints(){
  money+=h1dps/250
  money+=h2dps/250
  money+=h3dps/250
  money+=h4dps/250
  money+=h5dps/250
  money+=h6dps/250
  update();
}

//This will show starting $. 
update()


//When mouse hovers over clickme
function clickOver() {
  document.getElementById('moneyEarn').innerHTML =  " ༼ง ◉ω◉༽ง ";
}
//When mouse stops hovering over clickme
function clickOverStop() {
  document.getElementById('moneyEarn').innerHTML =  "༼⩺ω⩹༽";
}

//Earns money when click me! button is clicked. 
function clickEarn(amount) {
  for (i = 0; i < amount; i++) {
  money+=1;
}
	
  update()
};

//Upgrades click strength. 
function upgradeClick() {
  
 if (money >= upgradeClickCost) {

  money-=upgradeClickCost
   update()
   upgradeClickCost*=3
   clickLevel*=2
   nextClickLevel*=2
   document.getElementById('clickStr').innerHTML = "Click strength: "+clickLevel;
      document.getElementById('buy1').innerHTML =  "Multiply click strength by 2 ("+upgradeClickCost+" gold)";
 }
}
   //      IDLE UPGRADES      //


//First idle upgrade
var heroCount = document.querySelector(".heroCount");
function iBuy1() {
  
 if (money >= helper1Cost) {

   money-=helper1Cost
   update();
   h1N+=1
   helper1Cost = Math.ceil(helper1Cost*1.3)
       document.getElementById('iBuy1cost').innerHTML =  "+1dps ("+helper1Cost+" gold)";
   h1dps+=1
   
   var thing1 = document.createElement("DIV");
   thing1.classList.add("heroNumber");
   heroCount.appendChild(thing1);
 }
}


//Second idle upgrade
var heroCount2 = document.querySelector(".heroCount2");
function iBuy2() {
  
 if (money >= helper2Cost) {

   money-=helper2Cost
   update();
   h2N+=1
   helper2Cost = Math.ceil(helper2Cost*1.3)
       document.getElementById('iBuy2cost').innerHTML =  "+5dps ("+helper2Cost+" gold)";
   h2dps+=5
   
   
   var thing2 = document.createElement("DIV");
   thing2.classList.add("heroNumber2");
   heroCount2.appendChild(thing2);
 }
}

//Third idle upgrade
var heroCount3 = document.querySelector(".heroCount3");
function iBuy3() {
  
 if (money >= helper3Cost) {

   money-=helper3Cost
   update();
   h3N+=1
   helper3Cost = Math.ceil(helper3Cost*1.3)
       document.getElementById('iBuy3cost').innerHTML =  "+15dps ("+helper3Cost+" gold)";
   h3dps+=15   
   var thing3 = document.createElement("DIV");
   thing3.classList.add("heroNumber3");
   heroCount3.appendChild(thing3);
 }
}


//Fourth idle upgrade
var heroCount4 = document.querySelector(".heroCount4");
function iBuy4() {
  
 if (money >= helper4Cost) {

   money-=helper4Cost
   update();
   h4N+=1
   helper4Cost = Math.ceil(helper4Cost*1.3)
       document.getElementById('iBuy4cost').innerHTML =  "+50dps ("+helper4Cost+" gold)";
   h4dps+=50
   var thing4 = document.createElement("DIV");
   thing4.classList.add("heroNumber4");
   heroCount4.appendChild(thing4);
 }
}

//Fifth idle upgrade
var heroCount5 = document.querySelector(".heroCount5");
function iBuy5() {
  
 if (money >= helper5Cost) {

   money-=helper5Cost
   update();
   h5N+=1
   helper5Cost = Math.ceil(helper5Cost*1.3)
       document.getElementById('iBuy5cost').innerHTML =  "+100dps ("+helper5Cost+" gold)";
   h5dps+=100
   var thing5 = document.createElement("DIV");
   thing5.classList.add("heroNumber5");
   heroCount5.appendChild(thing5);
 }
}


//Sixth idle upgrade
var heroCount6 = document.querySelector(".heroCount6");
function iBuy6() {
  
 if (money >= helper6Cost) {

   money-=helper6Cost
   update();
   h6N+=1
   helper6Cost = Math.ceil(helper6Cost*1.3)
       document.getElementById('iBuy6cost').innerHTML =  "+500dps ("+helper6Cost+" gold)";
   h6dps+=500
   var thing6 = document.createElement("DIV");
   thing6.classList.add("heroNumber6");
   heroCount6.appendChild(thing6);
 }
}



update();
