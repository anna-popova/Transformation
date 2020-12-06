function buttonFilter() {
  "use strict";
  const buttons = document.querySelector('#buttons').children;
  const items = document.querySelector('.row').children;
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {

      for (let j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove('active')

      }
      this.classList.add('active')
      let target = this.getAttribute('data-target');
      for (let t = 0; t < items.length; t++) {
        items[t].style.display = "none";
        if (items[t].getAttribute('data-id') == target) {
          items[t].style.display = "block";
        }
        if (target == 'all') {
          items[t].style.display = "block";
        }


      }
    })

  }
}
buttonFilter();
