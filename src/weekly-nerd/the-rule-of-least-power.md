---
title: "The rule of least power"
description: "In deze Weekly Nerd sessie deelde Kilian Valkhof zijn visie op de toekomst van HTML en CSS. Hij liet zien hoe we steeds meer met minder kunnen doen – minder JavaScript, meer mogelijkheden in HTML en CSS. Vanuit zijn ervaring als maker van Polypane pleitte hij voor eenvoudiger, robuuster webdevelopment."
authorFirstName: "Killian"
authorLastName: "Valkhof" 
date: 2025-02-05
permalink: /weekly-nerd/{{ title | slugify }}/
---

# Weekly Nerd - Killian Valkhof: *The rule of least power*
Kilian Valkhof, ontwikkelaar van de ontwikkelaarsbrowser *Polypane*, trapte af met een opvallende stelling: zijn hele applicatie had in theorie met alleen CSS gebouwd kunnen worden. Hoewel dit natuurlijk wat gechargeerd is, zat er een duidelijke boodschap achter. Hij verwees naar het principe van *the rule of least power* – kies altijd de minst krachtige taal die het gewenste gedrag kan bereiken. In de praktijk betekent dit: begin met HTML, voeg CSS toe, en gebruik JavaScript alleen als het écht nodig is.

Volgens Kilian luisteren browserbouwers tegenwoordig veel beter naar de wensen van developers. Daardoor krijgen HTML en CSS steeds meer functionaliteiten die voorheen alleen met scripts mogelijk waren.

## Van simpele toggles tot geavanceerde layouts

### Toggles zonder JavaScript
Een standaard checkbox kan verrassend krachtig zijn. Door deze slim te combineren met een label en wat CSS, kun je een custom toggle maken zonder enige JavaScript. Kilian liet zien hoe je via `appearance: none` en pseudo-elementen een schakelaar volledig kunt stijlen, terwijl je toch de toegankelijkheid behoudt.

### Suggesties en kleurkiezers
Met een datalist kun je inputvelden aanvullen met suggesties – handig, lichtgewicht, en zonder extra scripts. Ook het kleurkiezer-inputtype past zich automatisch aan aan de voorkeuren van het systeem (zoals dark mode), wat zorgt voor een consistente gebruikerservaring.

### Smooth scroll, gewoon in CSS
Vroeger had je jQuery nodig voor vloeiende overgangseffecten, maar tegenwoordig volstaat `scroll-behavior: smooth`. Dit kun je zelfs combineren met `prefers-reduced-motion` om gebruikers met bewegingsgevoeligheid niet te overprikkelen.


## Layouttechnieken en interactie

### Sticky en scroll snap
Kilian besprak ook layoutoplossingen die interactiever aanvoelen, zoals `position: sticky` voor navigatie of headers die mee scrollen, en CSS scroll snap om sliders of carrousels intuïtief aan te laten voelen.

### Details, accordions en dialogen
HTML bevat intussen ook elementen als `<details>` en `<dialog>`, waarmee je veel interactieve componenten kunt maken zonder afhankelijk te zijn van frameworks of zware scripts. Zeker dialogen zijn krachtiger geworden met ondersteuning voor modals, knoppen en een `::backdrop` voor visuele focus.


## De toekomst: container queries en :has()

### Container queries
Een van de spannendste vernieuwingen is de introductie van container queries. In plaats van media queries die schermbreedte gebruiken, reageren deze queries op de grootte van een container. Dit maakt component-based design veel responsiever en flexibeler.

### De :has()-selector
Een andere opvallende toevoeging is de `:has()` selector. Daarmee kun je elementen stijlen op basis van de staat van hun kinderen – vergelijkbaar met een if-statement in JavaScript. Zo kun je bijvoorbeeld een formulier visueel aanpassen wanneer een bepaalde optie is aangeklikt.


## Experimenten: field sizing, masonry en selectlists

Kilian sloot af met een kijkje in de toekomst van CSS:
- **Field sizing** laat inputvelden automatisch meeschalen met de ingevoerde tekst.
- **Masonry layout** wordt binnenkort ondersteund via `display: grid`, zonder JavaScript.
- **Selectlists** zijn nieuwe, volledig stylable alternatieven voor de `<select>`.

Deze experimenten zijn nog in ontwikkeling, maar ze beloven veel gemak én designvrijheid.

## Reflectie

Wat ik bijzonder vond aan deze sessie is dat Kilian me anders liet kijken naar de verhouding tussen HTML, CSS en JavaScript. Ik gebruik vaak automatisch JavaScript als ik iets interactiefs wil bouwen, maar deze talk liet zien dat dat lang niet altijd nodig is. Door juist in de beperkingen van HTML en CSS te denken, word je gedwongen om creatiever en efficiënter te werken.

Daarnaast vond ik het inspirerend om te zien hoeveel er nog aankomt binnen CSS. Container queries en `:has()` bieden een nieuwe manier van denken over componenten en interactie, wat ik zeker wil toepassen in toekomstige projecten.

Tot slot gaf Kilian me ook een geruststellend inzicht: oude code blijft meestal gewoon werken. Dat betekent dat je als ontwikkelaar kunt blijven leren en experimenteren, zonder bang te zijn dat je alles opnieuw moet doen. Maar stil blijven staan is geen optie – de ontwikkelingen gaan snel, en je moet wel mee willen.
