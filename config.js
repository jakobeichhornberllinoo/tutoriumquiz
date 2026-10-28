// Einstellungen für das Tutoriums-Quiz. Anleitung: ANLEITUNG.md, Schritt 1 und 2.
//
// Solange databaseURL leer ist, läuft die App im TESTMODUS: Sie funktioniert dann nur
// zwischen mehreren Tabs in EINEM Browser – Handys können noch nicht beitreten.

window.QUIZ_CONFIG = {
  // Aus der Firebase-Konsole kopieren (Projekteinstellungen → Meine Apps → SDK-Konfiguration).
  firebase: {
    apiKey: "AIzaSyCyglz7skmI9iccLpZjX2TusJi0BiPLZBE",
    authDomain: "tutoriusm-quiz.firebaseapp.com",
    databaseURL: "https://tutoriusm-quiz-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "tutoriusm-quiz",
    appId: "1:646960160659:web:07f38463e278701e7d1266"
  },

  // Öffentliche Adresse der App, z. B. "https://deinname.github.io/tutoriums-quiz/".
  // Daraus wird der QR-Code gebaut. Leer lassen = die Adresse, unter der du die Seite gerade geöffnet hast.
  publicUrl: "https://jakobeichhornberllinoo.github.io/tutoriumquiz/",

  // Klassik-Version: kein Show-Intro, keine eigenen MP3s – nur die eingebauten Songs und die Fanfare
  classic: true
};
