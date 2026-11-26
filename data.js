// Spørsmål og statiske, pregenererte svar (skala 1–5).
const QUESTIONS = [
  { id: "q1",  tema: "Jobbtrygghet",          tekst: "Jeg føler meg trygg på at jobben min er sikker." },
  { id: "q2",  tema: "Psykologisk trygghet",  tekst: "Jeg kan si min mening uten å frykte negative konsekvenser." },
  { id: "q3",  tema: "Feilkultur",            tekst: "Det er greit å gjøre feil og lære av dem i teamet vårt." },
  { id: "q4",  tema: "Arbeidsmengde",         tekst: "Arbeidsmengden min er håndterbar." },
  { id: "q5",  tema: "Samarbeid",             tekst: "Jeg får hjelp fra kollegaer når jeg trenger det." },
  { id: "q6",  tema: "Tydelige forventninger", tekst: "Jeg vet hva som forventes av meg." },
  { id: "q7",  tema: "Faglig utvikling",      tekst: "Jeg får brukt og utviklet kompetansen min." },
  { id: "q8",  tema: "Anerkjennelse",         tekst: "Jeg får anerkjennelse for arbeidet jeg gjør." },
  { id: "q9",  tema: "Balanse",               tekst: "Jeg har god balanse mellom jobb og fritid." },
  { id: "q10", tema: "Trivsel totalt",        tekst: "Jeg vil anbefale teamet som arbeidsplass." }
];

const PEOPLE = ["Martin", "Linn", "Silje", "Kåre", "Olav"];

const SCALE = ["Helt uenig", "Uenig", "Nøytral", "Enig", "Helt enig"];

// Ukentlige runder med pregenererte svar. Svar i samme rekkefølge som QUESTIONS.
const ROUNDS = [
  {"dato":"2026-10-05","svar":{"Martin":[4,5,4,4,5,4,5,3,4,4],"Linn":[5,4,5,3,4,5,5,4,2,4],"Silje":[4,5,5,4,5,2,5,2,5,4],"Kåre":[4,2,2,5,5,3,3,3,5,3],"Olav":[5,5,5,5,5,3,3,3,5,5]},"kommentarer":{"Martin":"Bra start på kvartalet.","Linn":"Trives godt.","Kåre":"Alt ok."}},
  {"dato":"2026-10-12","svar":{"Martin":[5,4,5,4,4,5,4,3,4,4],"Linn":[5,4,4,3,4,5,5,4,3,3],"Silje":[3,3,5,5,5,3,4,1,5,4],"Kåre":[4,3,3,5,4,3,4,3,5,3],"Olav":[5,5,5,5,5,4,3,4,5,5]},"kommentarer":{"Silje":"Savner tydeligere prioriteringer.","Olav":"Bra team!"}},
  {"dato":"2026-10-19","svar":{"Martin":[5,5,3,4,5,3,4,3,4,5],"Linn":[5,4,4,3,4,5,5,5,2,4],"Silje":[4,4,4,5,4,3,4,1,5,4],"Kåre":[4,3,3,4,4,3,4,3,5,3],"Olav":[5,4,5,5,5,4,4,4,5,5]},"kommentarer":{"Martin":"Fin sprint."}},
  {"dato":"2026-10-26","svar":{"Martin":[5,5,4,4,5,4,4,3,3,4],"Linn":[5,3,4,3,4,5,5,5,3,4],"Silje":[4,4,5,5,5,3,4,2,5,3],"Kåre":[4,4,4,3,4,2,3,3,5,2],"Olav":[5,5,5,5,5,4,4,4,5,5]},"kommentarer":{"Linn":"Spennende oppgaver.","Olav":"Fikk gå på kurs, takk."}},
  {"dato":"2026-11-02","svar":{"Martin":[5,5,4,3,5,3,4,3,4,4],"Linn":[5,4,4,3,4,4,5,4,2,4],"Silje":[3,3,5,5,5,3,3,2,5,4],"Kåre":[2,3,4,5,5,3,2,3,5,3],"Olav":[3,5,5,5,5,5,4,4,5,5]},"kommentarer":{"Martin":"Litt uklart hva omorganiseringen betyr.","Silje":"Usikker på ny struktur.","Kåre":"Bekymret for omorganiseringen."}},
  {"dato":"2026-11-09","svar":{"Martin":[3,4,4,3,5,4,4,3,3,3],"Linn":[5,4,5,2,3,5,5,5,2,4],"Silje":[4,4,5,4,4,4,4,3,4,5],"Kåre":[1,3,2,3,4,3,3,3,4,3],"Olav":[4,5,5,4,5,4,3,4,5,5]},"kommentarer":{"Martin":"Mye å gjøre før release.","Linn":"Høyt tempo.","Kåre":"Uklart hvor jeg havner."}},
  {"dato":"2026-11-16","svar":{"Martin":[4,5,3,3,5,3,4,3,3,5],"Linn":[4,3,4,2,5,5,4,4,2,3],"Silje":[2,4,4,4,5,3,3,2,4,3],"Kåre":[3,3,3,3,5,3,3,3,4,3],"Olav":[4,5,5,4,5,4,3,4,5,5]},"kommentarer":{"Martin":"Lange dager nå.","Linn":"Merker at det er mye nå.","Silje":"Lite tilbakemelding siste uker.","Kåre":"Fortsatt usikkert.","Olav":"Fint samarbeid i releasen."}},
  {"dato":"2026-11-23","svar":{"Martin":[4,5,4,3,5,4,4,3,3,4],"Linn":[5,4,4,2,4,5,5,4,2,4],"Silje":[3,4,5,4,5,3,4,2,4,4],"Kåre":[2,3,3,3,4,3,3,3,4,3],"Olav":[4,5,5,4,5,4,3,4,5,5]},"kommentarer":{"Martin":"Godt samarbeid, men mye å gjøre før release.","Linn":"Trives, men arbeidsmengden har vært høy i høst.","Silje":"Savner litt mer tilbakemelding fra ledelsen.","Kåre":"Usikkerhet rundt omorganiseringen.","Olav":"Bra team, gjerne flere kurs."}}
];

const STORAGE_KEY = "helsesjekk-svar";

// Svar for én runde (standard: siste). Siste runde overstyres av svar sendt inn fra skjemaet i denne nettleseren.
function getAnswers(roundIndex = ROUNDS.length - 1) {
  const r = ROUNDS[roundIndex];
  const all = {};
  for (const p of PEOPLE) all[p] = { svar: r.svar[p].slice(), kommentar: r.kommentarer[p] || "" };
  if (roundIndex !== ROUNDS.length - 1) return all;
  let local = {};
  try { local = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch (e) {}
  for (const [navn, data] of Object.entries(local)) {
    if (PEOPLE.includes(navn)) all[navn] = { ...data, lokal: true };
  }
  return all;
}

function saveAnswer(navn, svar, kommentar) {
  let local = {};
  try { local = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch (e) {}
  local[navn] = { svar, kommentar };
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(local)); return true; } catch (e) { return false; }
}

function resetLocal() {
  try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
}
