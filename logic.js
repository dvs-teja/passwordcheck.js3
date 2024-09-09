function checkk() {
  let str = document.getElementById('input').value;
  let ele = document.getElementById('ex');

  ele.innerHTML = '';

  if (str.length < 7) {
    let lengthMessage = document.createElement('h4');
    lengthMessage.innerText = 'PASSWORD LENGTH IS TOO SHORT';
    lengthMessage.style.color = 'red';
    lengthMessage.style.fontStyle='courier';
    ele.appendChild(lengthMessage);
    console.log('Password length is too short');
  }

  const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '\\', '|', '[', ']', '{', '}', ';', ':', '/', '?', '.', '>', '<', '`', '~'];
  let result = specialChars.some(char => str.includes(char));

  if (!result) {
    let specialCharMessage = document.createElement('h4');
    specialCharMessage.innerText = 'PASSWORD DOES NOT CONTAIN SPECIAL CHARACTERS';
    specialCharMessage.style.color = 'red';
    ele.appendChild(specialCharMessage);
    console.log('Password does not contain special characters');
  }
  if(result){
    let specialCharMessage = document.createElement('h4');
    specialCharMessage.innerText = 'Strong password';
    specialCharMessage.style.color = 'green';
    ele.appendChild(specialCharMessage);
    console.log('Password does not contain special characters');
  }
}
