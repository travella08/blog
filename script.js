document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('btn');
  const msg = document.getElementById('message');

  btn.addEventListener('click', function () {
    msg.textContent = 'Button clicked — JavaScript is working!';
    btn.textContent = 'Clicked';
    console.log('Button clicked');
  });
});
