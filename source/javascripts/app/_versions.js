(function(global) {
  'use strict';
  debugger;

  global.setupVersionsDropdown = setupVersionsDropdown;

  var s3BaseUrl = "https://s3.amazonaws.com/cloudcontroller-api-docs?delimiter=/";

  function setupVersionsDropdown() {
    $.get(
      s3BaseUrl,
      function(data) {
        var versionNumbers = [];

        $(data).find("CommonPrefixes").each(function() {
          $(this).find("Prefix").each(function() {
            versionNumbers.push($(this).text().slice(0, -1));
          });
        });

        versionNumbers.splice(versionNumbers.indexOf("release-candidate"), 1);
        versionNumbers.sort();
        versionNumbers.reverse();

        $.each(versionNumbers, function(_, asdf) {
          $('.dropdown-list').append('<li><a href="https://s3.amazonaws.com/cloudcontroller-api-docs/' + asdf + '/index.html">' + asdf + '</a></li>');
        });
      }
    );
  }
})(window);

