# Projektinformationen für Masterarbeit
Ich möchte für unsere Masterprojekt eine Informationsseite erstellen, die alle wichtigen Details und Anforderungen zusammenfasst. Diese Seite soll sowohl für die Studierenden als auch für die Betreuer hilfreich sein.

### **Wichtig** Projekt der anderen Gruppe als Inspritaion
Eine anderen Gruppe hat bereits eine ähnliche Seite erstellt, die als Vorlage dienen kann. Ich habe sie nochmal geklont und ist unter /home/fergen/IdeaProjects/project-website/ zu finden.Die Styling Ideen sollen oder können übernommen werden. 
Aber inhaltlich soll es eine eigenständige Seite werden. 

# Worum geht es in der masterarbeit? 
Wir arbeiten mit einem Unternehmen, die Sensoren entwickelt, welchees Livewasserdaten sammelt und unserer aufgabe ist es diese Daten zu visualisieren und aufzubereiten.
Wir haben bereits eine Seite wo wir die ganzen sensoren und eine karte etc haben dass ist die produktivseite www.marlin-live.com


# Informationen 

## Textuelle

Informationen die werde ich versuchen die zu sammeln.
 
MARLIN
Maritime Live Information

Live Messungen in Häfen von Wasser und Luft Bedingungen!

Kooperation:
Hochschule Flensburg, SOOP

Wie läuft die smarte Hafenanalyse?
SOOP stellt Sensorboxen für Häfen bereit, welche die Messwerte per loRaWan übermittelt. Die Sensorboxen wind dabei teilweise autark und werden per Solarzellen betrieben.
Die Messwerte werden dann von SOOP veröffentlicht und durch ein Team aus Studenten von der Hochschule Flensburg aufbereitet und visualisiert.

Messwerte:
Wassertemperatur
Wasserstand
Wellenhöhe
Luftdruck
Luftfeuchtigkeit
Windrichtung
Windrichtung Böen
Windgeschwindigkeit
Windgeschwindigkeit Böen

Der aktuelle Projektfortschritt
Das Projekt wird im Rahmen des Masterstudiengangs „Angewandte Informatik“ von einem Team aus fünf Studierenden geführt. Das Team entwickelt dabei die Aufbereitung und Visualisierung der Messwerte. Das Projekt läuft bis zum April 2026.
Das Projekt ist in mehrere Meilensteine gegliedert, die im Folgenden aufgelistet werden.

Konzepterstellung:
Zu Beginn wird eine Anforderungensanalyse und eine Recherche zu verwandten Arbeiten durchgeführt. Des Weiteren werden erste Prototypen für die Visualisierung vorgestellt.

MVP (Minimal Viable Product)
Der MVP ist die erste technische Umsetzung des vorgestellten Konzepts. Das Feedback zu der Grundidee und dem ersten funktionalen Entwurf, ist ausschlaggebend für die weitere Entwicklung des Projekts.

Release 1 - Webseite
Der Release 1 enthält eine funktionelle, öffentliche Webseite, die eine Weiterentwicklung des MVP abbildet. Diese ist auf einem feststehenden Technologiestack aufgebaut.

Release 2 - App
Der zweite Release enthält das Projekt als App, die öffentlich und funktional bereit steht. Diese hat den Umfang der Webseite, ist allerdings für das Handy optimiert und bringt einige neue Features mit.
Release 3 - Public Displays
Der finale Release ergänzt das Projekt um eine Ansicht der Senordaten auf öffentlichen Displays z.B. im Hafenmeisterbüro oder an Stränden.
Damit wird die Verfügbarkeit der Daten umfassend abgerundet.

## Seiten
#### Ich habe auf der Produktivseite www.marlin-live.com  folgende Seiten gefunden die wir benutzen können baue die nicht auf der Produktivseite einfach nach

```json
{
  "about": {
    "title": "MARLIN",
    "subtitle": "Marine Research & Live Information Network",
    "description": "Echtzeitdaten zu Wetter und Meeresbedingungen aus verschiedenen Marinas",
    "ourFeatures": "Unsere Features",
    "ourTeam": "Unser Team",
    "aboutProject": "Über das Projekt",
    "projectDescription": "MARLIN ist ein innovatives Masterprojekt zur Erfassung und Visualisierung von Meeres- und Wetterdaten. Unsere Sensornetzwerke in verschiedenen Marinas sammeln kontinuierlich Daten, die über diese Plattform zugänglich gemacht werden.",
    "visitWebsite": "Projektwebseite besuchen",
    "learnMore": "Mehr erfahren →",
    "teamDescription": "Studenten des Master Angewandte Informatik, die gemeinsam das MARLIN-Projekt entwickeln"
  },
  "features": {
    "interactiveMap": "Interaktive Karte",
    "interactiveMapDesc": "Visualisierung aller Sensoren mit Echtzeitdaten und interpolierten Werten zwischen den Messpunkten.",
    "dashboard": "Dashboard & Historische Daten",
    "dashboardDesc": "Detaillierte Analyse einzelner Sensoren mit Zeitreihen und historischen Trends.",
    "api": "API für Entwickler",
    "apiDesc": "RESTful API für den programmatischen Zugriff auf alle Messdaten."
  },
  "team": {
    "daniel": {
      "role": "Backend-Entwicklung & API",
      "description": "Verantwortlich für die Server-Infrastruktur und API-Entwicklung. Expertise in Node.js und Datenbank-Design.",
      "skills": ["Node.js", "PostgreSQL", "REST APIs", "Docker"]
    },
    "fatih": {
      "role": "Frontend & Mobile App",
      "description": "Entwickelt die Benutzeroberfläche und mobile Anwendung. Spezialisiert auf React Native und moderne UI/UX.",
      "skills": ["React Native", "TypeScript", "Tamagui", "UI/UX Design"]
    },
    "julian": {
      "role": "Datenanalyse & Algorithmen",
      "description": "Analysiert Sensordaten und entwickelt Algorithmen für Dateninterpolation und -vorhersage.",
      "skills": ["Python", "Data Science", "Machine Learning", "Statistik"]
    },
    "krister": {
      "role": "Hardware & IoT",
      "description": "Entwickelt und wartet die Sensorkits. Expertise in Embedded Systems und IoT-Protokollen.",
      "skills": ["Arduino", "Raspberry Pi", "Sensortechnik", "IoT"]
    },
    "tarek": {
      "role": "DevOps & Infrastruktur",
      "description": "Verwaltet die Cloud-Infrastruktur und CI/CD-Pipelines. Sorgt für Skalierbarkeit und Zuverlässigkeit.",
      "skills": ["AWS", "Kubernetes", "CI/CD", "Monitoring"]
    }
  }
}
```

```json
{
"sensors": {
"title": "Sensordaten Erklärung",
"subtitle": "Hier findest du eine einfache Erklärung der wichtigsten Messwerte und wie du sie auf unserer Webseite interpretieren kannst.",
"waterTemperature": "Wassertemperatur",
"waterTempDesc": "Die Wassertemperatur zeigt, wie warm oder kalt das Wasser ist.",
"waveHeight": "Wellenhöhe",
"waveHeightDesc": "Die Wellenhöhe beschreibt, wie hoch die Wasseroberfläche schwappt. Je höher die Welle, desto mehr Kraft steckt dahinter.",
"waterLevel": "Wasserstand",
"waterLevelDesc": "Der Wasserstand zeigt, wie hoch das Wasser im Vergleich zum Normalwert steht. Ein hoher Wasserstand kann z.B. auf Hochwasser hindeuten.",
"standardDeviation": "Standardabweichung",
"standardDeviationDesc": "Die Standardabweichung gibt an, wie stark die Messwerte schwanken. Eine kleine Abweichung bedeutet, dass die Werte stabil sind. Große Abweichungen zeigen, dass sich die Bedingungen schnell ändern.",
"windSpeed": "Windgeschwindigkeit",
"windSpeedDesc": "Die Windgeschwindigkeit zeigt, wie schnell der Wind weht. Starker Wind kann Wellen und Strömungen verstärken.",
"windDirection": "Windrichtung",
"windDirectionDesc": "Die Windrichtung gibt an, aus welcher Richtung der Wind kommt. Sie wird meist als Gradzahl (0° = Norden, 90° = Osten, 180° = Süden, 270° = Westen) angegeben.",
"airPressure": "Luftdruck",
"airPressureDesc": "Der Luftdruck zeigt, wie schwer die Luft auf die Erde drückt. Ein sinkender Luftdruck kann auf schlechtes Wetter hindeuten, ein steigender auf besseres Wetter."
},
"examples": {
"freezing": "Gefriert",
"coldDrink": "Getränk direkt aus dem Kühlschrank",
"wetsuit": "Neoprenanzug empfohlen",
"swimming": "Angenehm zum Schwimmen (Badehose)",
"hotShower": "Heiße Dusche",
"shortPaper": "A4-Blatt (kurze Seite)",
"canKnockChild": "Kann ein Kind umhauen",
"longPaper": "A4-Blatt (lange Seite)",
"canKnockAdult": "Kann einen Erwachsenen umhauen",
"tsunami": "Tsunami",
"wouldKnockTower": "Würde sogar den Eiffelturm umwerfen"
}
}
```


Ich habe auch ein Logo. ist unter ![LOGO.svg](src/assets/LOGO.svg). 

Was ich unbdeingt mahen möchte ist eine Animation mit dem Sensor Logo den ich habe aber erst als nächste ausbaustufe 

DIe Porjektseite soll in etwa so aussehen wie die Seite der anderen Gruppe. Also nicht genau kopieren aber gerne insprieren lassen 
Es soll mpdern und ansprechend aussehen.