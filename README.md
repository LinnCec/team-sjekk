# Team helsesjekk

Enkel helsesjekk for utviklerteamet (Martin, Linn, Silje, Kåre, Olav).

- `index.html` – skjema med 10 spørsmål (skala 1–5)
- `dashboard.html` – oversikt over svar og teamfornøydhet (Chart.js)
- `data.js` – spørsmål og pregenererte svar

Ingen database ennå. Svar fra skjemaet lagres kun i nettleseren (localStorage).

## Kjør lokalt
Åpne `index.html` i nettleseren, eller kjør `python3 -m http.server` og gå til http://localhost:8000.

## Publisering
Hostes med GitHub Pages: Settings → Pages → Deploy from branch → `main` / root.
