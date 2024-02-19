export function homePage() {
    const header = document.getElementById('content');

    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    h1.textContent = "Welcome to Delicious Delights Restaurant";
    img.src = "/src/img/image.jpg";
    p1.textContent = "At Delicious Delights, we pride ourselves on serving the most delicious and mouth-watering dishes you'll ever taste. Our talented chefs use only the finest and freshest ingredients to create culinary delights that will tantalize your taste buds.";
    p2.textContent = "Whether you're craving savory classics or exploring adventurous flavors, our diverse menu has something for everyone. From appetizers to desserts, each dish is crafted with passion and attention to detail, ensuring an unforgettable dining experience.";
    p3.textContent = "Come dine with us and discover why our loyal customers keep coming back for more. Join us at Delicious Delights Restaurant for an extraordinary culinary journey that will leave you craving for more.";

    header.appendChild(h1);
    header.appendChild(img);
    header.appendChild(p1);
    header.appendChild(p2);
    header.appendChild(p3);
}
