function validateForm() {
  console.log('checkFormInput()');

  var errorElement = document.getElementById('form-error');

  var salutation = document.forms['subscription-form']['salutation'].value;
  var firstname = document.forms['subscription-form']['firstname'].value;
  var lastname = document.forms['subscription-form']['lastname'].value;
  var email = document.forms['subscription-form']['email'].value;
  var checkbox = document.forms['subscription-form']['checkbox'].checked;

  if (!salutation || !firstname || !lastname || !email || !checkbox) {
    errorElement.style.display = 'block';
    return false;
  }

  return true;
}