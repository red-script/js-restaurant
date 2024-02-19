export function menuPage() {
    const container = document.getElementById('content');

    const h1 = document.createElement('h1');
    h1.textContent = "Our Menu";

    const appetizers = document.createElement('h2');
    appetizers.textContent = "Appetizers";

    const p1 = document.createElement('p');
    p1.textContent = "- Appetizer 1";

    const p2 = document.createElement('p');
    p2.textContent = "- Appetizer 2";

    const mains = document.createElement('h2');
    mains.textContent = "Mains";

    const p3 = document.createElement('p');
    p3.textContent = "- Main Dish 1";

    const p4 = document.createElement('p');
    p4.textContent = "- Main Dish 2";

    const desserts = document.createElement('h2');
    desserts.textContent = "Desserts";

    const p5 = document.createElement('p');
    p5.textContent = "- Dessert 1";

    const p6 = document.createElement('p');
    p6.textContent = "- Dessert 2";

    container.appendChild(h1);
    container.appendChild(appetizers);
    container.appendChild(p1);
    container.appendChild(p2);
    container.appendChild(mains);
    container.appendChild(p3);
    container.appendChild(p4);
    container.appendChild(desserts);
    container.appendChild(p5);
    container.appendChild(p6);

}