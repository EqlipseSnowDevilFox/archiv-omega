let visits =
Number(
localStorage.getItem(
"archiveVisits"
)
) || 0;

visits++;

localStorage.setItem(
"archiveVisits",
visits
);

const levelElement =
document.getElementById(
"observerLevel"
);

const visitElement =
document.getElementById(
"visitCount"
);

if(visitElement){

visitElement.textContent =
"BESUCHE: " + visits;

}

let observerLevel = 0;
let observerName = "UNBEKANNT";

if(visits >= 5){

observerLevel = 1;
observerName = "BEOBACHTET";

}

if(visits >= 10){

observerLevel = 2;
observerName = "ERFASST";

}

if(visits >= 20){

observerLevel = 3;
observerName = "REFERENZIERT";

}

if(visits >= 35){

observerLevel = 4;
observerName = "KATALOGISIERT";

}

if(visits >= 50){

observerLevel = "Ω";
observerName = "MARKIERT";

}

if(levelElement){

levelElement.textContent =
"LEVEL " +
observerLevel +
" — " +
observerName;

}

function observerNotice(text){

if(
typeof systemMessage ===
"function"
){

systemMessage(text);

}

}

if(visits === 5){

observerNotice(
"WIR ERINNERN UNS."
);

}

if(visits === 10){

observerNotice(
"WARUM LESEN SIE DAS NOCH?"
);

}

if(visits === 20){

observerNotice(
"SIE HÄTTEN FRÜHER AUFHÖREN SOLLEN."
);

}

if(visits === 35){

observerNotice(
"ARCHIV REAGIERT."
);

}

if(visits === 50){

observerNotice(
"MARKIERUNG Ω ERFOLGREICH."
);

}

if(visits === 75){

observerNotice(
"BEOBACHTER AKTIV."
);

}

if(visits === 100){

observerNotice(
"SYSTEMAKTE ANGELEGT."
);

}
