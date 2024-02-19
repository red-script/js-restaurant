(()=>{"use strict";const e=document.querySelector("#home"),t=document.querySelector("#menu"),n=document.querySelector("#contact"),o=document.querySelector("body");e.addEventListener("click",(()=>{o.innerHTML="",function(){const e=document.getElementById("content"),t=document.createElement("h1"),n=document.createElement("img"),o=document.createElement("p"),c=document.createElement("p"),i=document.createElement("p");t.textContent="Welcome to Delicious Delights Restaurant",n.src="/src/img/image.jpg",o.textContent="At Delicious Delights, we pride ourselves on serving the most delicious and mouth-watering dishes you'll ever taste. Our talented chefs use only the finest and freshest ingredients to create culinary delights that will tantalize your taste buds.",c.textContent="Whether you're craving savory classics or exploring adventurous flavors, our diverse menu has something for everyone. From appetizers to desserts, each dish is crafted with passion and attention to detail, ensuring an unforgettable dining experience.",i.textContent="Come dine with us and discover why our loyal customers keep coming back for more. Join us at Delicious Delights Restaurant for an extraordinary culinary journey that will leave you craving for more.",e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(c),e.appendChild(i)}()})),t.addEventListener("click",(()=>{o.innerHTML="",function(){const e=document.getElementById("content"),t=document.createElement("h1");t.textContent="Our Menu";const n=document.createElement("h2");n.textContent="Appetizers";const o=document.createElement("p");o.textContent="- Appetizer 1";const c=document.createElement("p");c.textContent="- Appetizer 2";const i=document.createElement("h2");i.textContent="Mains";const r=document.createElement("p");r.textContent="- Main Dish 1";const d=document.createElement("p");d.textContent="- Main Dish 2";const a=document.createElement("h2");a.textContent="Desserts";const s=document.createElement("p");s.textContent="- Dessert 1";const l=document.createElement("p");l.textContent="- Dessert 2",e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(c),e.appendChild(i),e.appendChild(r),e.appendChild(d),e.appendChild(a),e.appendChild(s),e.appendChild(l)}()})),n.addEventListener("click",(()=>{o.innerHTML="",function(){const e=document.querySelector("#content"),t=document.createElement("h1");t.textContent="Contact Us";const n=document.createElement("p");n.textContent="For inquiries or reservations, please feel free to contact us using the information below:";const o=document.createElement("p");o.textContent="Address: 123 Main Street, City, Country";const c=document.createElement("p");c.textContent="Phone: +1 (123) 456-7890";const i=document.createElement("p");i.textContent="Email: info@deliciousdelights.com",e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(c),e.appendChild(i)}()}))})();