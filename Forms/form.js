function validateForm(theForm) {
    let isValid = true;
    let output = '';
    if (theForm.fullname.value.length < 3) {
        output += 'Name must be greater than 3 characters long\n';
        isValid = false;
        theForm.fullname.focus();
    }
    if (theForm.emailaddress.value.length < 3) {
        output += 'Email must be greater than 3 characters long\n';
        if (isValid) {
            isValid = false;
            theForm.emailaddress.focus();
        }
    }
    let ageElementsCount = theForm.age.length;
    let ageSelected = false;
    for (let ageCount = 0; ageCount < ageElementsCount; ageCount++) {
        if (theForm.age[ageCount].selected) {
            ageSelected = true;
            break;
        }
    }
    if (!ageSelected) {
        output += 'Age must be selected\n';
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
        output += 'County must be selected\n';
        if (isValid) {
            isValid = false;
            theForm.county.focus();
        }
    }
    if (!isValid) {
        alert(output);
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