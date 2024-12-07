// Open/Close Login Modal

const loginButton =   document.getElementById('loginButton');

const loginModal = document.getElementById('loginModal');

const closeModal = document.getElementById('closeModal');

const loginForm = document.getElementById('loginForm');

loginButton.addEventListener('click', () => {

  loginModal.style.display = 'block';

});

closeModal.addEventListener('click', () => {

  loginModal.style.display = 'none';

});

window.addEventListener('click', (e) => {

  if (e.target === loginModal) {

    loginModal.style.display = 'none';

  }

});

// Form Submit Handler

loginForm.addEventListener('submit', (e) => {

  e.preventDefault();

  const username = document.getElementById('username').value;

  const password = document.getElementById('password').value;

  if (username === 'user' && password === 'password') {

    alert('እንኳን ደህና መጡ፡፡');

    loginModal.style.display = 'none';

  } else {

    alert('ተሳስተዋል፤ እባኮትን እንደገና ይሞክሩ።');

  }

});hshdj