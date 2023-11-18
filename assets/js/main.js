"use strict";

// ===================================================
//      	 	JS-Vertiefung – API Picsum
// ===================================================

// Aufgabenstellung

// Für dieses Projekt verwenden wir die API von Picsum, um eine Galerie zu erstellen.
// Schau dir das Vorschauvideo (s. nächste Seite) genau an. Wenn man auf den Button klickt, öffnet sich ein neues Fenster.

// https://picsum.photos/ https://picsum.photos/v2/list

// Nutzen kannst du dafür.:

// figure-Element
// createElement()
// appendChild()
// window.open() könnte für dich nützlich sein

// ===================================================
//      	 		Navigation
// ===================================================

const navigationBtn = document.body.querySelectorAll(".nav-btn");
const outputGallery = document.body.querySelector(".gallery__wrapper");
let pageNumber = 1;

const navigation = () => {
	for (let i = 0; i < navigationBtn.length; i++) {
		navigationBtn[i].addEventListener("click", () => {
			if (i % 2 === 0) {
				pageNumber--;
				if (pageNumber < 1) {
					pageNumber = 1;
				}
			} else {
				pageNumber++;
			}
			requestFetch();
		});
	}
};

// ===================================================
//      	 		Fetch Picsum API
// ===================================================

const requestFetch = () => {
	outputGallery.innerHTML = "";
	fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=52`)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error("Fetch hat nicht funktioniert!");
			}
		})
		.then((data) => {
			data.forEach((siglePictureObj) => {
				addNewContent(siglePictureObj);
			});
			navigation();
			galleryObserver();
		})
		.catch((error) => console.log(error));
};

requestFetch();

// ===================================================
//      	 		Add New Content
// ===================================================

const addNewContent = (siglePictureObj) => {
	const gallery__wrapper = document.querySelector(".gallery__wrapper");
	const newFigure = document.createElement("figure");
	const newImage = document.createElement("img");
	const newFigcaption = document.createElement("figcaption");
	const newButton = document.createElement("button");

	newImage.setAttribute("src", `${siglePictureObj.download_url}`);
	newImage.setAttribute("alt", `${siglePictureObj.author}`);
	newImage.setAttribute("height", "215");

	newFigcaption.textContent = siglePictureObj.author;

	newButton.addEventListener("click", () => {
		window.open(siglePictureObj.url, "_blank");
	});

	newButton.setAttribute("type", "button");
	newButton.textContent = `See more`;
	newFigure.append(newImage, newFigcaption, newButton);
	gallery__wrapper.appendChild(newFigure);
};

// ===================================================
//      	 	Intersection Observer
// ===================================================

const galleryObserver = () => {
	const allFigure = document.querySelectorAll("figure");

	// Options für IntersectionObserver
	const options = {
		root: null,
		rootMargin: "200px",
		threshold: 0,
		delay: 500,
	};

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

	allFigure.forEach((allFigure) => {
		moveObserver.observe(allFigure);
	});
};
