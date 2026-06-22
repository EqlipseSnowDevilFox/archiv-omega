const archiveEvents = [

"REFERENZIERUNG FESTGESTELLT",
"ARCHIVKONFLIKT ERKANNT",
"DATENKORRUPTION ERKANNT",
"BEOBACHTER AKTIV",
"INTEGRITÄTSPRÜFUNG FEHLGESCHLAGEN",
"Ω-PROTOKOLL REGISTRIERT",
"UNBEKANNTER ZUGRIFF",
"VERGLEICH VERWEIGERT",

"ANOMALIE REGISTRIERT",
"DATEI BESCHÄDIGT",
"NICHT AUTORISIERTER ZUGRIFF",
"OBSERVER AKTUALISIERT",
"ARCHIV REAGIERT",
"SEKTOR Ω AKTIV",
"REFERENZKONFLIKT",
"SYSTEMAKTE GEÄNDERT"

];

function randomArchiveEvent(){

if(
typeof systemMessage
!== "function"
)
return;

const eventText =

archiveEvents[
Math.floor(
Math.random() *
archiveEvents.length
)
];

systemMessage(
eventText
);

}

setInterval(
randomArchiveEvent,
45000
);
