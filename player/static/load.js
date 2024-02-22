const argz = new URLSearchParams(window.location.search);

const url = argz.get("u");
const postImage = argz.get("i");
const captions_file = argz.get("c");

let token;

function detectAdBlock() {
  let adBlockEnabled = false
  const googleAdUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
  try {
    await fetch(new Request(googleAdUrl)).catch(_ => adBlockEnabled = true)
  } catch (e) {
    adBlockEnabled = true
  } finally {
    return adBlockEnabled;
  }
}
if (detectAdBlock()) {
  alert("Desactivar tu AdBlock y vuelve a entrar");
  return;
};

fetch("https://back.laisla.pm/api/key")
  .then((response) => response.json())
  .then((data) => adios(data["secret1"]));

const adios = function (token) {
  const hlsUrl = url + "?" + token;
  window.location.assign(
    "player.html?u=" + hlsUrl + "&i=" + postImage + "&c=" + captions_file
  );
};
