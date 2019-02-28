window.addEventListener('DOMContentLoaded', () => {
    const cartWrapper = document.querySelector('.cart__wrapper'), // корзина
        cart = document.querySelector('.cart'),
        close = document.querySelector('.cart__close'), // для закрытия корзины
        open = document.querySelector('#cart'),  //  для открытие корзины
        goodsBtn = document.querySelectorAll('.goods__btn'), // все кнопки которые позв перемещать товар в корзину
        products = document.querySelectorAll('.goods__item'), // наши продукты
        confirm = document.querySelector('.confirm'),
        badge = document.querySelector('.nav__badge'), 
        totalCost = document.querySelector('.cart__total > span'),
        titles = document.querySelectorAll('.goods__title');


        function openCart() { // функция отркытия корзины 
            cart.style.display = 'block';// отрк корзины, стиль, замена none на block
            document.body.style.overflow = 'hidden'; // скролл исчезает, модальное онкно или корзина открытие - не должна прокручиваться страница. весь документ - боди
        }

        function closeCart() { // функция закрытия корзины
            cart.style.display = 'none';//полное закрытие корзины
            document.body.style.overflow = ''; 
        }
        //  события модальное окно Корзина
        open.addEventListener('click', openCart); // на кнопку навешивается обработчик событие (клик, обработчик события - функция открытия)
        close.addEventListener('click', closeCart);// на кнопку навешивается обработчик событие (клик, обработчик события - функция закрытия)


        goodsBtn.forEach(function(btn, i){
            btn.addEventListener('click', () => {
                let item = products[i].cloneNode(true),
                trigger = item.querySelector('button'),
                removeBtn = document.createElement('div'),
                empty =cartWrapper.querySelector('.empty');


                trigger.remove();

                removeBtn.classList.add('goods__item-remove');
                removeBtn.innerHTML = '&times';
                item.appendChild(removeBtn);

                cartWrapper.appendChild(item);
                if (empty) {
                    empty.remove(); // удаление надписи пустая корзина
                }

            });
        });

});

