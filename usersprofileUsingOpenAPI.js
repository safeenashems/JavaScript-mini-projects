
//console.log("js is working");
const API_URL='https://dummyjson.com/users';

const userDetais=document.getElementById("userDetails");

// var rowNumber = 1;
// var  indexNumber = 0;
// var userId;
// showUsrProfileCard() {
//    for (i = indexNumber; i < responseObj.users.length; i++) {

//       if (rowNumber <= 5) {

//           userId = responseObj.users[i].id;
//           rowNumber += 1;
//           indexNumber = i;
//       }

//   };

//   indexNumber += 1;
// };

async function getData() {
  // try{
   const response=await fetch(API_URL);
   // if(!response.ok){
   //    throw new Error('network response was not ok');
   // }
   const responseObj=await response.json();
   console.log("api response :",responseObj);
   responseObj && updateDom(responseObj);
   }
   // catch(error){
   //    console.error("fetch errror",error);
      
   // }
//}
  
   

// fetch(API_URL)
// .then(function(response){
//    return response.json()
// })
// .then(function(data){
//    console.log(data);
// })

function updateDom(responseObj){
   console.log(responseObj.users);

 //  if(!responseObj.users){    console.log("user array is missing in response!");  return;    }
   for (let i=0;i<responseObj.users.length;i++)
      { 
     const user=responseObj.users[i];
      
    const img=document.createElement("img");
//     img.style.text-align = "center";
// img.style.align-items="center";
   //  img.src=user.image;

     const li=document.createElement("li");
      li.innerHTML=`
       <img src="${responseObj.users[i].image}"/>
        
     
      <h3>${responseObj.users[i].firstName + " " + responseObj.users[i].lastName}</h3>
      <h5>${responseObj.users[i].company.title}</h5>
      <h6>${responseObj.users[i]. email}<h6>
      <p>${responseObj.users[i]. phone}<p>
      <button>View Details</button>

`;

// classlist is used to create a claasname to 'li & div' so can stylein css
 img.classList.add("item-Image");
li.classList.add("listedItem");
//appending img to the list item
     li.appendChild(img);
      userDetais.appendChild(li);
   };
   
}
// function viewMore() {

//    showUsrProfileCard() ;
//    rowNumber = 1;
// }