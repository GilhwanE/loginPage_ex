const subBtn = document.querySelector('#btn');

function Idsubmit(event) {
  event.preventDefault();
  var id = document.getElementById('id').value;
  var pw = document.getElementById('pwd').value;

  // alert('ID:' + id + ' | ' + 'Passowrd:' + pw);
  console.log('아이디 : ' + id, '암호 : ' + pw);
}

subBtn.addEventListener('click', Idsubmit);
