(function() {
  function Fixtures() {
    var Fixtures = {};

    var albumPicasso = {
        title: 'The Colors',
        artist: 'Pablo Picasso',
        label: 'Cubism',
        year: '1881',
        albumArtUrl: '/assets/images/album_covers/album_covers/01.png',
        songs: [
            { number: 1, title: 'Blue', duration: '161.71', audioUrl: '/assets/music/blue'},
            { number: 2, title: 'Green', duration: '103.96', audioUrl: '/assets/music/green'},
            { number: 3, title: 'Red', duration: '268.45', audioUrl: '/assets/music/red'},
            { number: 4, title: 'Pink', duration: '153.14', audioUrl: '/assets/music/pink'},
            { number: 5, title: 'Magenta', duration: '374.22', audioUrl: '/assets/music/magenta'}
        ]
    };

    var albumMarconi = {
        title: 'The Telephone',
        artist: 'Guglielmo Marconi',
        label: 'EM',
        year: '1909',
        albumArtUrl: '/assets/images/album_covers/20.png',
        songs: [
          { title: 'Hello, Operator?', duration: '1:01' },
          { title: 'Ring, ring, ring', duration: '5:01' },
          { title: 'Fits in your pocket', duration: '3:21' },
          { title: 'Can you hear me now?', duration: '3:14' },
          { title: 'Wrong phone number', duration: '2:15' }
        ]
    };

    Fixtures.getAlbum = function() {
      return albumPicasso;
    }

    return Fixtures;
  }

  angular
    .module('blocJams')
    .factory('Fixtures', Fixtures);
})();
