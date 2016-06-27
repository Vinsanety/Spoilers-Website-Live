//This gets the JSON from soundcloud and accesses the first track of the playlist "Website" and takes that title and appends the DOM with the title
$.getJSON("https://api.soundcloud.com/playlists/235506624?client_id=f4f2237e0ee1500764af3532c6bc5e13",function(data){
  //Accessing the last track in the JSON
  var data = data.tracks;
  var total = data.length;
  $(data).each(function(index) {
    if (index === (total-1)){
      var lastTrack = data[index]
      var title = lastTrack.title;
      var titleSplit = title.split(' -');
      //this part pushes the title of the latest track to the DOM
      $('#trackInfo').html('Our Latest Spoiled Film: ' + lastTrack.title)
      //this part pushes the embedded url to the iframe div / DOM
      $('#iframe').attr('src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/'+lastTrack.id+ '&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true')

      //adding the poster, rating, plot under the latest episode
      $.getJSON('http://www.omdbapi.com/?t='+titleSplit[0], function (movie) {
        $('#poster').attr('src',movie.Poster);
        $('#rating').html('IMDB Rating: '+movie.imdbRating);
        $('#plot').html('Plot: '+movie.Plot);
      })
    }
  })
  // console.log("Mydatais:",data)
  // data.preventDefault();
})
