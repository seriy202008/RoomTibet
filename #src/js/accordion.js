export function accordion(element, options) {
    let select = element.querySelector('[data-select]');
    let value = element.querySelector('[data-value]');
    let list = element.querySelector('[data-list]');
    let items = element.querySelectorAll('[data-item]');
    let icon = element.querySelector('[data-icon]');
    let input = element.querySelector('[data-input]');
    select.addEventListener('click', function (e) {
        list.classList.toggle('_active');
        icon.classList.toggle('_active');
    });
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        item.addEventListener('click', function (e) {
            list.classList.remove('_active');
            icon.classList.remove('_active');
            value.textContent = item.dataset.item;
            input.value = item.dataset.item;
        });
    }

}