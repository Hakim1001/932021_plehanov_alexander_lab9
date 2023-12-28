var output = document.querySelector('output');
var div = document.createElement('div');
window.addEventListener('load', function () {
  div.classList.add('keyboard');
  document.querySelector('.calculator').appendChild(div);
  '7 8 9 / C 4 5 6 * <- 1 2 3 - = 0 . +'.split(' ').map(symbol => {
  div.insertAdjacentHTML('beforeend', `<button class="item" value="${symbol}">${symbol}</button>`);

  });
  document.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', function () {
          // по клику вызывается функция со значением кнопки в качестве параметра
          calc(this.value);
      })
  });
  document.addEventListener('keydown', event => {
      if ((event.key).match(/[0-9%\/*\-+\(\)=]|Backspace|Enter/)) calc(event.key);
  })
});
function calc(value) {
    if (value.match(/=|Enter/)) {
        try {
            output.textContent = Math.trunc(math.evaluate(output.textContent));
        } catch {
            let oldValue = output.textContent;
            let newValue = 'недопустимое выражение';
            output.textContent = newValue;
            setTimeout(() => {
                output.textContent = oldValue;
            }, 1500)
        }

    } else if (value === 'C') {
        output.textContent = '';
   } else if (value.match(/<-|Backspace/)) {
        output.textContent = output.textContent.substring(0, output.textContent.length - 1);
    } else {
        output.textContent += value;
    }
}
