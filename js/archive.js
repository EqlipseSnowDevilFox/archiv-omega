function getUnlockedRecords(){

const visits =
Number(
localStorage.getItem(
"archiveVisits"
)
) || 0;

return records.filter(record=>{

if(record.id === "SYS-001" && visits < 20)
return false;

if(record.id === "OBS-001" && visits < 35)
return false;

if(record.id === "SYS-017" && visits < 50)
return false;

if(record.id === "Ω-001" && visits < 75)
return false;

if(record.id === "Ω-004" && visits < 100)
return false;

return true;

});

}

let records = [

{
id:"G-0019",
title:"Aschenklinge",
class:"III – Hohe Bedrohung",
status:"Aktiv",
integrity:"100%",

sections:[

{
title:"Bekämpfung",
text:`
Dokumentierte Begegnungen zeigen eine hohe Widerstandsfähigkeit gegenüber körperlicher Gewalt.

Im Durchschnitt sind etwa 25 erfolgreiche Treffer erforderlich, um das Subjekt kampfunfähig zu machen.

Sichtbarer Blutverlust tritt meist erst nach ungefähr 11 Treffern ein.

Die bevorzugte Waffe des Subjekts ist ein Katana.

Direkte Nahkampfkonfrontationen werden nicht empfohlen.
`
},

{
title:"Verhalten",
text:`
G-0019 wird überwiegend in kleinen Gruppen beobachtet, kann jedoch auch allein auftreten.

Das Subjekt zeigt ein ausgeprägtes Aggressionsverhalten und reagiert häufig unmittelbar auf erkannte Ziele.

Mehrere Berichte beschreiben, dass G-0019 einzelne Personen gezielt auswählt und über längere Zeiträume verfolgt.
`
},

{
title:"Merkmale",
list:[
"Trägt eine Dog Tag",
"Führt einen Hammer auf dem Rücken",
"Dunkel leuchtende Augen",
"Kaum vorhandene Kleidung",
"Haut wirkt stark verbrannt"
]
},

{
title:"Gefahreneinschätzung",
list:[
"Aggressivität: Hoch",
"Geschwindigkeit: Mittel",
"Infektionsrisiko: Niedrig",
"Bedrohungsstufe: III"
]
},

{
title:"Archivnotiz Ω",
text:`
Munition war aufgebraucht.

Das Katana war die einzige verfügbare Waffe.

Die Idee war schlecht.
`
}

,{
title:"Verknüpfte Akten",
list:[
"G-0039"
]
}

]
},

{
id:"G-0049",
title:"Der Rabe",
class:"IV – Kritische Bedrohung",
status:"Beobachtung läuft",
integrity:"82%",

sections:[

{
title:"Was ist es?",
text:`
Die einzige bestätigte Sichtung beschreibt G-0049 als einen ungewöhnlich großen schwarzen Raben.

Mehrere Beobachter berichteten von unnatürlichen Bewegungsmustern und Verhaltensweisen.
`
},

{
title:"Sichtungsort",
text:`
Gebiet Ω

Ehemaliges Staatsgefängnis.
`
},

{
title:"Beobachtete Fähigkeiten",
text:`
Das Subjekt zeigte keine erkennbare Scheu gegenüber Infizierten oder Menschen.

Mehrere Zeugen berichteten, dass sich G-0049 über längere Zeiträume bewegungslos beobachten ließ.
`
},

{
title:"Anomalie",
text:`
Während der Sichtung wurden zwei unterschiedliche Infiziertenarten in unmittelbarer Nähe des Subjekts registriert.
`
},

{
title:"Mögliche Fähigkeit",
list:[
"Teleportation unbekannter Infiziertenarten",
"Räumliche Verlagerung",
"Nicht dokumentierte Mutation"
]
},

{
title:"Archivvermerk",
text:`
Ein zweiter Bericht wurde angekündigt.

Er wurde nie eingereicht.
`
}

,{
title:"Referenzen",
list:[
"G-0029",
"Ω-001"
]
}

]
},

{
id:"G-0029",
title:"DATEI WIEDERHERGESTELLT",
class:"Ω",
status:"UNBEKANNT",
integrity:"17%",
corrupted:true,

sections:[

{
title:"Beschreibung",
text:`
Weibliches Subjekt.

Lange ███████ Haare.

Weißes ███████████.

Gesicht nicht eindeutig dokumentierbar.
`
},

{
title:"Verhalten",
text:`
Nach Sichtkontakt erfolgt häufig eine █████████.

Mehrere Zeugen beschrieben das Gefühl, von G-0029 █████████ worden zu sein.
`
},

{
title:"Archivnotiz",
text:`
"Sie folgt nicht der Gruppe."

"Sie folgt █████."
`
}

]
},

{
id:"G-0039",
title:"DATEI WIEDERHERGESTELLT",
class:"█████",
status:"AKTIV",
integrity:"11%",
corrupted:true,

sections:[

{
title:"Beschreibung",
text:`
Humanoides Subjekt.

Ähnlichkeit zu G-0019: ███%
`
},

{
title:"Mitgeführtes Objekt",
text:`
██████████████

Barhocker

██████████████
`
},

{
title:"Interne Notiz",
text:`
Das Problem ist nicht der erste Schlag.

Das Problem ist, dass er ███████████.
`
}

]
},

{
id:"SYS-001",
title:"SYSTEMFRAGMENT",
class:"SYSTEM",
status:"ARCHIVIERT",
integrity:"63%",
hidden:true,

sections:[

{
title:"LOG 17",
text:`

<div class="terminalBlock">

<div class="terminalHeader">
LOG 17
</div>

<div class="terminalLine">
> loading archive log...
</div>

<div class="terminalLine">
[OK]
</div>

<div class="terminalLine">
Die Akte wurde gelöscht.
</div>

<div class="terminalLine">
Sie erscheint weiterhin.
</div>

<div class="terminalLine">
Mehrere Versuche zur Entfernung
waren erfolglos.
</div>

</div>

`
},

{
title:"ANHANG",
text:`
"Wenn Sie dies lesen können,
hat das Archiv erneut versagt."
`
}

]
},

{
id:"OBS-001",
title:"OBSERVER.AKT",
class:"Ω",
status:"VERSCHLÜSSELT",
integrity:"???",
hidden:true,

sections:[

{
title:"PROFIL",
text:`
Wiederholter Zugriff festgestellt.

Mehrfache Akteneinsicht dokumentiert.
`
},

{
title:"STATUS",
text:`
BEOBACHTET.
`
}

]
}

,{
id:"Ω-001",
title:"PROTOKOLL NULL",
class:"Ω",
status:"VERSIEGELT",
integrity:"4%",
hidden:true,
corrupted:true,

sections:[

{
title:"ARCHIVHINWEIS",
text:`
Diese Datei wurde mehrfach gelöscht.

Die Datei erscheint weiterhin.

Der Ursprung konnte nicht bestimmt werden.

Es existiert kein Eintrag zur Erstellung dieser Akte.
`
},

{
title:"ERSTER FUND",
text:`
Die älteste bekannte Referenz stammt aus einem Bericht
über G-0049.

Der Bericht ist unvollständig.

Mehrere Seiten fehlen.
`
},

{
title:"LETZTER EINTRAG",
text:`
"Es begann mit dem Raben."

"Danach folgte █████."

"Danach folgte █████."

"Danach folgte niemand mehr."
`
},

{
title:"SYSTEMVERMERK",
text:`
WARNUNG

Diese Datei verweist auf mehrere
nicht existente Akten.

Ω-004

Ω-017

OBS-NULL
`
},

{
title:"ANHANG",
text:`
Wenn diese Datei geöffnet wurde,
ist die Referenz bereits aktiv.

Weitere Informationen konnten
nicht wiederhergestellt werden.
`
}

]
},


]


function loadArchive(){

buildSidebar();

}

function buildSidebar(){

const recordList =
document.getElementById(
"recordList"
);

recordList.innerHTML = "";

getUnlockedRecords()
.forEach(record=>{

const div =
document.createElement(
"div"
);

div.className =
"record";

div.textContent =
record.id;

div.onclick = ()=>{


    
if(
record.id === "Ω-001" &&
record.openCount >= 2
){

record.sections[2].text = `

"Es begann mit dem Raben."

"Danach folgte █████."

`;

}

if(
record.id === "Ω-001" &&
record.openCount >= 5
){

record.sections[2].text = `

"Es begann mit dem Raben."

"Danach folgte █████."

"Danach folgte niemand mehr."

`;

}

if(
record.id === "Ω-001" &&
record.openCount >= 10
){

record.sections[2].text = `

"Es begann mit dem Raben."

"Danach folgte niemand mehr."

"Die Datei wurde geschlossen."

"Sie wurde erneut geöffnet."

`;

}

record.openCount =
(record.openCount || 0);

if(record.openCount >= 2){

record.sections[2].text = `

"Es begann mit dem Raben."

"Danach folgte █████."

`;

}

if(record.openCount >= 5){

record.sections[1].text = `

"Es begann mit dem Raben."

"Danach folgte █████."

"Danach folgte niemand mehr."

`;

}

record.openCount =
(record.openCount || 0) + 1;


/* G-0029 Mutation */

if(
record.id === "G-0029" &&
record.openCount >= 5
){

record.sections[2].text = `

"Sie folgt nicht der Gruppe."

"Sie folgt Ihnen."

`;

}

if(
record.id === "G-0029" &&
record.openCount >= 20
){

record.sections[2].text = `

"Sie folgt Ihnen."

"Sie weiß, dass Sie lesen."

"Sie weiß,
dass Sie zurückkommen."

`;

}


/* G-0039 Mutation */

if(
record.id === "G-0039" &&
record.openCount >= 15 &&
!record.mutated
){

record.mutated = true;

record.sections.push({

title:"NEUER EINTRAG",

text:`

Der ursprüngliche Bericht
war unvollständig.

Das Problem war nie
der erste Schlag.

`

});

}

openRecord(record);

};

recordList.appendChild(
div
);

});

}

function showBootSequence(
record,
callback
){

const viewer =
document.getElementById(
"viewer"
);

viewer.innerHTML = "";

let bootLines = [

"> mount archive",

"[OK]",

"> locate file",

"[OK]",

`> open ${record.id}`,

"[OK]",

"> verify integrity",

`${record.integrity}`

];

if(record.corrupted){

bootLines.push(

"> verify checksum",
"[FAIL]",

"> attempting recovery",
"[OK]",

"> rebuilding fragments",
"[OK]",

"> corruption remains",
"[WARNING]"

);

}

if(record.id === "Ω-001"){

bootLines.push(

"> searching origin",
"[FAIL]",

"> searching author",
"[FAIL]",

"> searching creation date",
"[FAIL]",

"> anomaly confirmed",
"[WARNING]"

);

}


else{

bootLines.push(
"[SYS] DATEI FREIGEGEBEN"
);

}

if(record.class === "Ω"){

bootLines.push(

"> omega protocol",

"[ACTIVE]",

"> unauthorized reference",

"[WARNING]",

"> observer flag",

"[FOUND]"

);

}

let index = 0;

function nextLine(){

if(index >= bootLines.length){

setTimeout(
callback,
500
);

return;

}

const line =
document.createElement(
"div"
);

let text =
bootLines[index];

let i = 0;

const typer =
setInterval(()=>{

line.textContent +=
text[i] || "";

i++;

if(i > text.length){

clearInterval(
typer
);

}

},15);

viewer.appendChild(
line
);

viewer.scrollTop =
viewer.scrollHeight;

index++;

setTimeout(
nextLine,
350
);

}

nextLine();

}

function openRecord(record){

showBootSequence(
record,
()=>{

if(record.id === "OBS-001"){

const visits =

Number(
localStorage.getItem(
"archiveVisits"
)
) || 0;

let profile = `

Wiederholter Zugriff festgestellt.

Mehrfache Akteneinsicht dokumentiert.

`;

if(visits >= 50){

profile = `

Wiederholter Zugriff festgestellt.

Verhaltensmuster gespeichert.

Subjekt zeigt
anhaltendes Interesse
an korrupten Dateien.

`;

}

if(visits >= 100){

profile = `

Archivzugriffe analysiert.

Rückkehrwahrscheinlichkeit:
98%.

Subjekt kehrt zurück.

`;

}

record.sections[0].text =
profile;

record.sections[1].text = `

BESUCHE: ${visits}

STATUS:
BEOBACHTET.

`;

}

let html = `

<div class="dossierHeader">

<div class="dossierTitle">
${record.id}
</div>

<h2>
${record.title}
</h2>

<div class="sysTag">
[SYS.STATUS]
</div>

<div class="sysValue">
${record.status}
</div>

<div class="sysTag">
[SYS.KLASSE]
</div>

<div class="sysValue">
${record.class}
</div>

<div class="sysTag">
[ARCHIV.INTEGRITÄT]
</div>

<div class="sysValue">
${record.integrity || "100%"}
</div>

</div>

`;

if(record.class === "Ω"){

html += `

<div class="divider">
Ω
</div>

`;

}

if(record.corrupted){

html += `

<div class="warningBox">

⚠ DATENKORRUPTION ERKANNT

<br><br>

DATEI WIEDERHERGESTELLT

<br>

ARCHIVPRÜFUNG EMPFOHLEN

</div>

<div class="divider">
DATENKORRUPTION
</div>

`;

}

record.sections.forEach(section=>{

html += `

<div class="divider">
ARCHIV
</div>

`;

html += `

<h3 class="sectionTitle">
${section.title}
</h3>

`;

if(section.text){

html += `

<p>
${section.text.replace(/\n/g,"<br>")}
</p>

`;

}

if(section.list){

html += "<ul>";

section.list.forEach(item=>{

const target =
records.find(
r => r.id === item
);

if(target){

const linkClass =

item.startsWith("Ω") ||
item.startsWith("OBS")

? "omegaLink"
: "recordLink";

html += `
<li>
<a
class="${linkClass}"
data-record="${item}"
href="#"
>
${item}
</a>
</li>
`;

}else{

html += `
<li>${item}</li>
`;

}

});

html += "</ul>";

}

});

html = html.replace(
/█{3,}/g,
match =>
`<span class="redacted">${match}</span>`
);

document.getElementById(
"viewer"
).innerHTML = html;

document
.querySelectorAll(".recordLink")
.forEach(link=>{

link.addEventListener(
"click",
e=>{

e.preventDefault();

const id =
link.dataset.record;

const target =
records.find(
r=>r.id === id
);

if(target){

openRecord(
target
);

}

});

});

});

}

setInterval(()=>{

const redactedBlocks =

document.querySelectorAll(
".redacted"
);

if(
redactedBlocks.length === 0
)
return;

if(
Math.random() > 0.5
)
return;

const block =

redactedBlocks[
Math.floor(
Math.random() *
redactedBlocks.length
)
];

const original =

block.dataset.original ||
block.textContent;

block.dataset.original =
original;

const chars =

[
"█",
"▓",
"▒"
];

block.textContent =

original
.split("")
.map(()=>

chars[
Math.floor(
Math.random() *
chars.length
)
]

)
.join("");

setTimeout(()=>{

block.textContent =
original;

},120);

},7000);

setInterval(()=>{

if(
Math.random() > 0.985
){

systemMessage(
"ARCHIVKONFLIKT ERKANNT"
);

const viewer =
document.getElementById(
"viewer"
);

viewer.style.opacity =
"0.6";

setTimeout(()=>{

viewer.style.opacity =
"1";

},300);

}

},30000);

setInterval(()=>{

if(
Math.random() > 0.995
){

const target =

records.find(
r=>r.id==="G-0039"
);

if(target){

systemMessage(
"REFERENZ GEÄNDERT"
);

openRecord(
target
);

}

}

},60000);

