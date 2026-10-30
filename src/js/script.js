const menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>{const nav=document.querySelector('.nav nav');nav.classList.toggle('open');menu.textContent=nav.classList.contains('open')?'Close':'Menu'});
