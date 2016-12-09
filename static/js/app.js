angular.module('TractrApp', ['ngMaterial'])
    .config(function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            '*://www.youtube.com/**'
        ]);
    });