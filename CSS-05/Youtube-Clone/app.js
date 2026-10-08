let videos = [
    {
        title: "Greatest Journy | in History | Isra Meraj | The Kohistani",
        channel: "The Kohistani",
        views: "1.5M Views · 1 Year ago",
        thumbnail: "images/1video.jpg",
        logo: "images/vid1.jpg"
    },
    {
        title: "Greatest Journy | in History | Khatta Meetha",
        channel: "Shemaroo Comedy",
        views: "5M Views · 3 Year ago",
        thumbnail: "images/2video.jpg",
        logo: "images/vid2.jpg"
    },
    {
        title: "Greatest Journy | in History | Isra Meraj | The Kohistani",
        channel: "Dhruv rathee",
        views: "35M Views · 1 Month ago",
        thumbnail: "images/3video.jpg",
        logo: "images/vid3.jpg"
    },
    {
        title: "OH The OTC | Roman Reigns is Back!!",
        channel: "WWE",
        views: "2.1M Views",
        thumbnail: "images/Shorts/roman.png",
        logo: ""
    },
    {
        title: "Air India May Face $600M Loss",
        channel: "Historic",
        views: "14M Views",
        thumbnail: "images/Shorts/short2.png",
        logo: ""
    },
    {
        title: "You don’t need PayPal to receive international payments",
        channel: "Tech",
        views: "50K Views",
        thumbnail: "images/Shorts/short3.png",
        logo: ""
    },
    {
        title: "OH The OTC | Roman Reigns is Back!!",
        channel: "WWE",
        views: "2.1M Views",
        thumbnail: "images/Shorts/roman.png",
        logo: ""
    },
    {
        title: "Air India May Face $600M Loss",
        channel: "Historic",
        views: "14M Views",
        thumbnail: "images/Shorts/short2.png",
        logo: ""
    },
    {
        title: "You don’t need PayPal to receive international payments",
        channel: "Tech",
        views: "50K Views",
        thumbnail: "images/Shorts/short3.png",
        logo: ""
    },

    {
        title: "Greatest Journy | in History | Isra Meraj | The Kohistani",
        channel: "Zen tv",
        views: "1.5M Views · 5 Weeks ago",
        thumbnail: "images/4.jpg",
        logo: "images/unnamed.jpg"
    },
    {
        title: "Greatest Journy | in History | Isra Meraj | The Kohistani",
        channel: "The Kohistani",
        views: "1.5M Views · 1 Year ago",
        thumbnail: "images/5video.jpg",
        logo: "images/channels4_profile (5).jpg"
    },
    {
        title: "Greatest Journy | in History | Isra Meraj | The Kohistani",
        channel: "Total Gaming",
        views: "1.5M Views · 1 Year ago",
        thumbnail: "images/6video.jpg",
        logo: "images/unnamed (2).jpg"
    }
];

let contentDiv = document.querySelector(".content");

function showVideos(videoList) {
    contentDiv.innerHTML = "";

    videoList.map((video) => {
       let div = document.createElement("div");
        div.className = "vid";

        div.innerHTML = `
            <img src="${video.thumbnail}" class="thumbnail" width="100%">
            <div class="video-assests">
                <img src="${video.logo}" class="logo" width="33px">
                <div class="video-content">
                    <h4 class="video-title">${video.title}</h4>
                    <p class="channel-name">${video.channel}</p>
                    <p class="video-views">${video.views}</p>
                </div>
            </div>
        `;

        contentDiv.appendChild(div);
    });
}

showVideos(videos);


function searchthis() {
   let input = document.querySelector(".search-bar").value.toLowerCase();

   let filteredVideos = videos.filter((video) =>
        video.channel.toLowerCase().includes(input) ||
     video.title.toLowerCase().includes(input)
    );

    showVideos(filteredVideos);
}
