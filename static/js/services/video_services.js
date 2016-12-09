angular.module('TractrApp')
    .factory('VideoData', function ($http, $rootScope, $log) {
        return {
            all_videos: function () {
                return $http.get('/videos')
            }
        }
    });
