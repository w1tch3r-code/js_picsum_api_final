"use strict";

// ===================================================
//      	 	JS-Vertiefung – API Picsum
// ===================================================

console.log("%c JS-Vertiefung – API Picsum", "color: tomato");

// Aufgabenstellung

// Für dieses Projekt verwenden wir die API von Picsum, um eine Galerie zu erstellen.
// Schau dir das Vorschauvideo (s. nächste Seite) genau an. Wenn man auf den Button klickt, öffnet sich ein neues Fenster. 

// https://picsum.photos/ https://picsum.photos/v2/list

// Nutzen kannst du dafür.:

// figure-Element
// createElement()
// appendChild()
// window.open() könnte für dich nützlich sein


const fetchPicsum = () => {
	const wrapper = document.querySelector('.wrapper');

	fetch("https://picsum.photos/v2/list")
		.then((response) => {
			if (response.ok === false) {
				throw new Error("Hier ist etwas schief gelaufen");
			}
			return response.json();
		})
		.then((data) => {
			data.forEach((elem) => {
				// console.log(elem);
				const newFigure = document.createElement("figure");
				const newImage = document.createElement("img");
				const newFigcaption = document.createElement("figcaption");
				const newATag = document.createElement("a");

				newImage.setAttribute('src', `${elem.download_url}`);
				newImage.setAttribute('alt', `${elem.author}`);
				newFigure.appendChild(newImage)

				newFigcaption.textContent = elem.author;
				newFigure.appendChild(newFigcaption)

				newATag.setAttribute('href', `${elem.url}`);
				newATag.setAttribute('target', '_blank');
				newATag.textContent = `See more`;
				newFigure.appendChild(newATag)

				wrapper.appendChild(newFigure);
			});
		})
		.catch((error) => console.log(error));
};

fetchPicsum();
