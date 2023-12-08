export function sidemenu(btnOpen, blockMenu, btnClose, documentClickClose, scrollClose) {
    let open = document.querySelector(btnOpen);
    let close = document.querySelector(btnClose);
    let menu = document.querySelector(blockMenu);
    open.addEventListener('click', function (e) {
        menu.classList.toggle('_active');
    });
    close.addEventListener('click', function (e) {
        menu.classList.remove('_active');
    });
    if (documentClickClose) {
        document.addEventListener('click', function (e) {
            if (!e.target.closest(blockMenu) && !e.target.closest(btnOpen) && menu.classList.contains('_active')) {
                menu.classList.remove('_active');
            }
        });
    }
    if (scrollClose) {
        window.addEventListener('scroll', function (e) {
            if (menu.classList.contains('_active')) {
                menu.classList.remove('_active');
            }
        });
    }
}