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

// Mit buttons und window.open()

const fetchPicsum = () => {
	const wrapper = document.querySelector(".wrapper");
	fetch("https://picsum.photos/v2/list?page&limit=52")
		.then((response) => {
			if (response.ok === false) {
				throw new Error("Hier ist etwas schief gelaufen");
			}
			return response.json();
		})
		.then((data) => {
			data.forEach((elem) => {
				// Options für IntersectionObserver
				const options = {
					root: null,
					rootMargin: '200px',
					threshold: 0 , delay: 1000,
				};

				const allFigure = document.querySelectorAll('figure');
				const newFigure = document.createElement("figure");
				const newImage = document.createElement("img");
				const newFigcaption = document.createElement("figcaption");
				const newButton = document.createElement("button");

				newImage.setAttribute("src", `${elem.download_url}`);
				newImage.setAttribute("alt", `${elem.author}`);
				newImage.setAttribute("height", '215');

				newFigcaption.textContent = elem.author;

				newButton.addEventListener("click", () => {
					window.open(elem.url, "_blank");
				});

				newButton.setAttribute("type", "button");
				newButton.textContent = `See more`;
				newFigure.append(newImage, newFigcaption, newButton);

				const moveObserver = new IntersectionObserver((entries) => {
					entries.forEach((entry) => {
						const intersecting = entry.isIntersecting;
						if (intersecting) {
							entry.target.style.opacity = "1";
							entry.target.style.transform = "scale(1)";
						} else {
							entry.target.style.opacity = "0";
							entry.target.style.transform = "scale(0.5)";
							
						}
					});
				}, options);

				wrapper.appendChild(newFigure);

				allFigure.forEach((allFigure) => {
					moveObserver.observe(allFigure);
				});
				
			});
		})
		.catch((error) => console.log(error));
};

fetchPicsum();

// Mit a-Tags

// const fetchPicsum = () => {
// 	const wrapper = document.querySelector('.wrapper');
// 	fetch("https://picsum.photos/v2/list")
// 		.then((response) => {
// 			if (response.ok === false) {
// 				throw new Error("Hier ist etwas schief gelaufen");
// 			}
// 			return response.json();
// 		})
// 		.then((data) => {
// 			data.forEach((elem) => {
// 				const newFigure = document.createElement("figure");
// 				const newImage = document.createElement("img");
// 				const newFigcaption = document.createElement("figcaption");
// 				const newATag = document.createElement("a");

// 				newImage.setAttribute('src', `${elem.download_url}`);
// 				newImage.setAttribute('alt', `${elem.author}`);

// 				newFigcaption.textContent = elem.author;

// 				newATag.setAttribute('href', `${elem.url}`);
// 				newATag.setAttribute('target', '_blank');
// 				newATag.textContent = `See more`;
// 				newFigure.append(newImage, newFigcaption, newATag)

// 				wrapper.appendChild(newFigure);
// 			});
// 		})
// 		.catch((error) => console.log(error));
// };

// fetchPicsum();
