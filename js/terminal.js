let omegaClicks = 0;

const terminal =
document.getElementById("terminal");

const output =
document.getElementById("terminalOutput");

const input =
document.getElementById("terminalInput");

let terminalOpened = false;

document
.getElementById("omega")
.addEventListener("click", () => {

omegaClicks++;

if(
omegaClicks >= 3 &&
!terminalOpened
){

terminalOpened = true;

terminal.style.display =
"flex";

printLine(
"TERMINAL Ω ONLINE"
);

printLine(
"EINGABE: HELP"
);

input.focus();

}

});

function printLine(text){

const div =
document.createElement("div");

output.appendChild(div);

let i = 0;

const timer =
setInterval(()=>{

div.textContent +=
text[i] || "";

i++;

output.scrollTop =
output.scrollHeight;

if(i > text.length){

clearInterval(timer);

}

},15);

}

input.addEventListener(
"keydown",
e=>{

if(e.key !== "Enter")
return;

const cmd =
input.value
.toLowerCase()
.trim();

printLine(
"> " + cmd
);

switch(cmd){

case "trace":

    printLine(
    "REFERENZSUCHE..."
    );

    setTimeout(()=>{

        printLine(
        "G-0029 → G-0039"
        );

        printLine(
        "G-0049 → Ω"
        );

    },1000);

break;

case "unlock":

    localStorage.setItem(
    "archiveVisits",
    25
    );

    printLine(
    "FREIGABESTUFE ERHÖHT"
    );

    printLine(
    "VERSTECKTE AKTEN FREIGESCHALTET"
    );

    buildSidebar();

break;

case "observe":

    const visits =

    Number(
    localStorage.getItem(
    "archiveVisits"
    )
    ) || 0;

    printLine(
    "OBSERVER STATUS"
    );

    printLine(
    "BESUCHE: " +
    visits
    );

break;

case "help":

printLine("help");
printLine("scan");
printLine("observer");
printLine("recover");
printLine("visits");
printLine("integrity");
printLine("clear");
printLine("exit");

break;

case "scan":

printLine(
"SCANNEN..."
);

setTimeout(()=>{

printLine(
"2 REFERENZFEHLER GEFUNDEN"
);

},1000);

break;

case "observer":

printLine(
"BEOBACHTER AKTIV"
);

break;

case "recover":

printLine(
"DATEI WIEDERHERGESTELLT"
);

break;

case "visits":

printLine(
"BESUCHE: " +
(
localStorage.getItem(
"archiveVisits"
) || 0
)
);

break;

case "integrity":

printLine(
"ARCHIVINTEGRITÄT: 87%"
);

break;

case "clear":

output.innerHTML = "";

break;
case "omega":

printLine(
"Ω-PROTOKOLL ERKANNT"
);

setTimeout(()=>{

printLine(
"ARCHIVSTATUS INSTABIL"
);

},1000);

setTimeout(()=>{

printLine(
"BEOBACHTER REGISTRIERT"
);

},2000);

break;

case "exit":

terminal.style.display =
"none";

break;

default:

printLine(
"UNBEKANNTER BEFEHL"
);

}

input.value = "";

});

document
.getElementById(
"closeTerminal"
)
.addEventListener(
"click",
()=>{

terminal.style.display =
"none";

}
);

document.addEventListener(
"keydown",
e=>{

if(e.key === "Escape"){

terminal.style.display =
"none";

}

}
);

window.systemMessage =
function(text){

printLine(
"[SYS] " + text
);

document.body.style.opacity =
"0.92";

setTimeout(()=>{

document.body.style.opacity =
"1";

},120);}