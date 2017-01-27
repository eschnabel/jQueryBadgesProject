$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/evanschnabel.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      var badgesDiv = $('#badges');
      for (var i = 0; i < response.courses.completed.length; i++) {
        var course = response.courses.completed[i];
          badgesDiv.append('<div class="course">' +
            '<h3>' + course.title + '</h3>' +
            '<img src="' + course.badge + '"/>' +
            '<a href="' + course.url + '" target="_blank" class="btn btn-primary">See Course</a>' +
            '</div>');
      }
    }
  });

});
