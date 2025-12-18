
export function renderVideos(video, container) {
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';

    const thumbnailLink = document.createElement('a');
    thumbnailLink.className = 'thumbnail-link';
    thumbnailLink.href = `https://www.youtube.com/watch?v=${video.id}`;
    const thumbnailImg = document.createElement('img');
    thumbnailImg.className = 'thumbnail-img';
    thumbnailImg.src = video.snippet.thumbnails.medium.url;
    const videoDuration = document.createElement('span');
    videoDuration.className = 'video-duration';
    videoDuration.textContent = '9:20'

    const videoDetails = document.createElement('div');
    videoDetails.className = 'video-details'

    const channelLink = document.createElement('a');
    channelLink.className = 'channel-link';
    const channelAvatar = document.createElement('img');
    channelAvatar.className = 'channel-avatar';

    const metaData = document.createElement('div');
    metaData.classList = 'metadata';

    const videoTittle = document.createElement('h3');
    videoTittle.className = 'video-tittle';
    videoTittle.textContent = video.snippet.title;
    const channelName = document.createElement('p');
    channelName.className = 'channel-name';
    channelName.textContent = video.snippet.channelTitle
    const viewsDate = document.createElement('p');
    viewsDate.className = 'views-date';

    container.appendChild(videoCard);
    videoCard.appendChild(thumbnailLink);
    thumbnailLink.appendChild(thumbnailImg);
    thumbnailLink.appendChild(videoDuration);
    videoCard.appendChild(videoDetails);
    videoDetails.appendChild(channelLink);
    channelLink.appendChild(channelAvatar);
    videoDetails.appendChild(metaData);
    metaData.appendChild(videoTittle);
    metaData.appendChild(channelName);
    metaData.appendChild(viewsDate);

};