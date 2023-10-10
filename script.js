window.addEventListener("scroll",reveal);
function reveal(){
    var reveals=document.querySelectorAll(".reveal");
    for(var i=0;i<reveals.length;i++){

        var windowHeight=window.innerHeight;
        var revealTop=reveals[i].getBoundingClientRect().top;
        var revealPoint=150;

        if(revealTop<windowHeight-revealPoint){
            reveals[i].classList.add("active");
        }else{
            reveals[i].classList.remove("active");
        }
    }
}

//  testimonies section
let testimoner=document.querySelector("#testimonial h4");
let testimonerTitle=document.querySelector("#testimonial span");
let testimony=document.querySelector("#testimonial p")
let forwardBtn=document.querySelector("#forwardBtn");
let backBtn=document.querySelector("#backBtn");
let Image=document.querySelector("#testimonial img");
let Tnames=["@Joshua Mwendwa","@Wilfred Mutwiri","@Michael Kinyua","@Princess Favour"];
let Ttitles=["Student","Student","Faculty","Student","Faculty"];
let testimonies=[
    "ISC has been the best department one can ever wish to be associated with, leave alone their awesome courses"
    ,"When it comes to IT related issues and information, you have no need to look anywhere else, ISC department is always the best source of solution",
    "What is left is to admire the content and positivity of the ISC department lectureres as they deliver quality content to their students, ensuring their students get nearly everything there is in IT",
    "Being at ueab is not enough but being associated with a quality deparment matters more than one can imagine, and ISC is the deparment of pride that am forever proud to be associated with!!"];
let Counter=0;
forwardBtn.addEventListener("click",forwardClick);
backBtn.addEventListener("click",backClick);
function forwardClick(){
    testimoner.innerHTML=Tnames[Counter];
    testimonerTitle.innerHTML=Ttitles[Counter];
    testimony.innerHTML=testimonies[Counter];
    Counter++;
    if(Counter>=Tnames.length){
    Counter=0;
    }
}
function backClick(){
    testimoner.innerHTML=Tnames[Counter];
    testimonerTitle.innerHTML=Ttitles[Counter];
    testimony.innerHTML=testimonies[Counter];
    Counter--;
    if(Counter<=Tnames.length){
        Counter=1;
        }
}
// form section
let formBtn=document.querySelector("#contanctForm button");
let nameInput=document.querySelector("#name");
let emailInput=document.querySelector("#email")
let phoneInput=document.querySelector("#phone")
let msgInput=document.querySelector("#text");
formBtn.addEventListener("click",formBtnClick);
function formBtnClick(){
    if(nameInput.value===""){
        alert("Kindly Enter your name to proceed");
    }else if(emailInput.value===""){
        alert("Kindly Enter your email address to proceed");
    }else if(phoneInput.value===""){
        alert("Kindly Enter your phone number to proceed");
    }else if(msgInput.value===""){
        alert("Kindly Enter leave us a message to proceed");
    }else{
        alert(`Thank you for your Interest in the Golden Networks Services. An email has been sent to ${emailInput.value}`)
    }
// clear input values
    nameInput.value="";
    emailInput.value="";
    phoneInput.value="";
    msgInput.value="";
}
// footer section...subscription
subscribeBtn=document.querySelector("#subscribe button");
subscribeInput=document.querySelector(".subscribeInput input");
subscribeBtn.addEventListener("click",subscribeClick);
function subscribeClick(){
    if(subscribeInput.value==""){
        alert("Enter email address to subscribe!")
    }else{
        alert(`Subscription Successfull!. An email has been sent to ${subscribeInput.value}`);
    }
    subscribeInput.value="";
}
// reveal the nav bar
let navIcon=document.querySelector("#navIcon");
let navBar=document.querySelector(".navBar");
let navContainer=document.querySelector(".navContainer");
navIcon.addEventListener("mouseover",navIconOver);
function navIconOver(){
navBar.style.height="260px";
navContainer.style.opacity="1";
}
navBar.addEventListener("mouseleave",navLeave);
function navLeave(){
navBar.style.height="";
navContainer.style.opacity="";
}