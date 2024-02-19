export function contactPage() {
    const container = document.querySelector('#content');

    const hc1 = document.createElement('h1');
    hc1.textContent = "Contact Us";  

    const pc1 = document.createElement('p');
    pc1.textContent = "For inquiries or reservations, please feel free to contact us using the information below:";

    const pc2 = document.createElement('p');
    pc2.textContent = "Address: 123 Main Street, City, Country";

    const pc3 = document.createElement('p');
    pc3.textContent = "Phone: +1 (123) 456-7890";

    const pc4 = document.createElement('p');
    pc4.textContent = "Email: info@deliciousdelights.com";

    container.appendChild(hc1);
    container.appendChild(pc1);
    container.appendChild(pc2);
    container.appendChild(pc3);
    container.appendChild(pc4);
}