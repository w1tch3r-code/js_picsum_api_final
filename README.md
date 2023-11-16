# Quiz – JavaScript-Projekt

## Beschreibung

Dieses JavaScript-Projekt wurde im Rahmen eines Coding-Bootcamps bei supercode.de erstellt. 
Es handelt sich um eine Bildergalerie, welche über eine Picsum-API per fetch("https://picsum.photos/v2/list") generiert wird.

## Tools/Technologien
- HTML5
- CSS3
- Vanilla JavaScript

## Programmablaufplan

Start
|
|--- Setze wrapper auf das DOM-Element mit der Klasse "wrapper"
|
|--- Führe eine HTTP-Anfrage durch:
|    |
|    |--- Verwende die Fetch-API, um die Ressource "https://picsum.photos/v2/list" abzurufen
|         |
|         |--- Überprüfe, ob die Antwort erfolgreich ist
|              |
|              |--- Falls nicht erfolgreich:
|                   |--- Werfe einen Fehler mit der Nachricht "Hier ist etwas schief gelaufen"
|              |
|              |--- Falls erfolgreich:
|                   |--- Parse die Antwort als JSON
|                   |
|                   |--- Für jedes Element in den Daten:
|                        |
|                        |--- Erstelle ein neues Figure-Element
|                        |
|                        |--- Erstelle ein neues Image-Element und setze die Quelle und den Alternativtext
|                        |
|                        |--- Erstelle ein neues Figcaption-Element und setze den Text
|                        |
|                        |--- Erstelle ein neues Button-Element
|                             |
|                             |--- Füge einen Klick-Eventlistener hinzu, der ein neues Fenster mit der URL des Elements öffnet
|                             |
|                             |--- Setze den Text des Buttons auf "See more"
|                        |
|                        |--- Füge das Image, das Figcaption und den Button zum Figure-Element hinzu
|                        |
|                        |--- Füge das Figure-Element zum wrapper hinzu
|
|--- Fehlerbehandlung:
|    |
|    |--- Falls ein Fehler auftritt, gib den Fehler in der Konsole aus
|
End

## Screenshot

### Ansicht der Webseite
![Ansicht der Webseite](./assets/images/screenshot_picsum_fetch.jpg)

## GitHub Live Vorschau

Du findest eine Live Vorschau auf GitHub: [GitHub Live Vorschau](https://w1tch3r-code.github.io/js_picsum_api_final/)

## GitHub Repository

Du findest das gesamte Projekt auf GitHub: [GitHub Repository](https://github.com/w1tch3r-code/js_picsum_api_final)

## Anmerkungen

- Dieses Projekt wurde im Rahmen eines Coding-Bootcamps bei supercode.de erstellt.
- Es handelt sich um eine Bildergalerie, welche über eine Picsum-API per fetch("https://picsum.photos/v2/list") generiert wurde.
- Die README.md-Datei dient auch als Bewerbungsunterlage und präsentiert meine Fähigkeiten in der Webentwicklung.
