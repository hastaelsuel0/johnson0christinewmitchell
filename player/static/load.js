const argz = new URLSearchParams(window.location.search);

const url = argz.get("u");
const postImage = argz.get("i");
const captions_file = argz.get("c");

let token;

fetch("https://back.laisla.pm/api/key")
  .then((response) => response.json())
  .then((data) => adios(data["secret1"]));

const adios = function (token) {
  const hlsUrl = url + "?" + token;
  window.location.assign(
    "player.html?u=" + hlsUrl + "&i=" + postImage + "&c=" + captions_file
  );
};
