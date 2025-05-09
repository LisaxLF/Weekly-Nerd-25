---
title: "Project Fogu Web technology op niet normale apparaten"
description: "In deze talk laat Niels Leenheer zien hoe hij met behulp van Project Fugu en moderne web-API’s een volledig werkende kassademo bouwde in slechts vier weken. Van bonnen printen tot klantendisplays en barcodescanners alles werd aangestuurd via de browser. Een technische deep dive in hoe webtechnologie ook buiten het scherm impact kan hebben."
authorFirstName: "Niels"
authorLastName: "LeenHeer" 
date: 2025-04-09
permalink: /weekly-nerd/{{ title | slugify }}/
---

# Weekly Nerd - Niels Leenheer: *Geld verdienen met Project Fugu*
Tijdens de talk van Niels Leenheer – oprichter van Salonhub – kregen we een kijkje achter de schermen bij het bouwen van een kassasysteem met webtechnologie. Salonhub is software voor onder andere kappers, waarmee klanten online afspraken kunnen maken. Maar deze talk ging over een compleet andere uitdaging: het ontwikkelen van een fysieke demo voor een kassa-oplossing op basis van webtechnologie, binnen vier weken… én in Miami.

## Project Fugu en web-API's

De centrale technologie achter deze demo is **Project Fugu**, een initiatief van onder andere Google om webapps toegang te geven tot functionaliteiten die voorheen alleen native apps hadden. Voor deze demo moest Niels:

- barcodes kunnen scannen  
- klanten een bericht kunnen tonen op een klantenscherm  
- bonnen kunnen printen  

En dat allemaal via de browser.

## Bonnenprinter aansturen via WebUSB

Een belangrijk onderdeel was de bonnenprinter. Via **WebUSB** kun je apparaten opvragen met filters en vervolgens toegang krijgen. Daarna moet je de juiste *interface* selecteren en deze ‘claimen’, zodat je er direct mee kunt praten. Maar dat praten vereist een aparte taal bonnenprinters gebruiken technologie uit de jaren ’70 gebaseerd op ASCII.

Niels vertelde dat je de taal van de printer moet ‘leren spreken’. Unicode en internationale tekens zoals Grieks of Hebreeuws worden niet zomaar ondersteund. Hiervoor heb je zogeheten **codepages** nodig, en Niels bouwde zijn eigen bibliotheek: `codepageEncoder`.

## Afbeeldingen printen

Afbeeldingen printen bleek ook niet triviaal. Je moet:

1. de afbeelding schalen  
2. omzetten naar zwart-wit  
3. een *dithering*-algoritme toepassen (zoals Atkinson)  
4. en de afbeelding vervolgens opdelen in printbare lijnen  

## Kassalade openen

Zelfs het openen van een kassalade bleek een uitdaging. Dit ging via een DK-poort, aangestuurd met een puls. Hiervoor ontwikkelde Niels `ensPocEncoder`. Helaas werkt dit niet met elke printer, omdat er geen standaard bestaat voor dit soort hardware.

## Klantenscherm aansturen

Een klantenscherm aansturen gebeurt via **ESC/POS**, de standaardtaal voor klantendisplays. Niels liet een display zien met twee regels en enkele karakters, met daarop bijvoorbeeld "Welcome to Salonhub". Hiervoor gebruikte hij WebSerial.

Hij vertelde ook iets interessants over hoe in de jaren ’80 computers maar één seriële poort hadden. Als je twee apparaten wilde aansluiten, kon dat via een splitter maar dan moesten beide apparaten dezelfde taal spreken. Je moest de een kunnen initialiseren en de ander tegelijk uitschakelen.

## Barcodescanner

De barcodescanner werkt als een toetsenbord: hij ‘typt’ de barcode inclusief een enter. Maar met **WebHID** kun je direct de hele barcode uitlezen, wat veel efficiënter is dan wachten op toetsaanslagen.

## Reflectie

Ik vond het echt een hele andere wereld waar ik niet eerder bij heb stilgestaan. Het was enorm fascinerend en ontzettend leerzaam, vooral om te zien hoe webtechnologie gekoppeld wordt aan fysieke apparaten. Toch merkte ik dat het voor mij net te technisch en ingewikkeld werd om me er echt in te willen verdiepen. Als talk vond ik het super interessant, maar op inhoudelijk vlak sprak het me net niet helemaal aan.