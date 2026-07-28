# Wymiatacze Nieruchomości — landing page

Jednostronicowy lejek sprzedażowy dla biura nieruchomości działającego w Warszawie
i na Mazowszu. Czysty HTML + CSS + vanilla JS, bez frameworków i kroku builda —
gotowe do wdrożenia bezpośrednio na GitHub Pages.

## Struktura projektu

```
index.html      — cała treść strony (sekcje: hero, o nas, USP, formularz, stopka)
styles.css      — style, mobile-first, kolory w zmiennych CSS (:root)
script.js       — obsługa formularza (log do konsoli + zapis w localStorage)
assets/         — logo, favicon i pozostałe grafiki
```

Treści oznaczone komentarzem `<!-- TODO -->` w `index.html` oraz kolory
w sekcji `:root` w `styles.css` to miejsca do najszybszej podmiany
(tekst roboczy → docelowy, kolorystyka neutralna → kolorystyka marki).

## Podgląd lokalny

Wystarczy otworzyć `index.html` w przeglądarce — strona nie wymaga serwera
ani budowania. Dla wygody można też uruchomić prosty serwer lokalny, np.:

```
python3 -m http.server 8000
```

i wejść na `http://localhost:8000`.

## Publikacja na GitHub Pages

1. Wejdź w repozytorium na GitHub → zakładka **Settings**.
2. W menu po lewej wybierz **Pages**.
3. W sekcji **Build and deployment** → **Source** wybierz **Deploy from a branch**.
4. W polu **Branch** wybierz branch, na którym znajdują się te pliki
   (np. `main` lub branch z tym landing page'em), a jako folder wskaż
   **/ (root)** — pliki `index.html`, `styles.css`, `script.js` leżą
   w katalogu głównym.
5. Zapisz (**Save**). Po chwili GitHub wygeneruje adres w formacie:
   `https://<nazwa-użytkownika>.github.io/<nazwa-repozytorium>/`
6. Wejdź pod ten adres, aby zobaczyć działającą stronę.

Każdy kolejny `push` na wybrany branch automatycznie aktualizuje
opublikowaną wersję strony (zwykle w ciągu 1–2 minut).

## Formularz kontaktowy — stan obecny

Formularz w sekcji „Zostaw kontakt” **nie wysyła jeszcze danych do żadnego
backendu**. Po wysłaniu zgłoszenie jest:

- logowane do konsoli przeglądarki (`console.log`),
- zapisywane w `localStorage` przeglądarki pod kluczem `wymiatacze_leads`.

Docelową integrację (np. z CRM, e-mailem lub arkuszem Google) należy podpiąć
w funkcji `submitLead()` w pliku `script.js`.

## Podmiana treści i zdjęć

- **Teksty** — edytuj bezpośrednio w `index.html`, sekcje są opisane
  komentarzami HTML.
- **Kolory** — zmień wartości zmiennych w bloku `:root` na górze pliku
  `styles.css` (obecnie: granat/grafit + złoty akcent, do dopasowania
  pod wizytówkę klienta).
- **Zdjęcia i logo** — podmień pliki w folderze `assets/` (np. `logo.svg`,
  `favicon.svg`) i podłącz je w `index.html` / `styles.css`.
- **Dane kontaktowe w stopce** — telefon i e-mail w `index.html`, sekcja
  `<footer class="site-footer">`.
