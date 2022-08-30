function validateForm(theForm) {
    let isValid = true;
    let output = '';
    if (theForm.fullname.value.length < 3) {
        output += 'Name must be greater than 3 characters long<br>';
        isValid = false;
        theForm.fullname.focus();
    }
    let emailErrorMessage = document.getElementById('emailerror');
    if (theForm.emailaddress.value.length < 3) {
        output += 'Email must be greater than 3 characters long<br>';
        emailErrorMessage.style.display = 'inline-block';
        if (isValid) {
            isValid = false;
            theForm.emailaddress.focus();
        }
    } else {
        emailErrorMessage.style.display = 'none';
    }
    let ageElementsCount = theForm.age.length;
    let ageSelected = false;
    for (let ageCount = 0; ageCount < ageElementsCount; ageCount++) {
        if (theForm.age[ageCount].checked) {
            ageSelected = true;
            break;
        }
    }
    if (!ageSelected) {
        output += 'Age must be selected<br>';
        if (isValid) {
            isValid = false;
        }
    }
    let countyOptionsCount = theForm.county.options.length;
    let countySelected = false;
    for (let countyCount = 0; countyCount < countyOptionsCount; countyCount++) {
        if (theForm.county.options[countyCount].selected && theForm.county.options[countyCount].value != '') {
            countySelected = true;
            break;
        }
    }
    if (!countySelected) {
        output += 'County must be selected<br>';
        if (isValid) {
            isValid = false;
            theForm.county.focus();
        }
    }
    let errorMessage = document.getElementById('errormessage');
    if (!isValid) {
        errorMessage.innerHTML = output;
        errorMessage.style.display = 'block';
    } else {
        errorMessage.innerHTML = '';
        errorMessage.style.display = 'none';
    }
    return isValid;
}

function outputForm(theForm) {
    let formElementCount = theForm.length;
    let output = '';
    for (let formCount = 0; formCount < formElementCount; formCount++) {
        if (theForm[formCount].type == 'submit' || theForm[formCount].type == 'fieldset ') {
            continue;
        }
        output += theForm[formCount].name + ' = ' + theForm[formCount].value + '\n';
    }
    alert(output);
    return false;
}