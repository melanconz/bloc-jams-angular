var albumData = angular.copy(albumPicasso);

(function() {
    function AlbumCtrl() {
      this.album = albumData;
      this.songs = [];
      for (var i; i < albumData.songs.length; i++) {
          this.songs.push(albumData.songs);
      }
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();
