
function formvalidation() {
    //entering the values of name , phone and email in variables a
    var first = document.forms['message']['Name'].value;
    var phone = document.forms['message']['Phone'].value;
    var email = document.forms['message']['Email'].value;
    // conditionl statements for phone ,name and email to check 
    if (first === "" || phone === "" || email === "") {
        alert("Please fill the form correctly!");//pop up aleart will show if the condition meets the criteria
        return false;
    }
    // phone number should be atleast 10 digits condition 
    if (phone.length < 10) {
        alert("Enter valid phone number");
        return false;
    }
    // if all the conditions will  met then this aleart will show
    alert("Your response is recorded!");
    return true;

}

