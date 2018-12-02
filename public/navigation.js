// NAVIGATION
const days = 25;
var nav = document.getElementById('nav');
for (let i=1; i<=days; i++) {
  let list = document.createElement('li');
  let link = document.createElement('a');
  link.href = `./days/${i}.html`;
  link.innerHTML = `${i}`;
  list.appendChild(link);
  nav.appendChild(list);
}