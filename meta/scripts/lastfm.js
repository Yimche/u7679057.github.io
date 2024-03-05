const request = new XMLHttpRequest();

request.open('GET', 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=yimche&api_key=c70ac96baa4d4d456b3d3de853a3e67b&format=json');
request.send();

request.onreadystatechange = () => {
    if (request.status === 200) {

        // look at the response
        console.log(request.response);

        const recenttracks = JSON.parse(request.response).recenttracks;

        if (!recenttracks.track || !recenttracks.track.length) {
          console.log('track is empty');
          return;
        }

        const artist = recenttracks.track[0].artist['#text'];
        const song = recenttracks.track[0].name;

        console.log(song);  
        document.getElementById("now-playing").innerHTML = artist + ' - ' + song;
    } 
};
