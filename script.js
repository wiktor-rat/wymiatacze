/**
 * Wymiatacze Nieruchomości — script.js
 *
 * Obsługa formularza kontaktowego (sekcja "kontakt").
 * Na tym etapie brak backendu: zgłoszenia są logowane do konsoli
 * oraz zapisywane w localStorage przeglądarki (klucz "wymiatacze_leads"),
 * żeby dało się je łatwo podejrzeć podczas testów.
 *
 * TODO integracja docelowa: podmienić funkcję submitLead() tak,
 * aby wysyłała dane np. do CRM / e-mail API / Google Sheets zamiast
 * (lub obok) zapisu lokalnego.
 */

(function () {
  "use strict";

  const LEADS_STORAGE_KEY = "wymiatacze_leads";

  const form = document.getElementById("contact-form");
  const statusEl = document.getElementById("form-status");

  if (!form) return;

  form.addEventListener("submit", handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const lead = {
      fullName: (formData.get("fullName") || "").toString().trim(),
      phone: (formData.get("phone") || "").toString().trim(),
      location: (formData.get("location") || "").toString().trim(),
      area: (formData.get("area") || "").toString().trim(),
      price: (formData.get("price") || "").toString().trim(),
      dealType: (formData.get("dealType") || "").toString().trim(),
      submittedAt: new Date().toISOString(),
    };

    submitLead(lead);

    form.reset();
    showStatus("Dziękujemy! Skontaktujemy się z Tobą jak najszybciej.", "success");
  }

  /**
   * Docelowe miejsce integracji z backendem / CRM.
   * Obecnie: log do konsoli + zapis do localStorage.
   */
  function submitLead(lead) {
    console.log("[Wymiatacze] Nowe zgłoszenie z formularza:", lead);

    const existingLeads = readStoredLeads();
    existingLeads.push(lead);

    try {
      localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(existingLeads));
    } catch (err) {
      console.warn("[Wymiatacze] Nie udało się zapisać zgłoszenia w localStorage:", err);
    }
  }

  function readStoredLeads() {
    try {
      const raw = localStorage.getItem(LEADS_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      console.warn("[Wymiatacze] Nie udało się odczytać zapisanych zgłoszeń:", err);
      return [];
    }
  }

  function showStatus(message, type) {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.className = "form-status " + type;
  }
})();

// Aktualny rok w stopce
document.addEventListener("DOMContentLoaded", function () {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
