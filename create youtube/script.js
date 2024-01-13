// let change_mode = document.querySelector("#dark_mode");
// change_mode.addEventListener('click',()=>{
//       if(change_mode.innerHTML == "DARK")
//       {
//          change_mode.innerHTML = "light"
//          document.body.classList.add("Classlist")
//          document.body.style.backgroundColor = 'black'
//          // element.classList.add("dark-mode");
//          console.log(side);
//       }
//       else{
//          change_mode.innerHTML = "DARK"
//          side.classList.remove("Classlist")
//          document.body.style.backgroundColor = 'white'
//          // element.classList.remove("dark-mode");
//       }
//    })








let change_mode = document.querySelector("#dark_mode");
console.log(change_mode);

function change() {

  
// change_mode.addEventListener('click',()=>{
//    if(change_mode.innerHTML == "light")
//    {
//       change_mode.innerHTML = "light"
//       side.classList.add("Classlist")
//       document.body.style.backgroundColor = 'black'
//       // element.classList.add("dark-mode");
//       console.log(side);
//    }
//    else{
//       change_mode.innerHTML = "DARK"
//       side.classList.remove("Classlist")
//       element.classList.remove("dark-mode");
//    }
// })
    

    var element = document.body;
    element.classList.toggle("dark-mode");
    
    var home= document.querySelector('.home');
       home.classList.toggle('black');

    var p= document.querySelector('.nav2').querySelectorAll('p')
     for(i in p){
        p[i].classList.toggle('black');
      
      }; 


      var Navside = document.querySelectorAll(".change")
      Navside.forEach((side) => {
         side.addEventListener("mouseover",function(){
            if(change_mode.innerHTML == "DARK")
            {
               change_mode.innerHTML = "light"
               side.classList.add("Classlist")
               console.log(side);
            }
            else{
               change_mode.innerHTML = "DARK"
               side.classList.remove("Classlist")
            }
               
         
         })
         })
   


//       var profile = document.querySelector(".profile");

//    profile.addEventListener("click",()=>{
//       var container1 = document.querySelector(".container1")
//     if(container1.style.display === "none"){
      
//       container1.style.display = "block";
//    } else {
//      container1.style.display = "none";
//    }

// })

   // }
   
     

}


function viweprofile(){
   var profile = document.querySelector(".profile");
   var container1 = document.querySelector(".container1")

   if(container1.style.display === "none"){
      
      container1.style.display = "block";
   } else {
     container1.style.display = "none";
   }
   
} 






























   // var imgElement = document.querySelectorAll('img');
   // console.log(imgElement)

   // // Change the color (e.g., toggle between red and blue)
   // if (imgElement.style.fill === 'rgb(36, 36, 36)') {
   //   imgElement.style.fill = '#ffffff';
   // } else {
   //   imgElement.style.fill = 'rgb(36, 36, 36)';}

     

// if(){
//    var leftContainer = document.querySelector(".leftContainer");
//       console.log(leftContainer);
//       leftContainer.childNodes.addEventListener("mouseover",function(){
//          leftContainer.style.backgroundColor = "#474747"
//       })

// }
//       else{
//          leftContainer.childNodes.addEventListener("mouseout",function(){
//             leftContainer.style.backgroundColor = "f0f0f0"
//          })
//       }

      
   
      
 




//   var imgall=document.querySelectorAll("imgAll");
   //     console.log(imgall);
      //  imgall.classList.add("clrchng")



//   var img =document.querySelectorAll("img");
//   console.log(img);
   // img.style.filter = "brightness(0)invert(1)"



   // function change(element) {
   //    // Get the image element inside the clicked paragraph
   //  }