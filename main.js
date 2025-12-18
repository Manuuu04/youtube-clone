import {getVideo} from "../api/youtubeApi.js";
import { renderVideos } from "./ui/createVideoCard.js";
const videoGrid = document.querySelector('.video-grid');

async function videoCreator() {
    let videos = await getVideo();
    
    videos.forEach(video => {
        renderVideos(video, videoGrid);
    });
}

videoCreator();
