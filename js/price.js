document.addEventListener('DOMContentLoaded', () => {
    function priceCounter() {
        let price = 0;
        let checkValue = document.querySelectorAll('.checkbox');
        let priceText = document.querySelector('.application__amount');
        let checkboxChecked;
        priceText.innerHTML = price;

        checkValue.forEach(el => {
            let val = Number(el.value);
            el.addEventListener('click', e => {
                if (el.checked) {
                    price += val;
                    priceText.innerHTML = price + " р";
                } else {
                    price -= val;
                    priceText.innerHTML = price;
                }
            });
        });
    }

    priceCounter();
});


