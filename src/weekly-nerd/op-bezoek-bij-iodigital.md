---
title: "Op bezoek bij Io Digital"
description: "Een inspirerende sessie bij iO over AI-steminterfaces, scraping bots en component testing. Van hands-on codevoorbeelden tot slimme oplossingen voor API-beperkingen deze middag zat vol tech én praktijk."
authorFirstName: "op bezoek bij"
authorLastName: "Io Digital" 
date: 2025-05-14
permalink: /weekly-nerd/{{ title | slugify }}/
layout: _layouts/detail-page.njk
styles: ["detail-page.css"]
---

## Weekly Nerd – iO Agency Talks: *Van AI tot Automatisch Testen*
Bij iO draait alles om beleving “Experience is everything”. Tijdens een inspirerende middag op locatie namen drie sprekers ons mee in hun expertise: van AI-gedreven voice interfaces tot slimme scraping en geautomatiseerd testen.

### Dave Witter – The Rise of AI-Powered Voice Interfaces (on the web)
Dave Witter, Chapter Lead Frontend bij iO en Google Developer Expert, opende de middag met een vooruitblik op AI en voice. Hij schetste hoe voice-technologie zich de afgelopen decennia heeft ontwikkeld van eenvoudige spraakherkenning in de jaren 50 tot Alexa, Siri en nu ChatGPT-integraties op het web.

<br>

Hij liet zien hoe je met de Web Speech API (voor input) en Speech Synthesis API (voor output) eenvoudige voice interfaces kunt bouwen in de browser. Met behulp van ChatGPT kun je daar context en persoonlijkheid aan toevoegen. Denk aan een AI die niet alleen luistert en spreekt, maar ook reageert als een karakter met een visuele houding (bijvoorbeeld ‘listening’, ‘idle’, ‘responding’).

<br>

Zijn boodschap was duidelijk: bouw toffe dingen met deze technologie praat er niet alleen over.

### Steve – Twitter Follow Bot & Scraping Adventure
Steve dook in de technische kant van automatisering en scraping met een verhaal over het bouwen van een Twitter Follow Bot. Zijn doel: automatisch alle volgers van een account opslaan én volgen.

<br>

Omdat de Twitter API veel restricties heeft (zoals een limiet van één actie per 10 minuten en toegang tot slechts 10% van de endpoints), besloot hij met Puppeteer het front-end te scrapen. In combinatie met tools als Docker, N8N, en Postgres, bouwde hij een systeem dat zich menselijk gedraagt: met willekeurige pauzes, vertraagde acties en foutafhandeling.

<br>

Hoewel scraping veel obstakels met zich meebrengt zoals login requirements en pagination toonde Steve een creatieve en volhardende aanpak die technisch indrukwekkend was.

### Clarke Verdel – Test als een Echte Gebruiker
Clarke sloot af met een talk over het automatisch testen van componenten op een manier die zo dicht mogelijk bij echte gebruikerservaring komt. Als T-Shaped Engineer bij Miele X (en werkend bij iO) legde hij uit waarom testen meer is dan alleen checken of iets werkt.

<br>

Aan de hand van de Testing Trophy liet hij zien hoe tools als linters, typecheckers, componenttests en integratietests samen een solide basis vormen. Clarke benadrukte ook het belang van browser-based component testing in Vite, met geïsoleerde testen én gesimuleerde gebruikersdata.

<br>

Het doel: vertrouwen opbouwen in je UI, net zoals een gebruiker dat zou doen.

### Mijn reflectie
Ik vond het een hele interessante en indrukwekkende middag. Wat me vooral bijbleef, waren de verhalen achter de techniek zoals de Twitter scraper bot die oorspronkelijk voor een klant werd gebouwd die het gebruikte voor OnlyFans. Dat soort context maakt het ineens veel tastbaarder en leuker om naar te luisteren.

<br>

Ook vond ik het sterk dat elke spreker live voorbeelden liet zien van hun werk. Je merkte echt dat ze wisten waar ze het over hadden en hun verhaal goed konden overbrengen. Hoewel het niet per se onderwerpen zijn waar ik zelf direct mee aan de slag wil, heeft het me wel nieuwsgierig gemaakt naar wat er allemaal mogelijk is binnen frontend en automatisering.
