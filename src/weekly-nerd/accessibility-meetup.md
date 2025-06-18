---
title: "Accesibilty Meeting"
description: "In deze Weekly Nerd special vertelden Erik Kroes en Nienke de Keijzer over digitale toegankelijkheid. Waar Erik praktische oplossingen aanreikte voor veelvoorkomende WCAG-problemen, deelde Nienke haar ervaringen met het ontwerpen van een app voor mensen met een visuele beperking. Samen benadrukten ze het belang van inclusiviteit in ontwerp- en ontwikkelprocessen."
authorFirstName: "IDEA11Y"
authorLastName: "WN Special" 
date: 2025-04-16
permalink: /weekly-nerd/{{ title | slugify }}/
layout: _layouts/detail-page.njk
styles: ["detail-page.css"]
---

## Weekly Nerd: *IDEA11Y – Weekly Nerd Special*

### Talk 1: Erik Kroes – Practical Fixes for Common WCAG Failures

Erik Kroes sprak over toegankelijkheid vanuit een ontwerp- en systeemgerichte benadering. Volgens hem is een toegankelijk product een bruikbaar product dat ook mensen met een beperking volledig kunnen gebruiken. En dat maakt je website uiteindelijk voor iedereen prettiger.

Hij benoemde vier belangrijke pijlers binnen webtoegankelijkheid:

#### 1. Keyboard-navigatie
Gebruikers moeten via de **tab-toets** elk interactief element kunnen bereiken, en met **shift + tab** weer terug kunnen navigeren. Veelvoorkomende fouten zijn:
- Geen skip link
- Focus die niet goed beheerd wordt
- Interactieve elementen als `<div>` in plaats van een `<button>`

#### 2. Contrast
Een goede kleurcontrasten zijn essentieel, zeker bij fel licht. Tools zoals browser-extensies kunnen helpen bij het testen. De WCAG vereist een minimum contrastverhouding van **3:1** voor UI-elementen.

Veelgemaakte fouten zijn:
- Zwakke contrasten door huisstijlkleuren
- Niet-contrastvriendelijke states (bijv. hover of focus)
- Placeholders die te licht zijn

#### 3. Alternatieven
Zorg voor alternatieven bij media:
- Captions bij video
- Transcripties bij podcasts
- Beschrijvende alt-teksten bij afbeeldingen (zeker bij knoppen of links)

#### 4. Sizing
Een ontwerp moet werken op een breed scala aan schermgroottes, van mobiel tot desktop. Test je ontwerp op verschillende apparaten en resoluties. Veel ontwerpen zijn bijvoorbeeld niet getest op een breedte van **320 pixels**.

Veelvoorkomende problemen:
- Ontwerpen die niet geschikt zijn voor kleinere schermen (bijv. mobiel)
- Externe content die niet responsive is

Website: [solidstart.info](https://solidstart.info)

### Talk 2: Nienke de Keijzer – Thinking Outside of the Accessibility Box

Nienke de Keijzer presenteerde haar eindproject, ontwikkeld in samenwerking met GVB. Ze ontwierp een app om het openbaar vervoer toegankelijker te maken voor mensen met een visuele beperking. De app helpt gebruikers om zelfstandig en zelfverzekerd te reizen.

#### Haar aanpak bestond uit:
- **Persoonlijk contact met de doelgroep**
- **Interviews en veldonderzoek**
- **Het testen van ideeën met de doelgroep**

Ze legde uit dat toegankelijkheid meer is dan alleen technische eisen volgen – het gaat ook over empathie en inzicht in de ervaringen van anderen. Toch kwam ze ook obstakels tegen: de doelgroep was klein, en sommige technische eisen waren erg specifiek of ingewikkeld.

### Mijn reflectie

Ik vond deze sessie ontzettend leerzaam omdat het me liet inzien hoe breed het begrip toegankelijkheid eigenlijk is. Vooral de praktische voorbeelden van Erik waren heel toepasbaar voor mijn eigen werk, en gaven me inzicht in hoe je met kleine aanpassingen al een groot verschil kunt maken.

<br>

Wat ik bijzonder vond aan Nienkes verhaal, is dat zij toegankelijkheid vanuit een persoonlijk perspectief benaderde. Ze ging letterlijk op pad met mensen uit haar doelgroep om hun behoeftes écht te begrijpen. Dat vond ik mooi en menselijk, al merk ik dat ik zelf waarschijnlijk iets meer aansluiting voel bij de praktische, visueel-technische kant van toegankelijkheid, zoals die van Erik. 

<br>

Toch vind ik het belangrijk om beide perspectieven mee te nemen in mijn werk als ontwikkelaar en ontwerper.