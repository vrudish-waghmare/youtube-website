// 2. generate the html

let videosHTML = '';

videos.forEach((video) => {
  videosHTML += `
  <div class="video-preview">
        <div class="thumbnail-row">
          <img class="thumbnail" src="${video.thumbnailImage}">
          <div class="video-time">14:20</div>
        </div>
        <div class="video-info-grid">
          <div class="channel-picture">
            <img class="profile-picture" src="${video.profileImage}">
          </div>
          <div class="video-info">
            <p class="video-title">${video.videoTitle}</p>
            <p class="video-author">${video.videoAuthor}</p>
            <p class="video-stats">${video.videoStats.views} &#183; ${video.videoStats.duration}</p>
          </div>
        </div>

      </div>`;
});


// deploy this generated HTML in javascript using DOM
document.querySelector('.js-video-grid').innerHTML = videosHTML;



