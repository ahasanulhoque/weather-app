function createForm(formWrapper) {
  const inputField = document.createElement('input');
  const inputButton = document.createElement('button');

  inputField.placeholder = 'Search for your city';
  inputButton.innerHTML = 'Submit';

  formWrapper.appendChild(inputField);
  formWrapper.appendChild(inputButton);
}

export { createForm };
