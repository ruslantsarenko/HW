
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "ru-RU";
recognition.onresult = function (event) {
  if (event.results.length > 0) {
        result.value = event.results[0][0].transcript;
      }
    }