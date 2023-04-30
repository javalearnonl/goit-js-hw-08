import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const VIDEO_CURRENT_TIME_KEY = "videoplayer-current-time";
const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);
let currentTime = JSON.parse(localStorage.getItem(VIDEO_CURRENT_TIME_KEY));

if (currentTime) {
  player.setCurrentTime(currentTime);
}

player.on("play", () => console.log("Player has been started"));
player.on("timeupdate", throttle((data) => {
  localStorage.setItem(VIDEO_CURRENT_TIME_KEY, JSON.stringify(data.seconds));
}, 1000));