const user = {
  email: 'user@gmail.com',
  pswd: 'UserPass'
}

const admin = {
  email: 'admin@gmail.com',
  pswd: 'AdminPass'
}

const magicNumbers = {
  emailMinLength: 6,
  pswdMinLength: 5
}

let email = prompt(`Enter your e-mail please:`, '');

if (email === null) {
  alert(`Canceled`);
} else if (email.length < magicNumbers.emailMinLength) {
  alert(`I don't know any emails having name length less than 6 symbols`);
} else if (email === user.email || email === admin.email) {
  const pswd = prompt(`Enter your password please:`, '');
  if (pswd === null) {
    alert(`Canceled`);
  } else if (email === user.email && pswd === user.pswd || email === admin.email && pswd === admin.pswd) {
    if (confirm(`Do you want to change your password?`)) {
      const oldPswd = prompt(`Enter your current password please:`);
      if (oldPswd === pswd) {
        const newPswd = prompt(`Enter new password:`, '');
        if (newPswd.length < magicNumbers.pswdMinLength) {
          alert(`It’s too short password. Sorry.`);
        } else {
          const newPswdConfirm = prompt(`Enter new password again:`, '');
          if (newPswd !== newPswdConfirm) {
            alert(`You wrote the wrong password.`);
          } else {
            alert(`You have successfully changed your password.`);
          }
        }
      } else if (oldPswd === null) {
        alert(`Canceled`);
      } else {
        alert(`Wrong password`);
      }
    } else {
      alert(`You have failed the change.`);
    }
  } else {
    alert(`Wrong password`);
  }
} else {
  alert(`I don't know you`);
}