export function tourHover(element) {
    let tours = document.querySelectorAll(element);

    tours.forEach(tour => {
        tour.addEventListener('mouseover', function (e) {
            tour.classList.add('_active');
        });
        tour.addEventListener('mouseout', function (e) {
            tour.classList.remove('_active');
        });
    });
}

