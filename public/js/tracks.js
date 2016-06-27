//Below embeds the tracklist player pulled from the soundcloud api, using our 'website' named playlist:
$.getJSON('https://api.soundcloud.com/playlists/235506624?client_id=f4f2237e0ee1500764af3532c6bc5e13', function(data) {
  //Accessing last 3 track id's
  var data = data.tracks;
  var total = data.length;
  //Works the soundcloud api down to the splitting the title of our tracks to before the dash
  $(data).each(function(index) {
    if(index === total-2){
      var lastTrack = data[index];
      console.log(lastTrack);
      var title = lastTrack.title;
      // console.log(title);
      var titleSplit = title.split(' -');
      console.log(titleSplit);
      console.log(titleSplit[0]);
      //adds the title of most recent track to the DOM
      $('#movieTitle1').html(titleSplit[0])
      // Accessing OMDB for movie posters by using the split title from above:
      $.getJSON('http://www.omdbapi.com/?t='+titleSplit[0], function (movie) {
        console.log('http://www.omdbapi.com/?t=' + titleSplit[0]);
        $('#posterOne').attr('src',movie.Poster);
        //Appending the IMDB Rating:
        $('#ratingsOne').html('IMDB Rating: '+movie.imdbRating);
        //Appending Plot/Synopsis
        $('#plotOne').html('Plot: '+movie.Plot);
      })
    }else if (index === total-3) {
      var lastTrack = data[index]
      var title = lastTrack.title
      var titleSplit = title.split(' -')
      console.log(titleSplit);
      $('#movieTitle2').html(titleSplit[0]);
      $.getJSON('http://www.omdbapi.com/?t='+titleSplit[0], function (movie) {
        console.log('http://www.omdbapi.com/?t=' + titleSplit[0]);
        $('#posterTwo').attr('src',movie.Poster);
        $('#ratingsTwo').html('IMDB Rating: '+movie.imdbRating);
        $('#plotTwo').html('Plot: '+movie.Plot);
      })
    }else if (index === total-4) {
      var lastTrack = data[index]
      var title = lastTrack.title
      var titleSplit = title.split(' -')
      console.log(titleSplit);
      $('#movieTitle3').html(titleSplit[0]);
      $.getJSON('http://www.omdbapi.com/?t='+titleSplit[0], function (movie) {
        console.log('http://www.omdbapi.com/?t=' + titleSplit[0]);
        $('#posterThree').attr('src',movie.Poster);
        $('#ratingsThree').html('IMDB Rating: '+movie.imdbRating);
        $('#plotThree').html('Plot: '+movie.Plot);
      })
    }
  })

  //below adds the entire Playlist to the DOM
  $('#iframe').attr('src','https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/235506624&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true')
})
