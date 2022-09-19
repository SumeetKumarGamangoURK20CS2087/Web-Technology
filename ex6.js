function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  
  currentTime();

  var i = 0;
function change() {
  var doc = document.getElementById("background");
  var color = ["black", "blue", "brown", "green","red","orange","pink"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 2000);

function incSize(){ 
  document.getElementById("paral").style="font-size:28px";}
function decSize(){
  document.getElementById("paral").style = "font-size:10px";
}
function q4Start(){ 
  car=document.getElementById("car");
  interval=setInterval(q4CarMove,20);
         
}
function q4Stop(){   
  clearInterval(interval);      
}

function q4CarMove(){
  
  car.style.left=parseInt(car.style.left)+2+"px";
  
  if(parseInt(car.style.left)>parseInt(screen.width)){        
      car.style.left="0px";
  }
}
function q5(){
  document.getElementById("bfr").innerHTML="Before 2000";
  document.getElementById("aft").innerHTML="After 2000";
  let student=[{Name:"Sumeet Kumar Gamango",RegNo:"URK20CS2087",DOB:"09/JUN/2002"},
               {Name:"Rahul Kumar",RegNo:"URK20AI1098",DOB:"03/JUL/2001"},
               {Name:"Aaron Lakra",RegNo:"URK20AI1072",DOB:"04/NOV/1999"},
               {Name:"Anmol Ephraim",RegNo:"URK20CS2082",DOB:"23/SEP/1998"},
               {Name:"Mansib Sahoo",RegNo:"URK20CS3010",DOB:"20/AUG/2001"}
               
              ]
  for(let i=0;i<student.length;i++){
      if(parseInt(student[i].DOB.split("/")[2])<2000){
          document.getElementById("before").innerHTML+=student[i].Name+"\'s "+"Register Number is "+student[i].RegNo+" and the DOB is "+student[i].DOB+"<br><br>";
      }
      else
      document.getElementById("after").innerHTML+=student[i].Name+"\'s "+"Register Number is "+student[i].RegNo+" and the DOB is "+student[i].DOB+"<br><br>";

  }    
}