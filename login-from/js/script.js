var form = document.querySelector(".details-collector-form");
var email = document.querySelector("#email");
var fullName = document.querySelector("#full-name");
var mobileNumber = document.querySelector('#mobile-number');
var role = document.querySelector('#role')
var phoneNumber = document.querySelector('#mobile-number')
var cards = document.querySelector(".cards")

form.addEventListener("submit", function (e) {

    // check if all the inputs are filled////
     
    if (email.value !== "" && fullName.value !== "" && mobileNumber.value !== "" && role.value !== "") {

        let newdivCard = document.createElement('div')
        newdivCard.className = "card"
        let htmlTemplate = ` <b>Officer's desk</b>
    <div class="card-inner">
        <div class="card-inner-item">
            <b>Role</b>
            <p>${role.value}</p>
        </div>
        <div class="card-inner-item">
            <b>Contact</b>
            <p>${email.value}</p>
            <p>${phoneNumber.value}</p>
        </div>
        <div class="card-inner-item">
            <b>Full name</b>
            <p>${fullName.value}</p>
        </div>
    </div>
    <div>
        <div class="trash-container"><i class="fa fa-trash trash-icon"></i></div>
    </div>`
        newdivCard.innerHTML = htmlTemplate;
        cards.insertAdjacentElement("beforeend", newdivCard)

        // show success Message
        const successMessage=document.createElement('div');
        successMessage.className="success-message";
        successMessage.textContent="The form has been submitted successfully";
        form.insertAdjacentElement("beforebegin",successMessage);

        // make successmessage disappear after certain period of time
        setTimeout(function(){
            successMessage.remove();
            },1200)


        // clear the input fields once it is submitted//
        email.value='';
        phoneNumber.value='';
        fullName.value='';
        role.value='';

        // Focus cursor on the email field 
        // email.focus();
    }
    // show error message if the fields are empty
    else{
    errorDivMessage=document.createElement('div');
    errorDivMessage.className="error-message";
    errorDivMessage.textContent="Please fill all the fields !!!";
    form.insertAdjacentElement('beforebegin',errorDivMessage)
    
    //make error message disappear after certain time 
    setTimeout(function(){
    errorDivMessage.remove();
    },1200)
    }  
    e.preventDefault();
})

//  make error message disappear when focused on email
// email.addEventListener('focus',function(e){
//     errorDivMessage.remove();
//     e.preventDefault();
// })


// Delete functionality//////
 document.body.addEventListener('click',function(e){
    if(e.target.classList.contains('trash-icon')){
    // var trashicon=document.querySelector('.trash-container');
    //  trashicon.parentElement.parentElement.remove();
    e.target.parentElement.parentElement.parentElement.remove();
    }
})//