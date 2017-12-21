var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  //look into sites.txt 
  //returns the list of URL in a parseable format
  
};

exports.isUrlInList = function(url, callback) {
  //return a boolean
  //use read list of urls and determine if the passed in url is in the object/list of returned URLS
  
};

exports.addUrlToList = function(url, callback) {
  //if is URL in list returns false, this function adds the Url to the list
};

exports.isUrlArchived = function(url, callback) {
  //checks sites folder and sees if the website associated with the URL exists in that folder
};

exports.downloadUrls = function(urls) {
  //if !isUrlArchived download the site associated with the URL an save it to sites folder
  //urls may or may not be a collection of urls
};
