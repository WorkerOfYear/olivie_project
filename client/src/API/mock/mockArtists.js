import shir from "./images/shir.jpg"
import vinyl from "./images/vinyl.jpg"
import brass from "./images/cover_brass.jpg"
import audio_box from "./images/audio_box.jpg"
import dallas from "./images/dallas.jpg"
import haligali_video from "./videos/demo.mp4"
import zveri from "./videos/demo2.mp4"



export const mockArtists = [
    {
        id: 1,
        artist_name: "Shir",
        description: "Very talanted guies, with russian rock music. A cover band with an unusual sound.",
        photo_url: shir,
        video: [
            {video_url: haligali_video, video_desk: "Хали-гали Леприконсы"},
            {video_url: zveri, video_desk: "Районы-кварталы Звери"},
        ]
         
    },
    {
        id: 2,
        artist_name: "Vinyl",
        description: "Maintaining a balance between dance and lounge, maintaining a subtle visual style, Vinyl fits well into any event, while delighting guests with a unique format.",
        photo_url: vinyl
    },
    {
        id: 3,
        artist_name: "Cover Brass",
        description: "This is an extraordinary cover band of the event industry, combining young and hot-tempered musicians, wind instruments and original arrangements!",
        photo_url: brass
    },
    {
        id: 4,
        artist_name: "AUDIO BOX",
        description: "These are explosive emotions, an incredible atmosphere and full contact with the public, your favorite hits performed live! And always a stylish, impeccable image of absolutely every member of the team.",
        photo_url: audio_box
    },
    {
        id: 5,
        artist_name: "Music Band Dallas",
        description: "The artist and his team will create the necessary mood with their unusual presentation and special style of performance.",
        photo_url: dallas
    },

]