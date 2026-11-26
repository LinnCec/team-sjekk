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

// Svar i samme rekkefølge som QUESTIONS.
const STATIC_ANSWERS = {
  "Martin": { svar: [4, 5, 4, 3, 5, 4, 4, 3, 3, 4], kommentar: "Godt samarbeid, men mye å gjøre før release." },
  "Linn":   { svar: [5, 4, 4, 2, 4, 5, 5, 4, 2, 4], kommentar: "Trives, men arbeidsmengden har vært høy i høst." },
  "Silje":  { svar: [3, 4, 5, 4, 5, 3, 4, 2, 4, 4], kommentar: "Savner litt mer tilbakemelding fra ledelsen." },
  "Kåre":   { svar: [2, 3, 3, 3, 4, 3, 3, 3, 4, 3], kommentar: "Usikkerhet rundt omorganiseringen." },
  "Olav":   { svar: [4, 5, 5, 4, 5, 4, 3, 4, 5, 5], kommentar: "Bra team, gjerne flere kurs." }
};

const STORAGE_KEY = "helsesjekk-svar";

// Statiske svar, overstyrt av svar sendt inn fra skjemaet i denne nettleseren.
function getAnswers() {
  const all = JSON.parse(JSON.stringify(STATIC_ANSWERS));
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
