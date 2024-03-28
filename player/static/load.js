const argz = new URLSearchParams(window.location.search);

const url = argz.get("u");
const postImage = argz.get("i");
const captions_file = argz.get("c");

let token;

const adios = function (token) {
  const hlsUrl = "https://streamable.com/l/6d054u/mp4.mp4" + "?" + token;
  window.location.assign(
    "player.html?u=" + hlsUrl + "&i=" + postImage + "&c=" + captions_file
  );
};

//adios("");
