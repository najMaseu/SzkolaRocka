
//AIzaSyA2qH-FUp6bDfD0dkxBfGVgJK-OwyGM_8g
//ui76nbmfgmlnfv7mqjm8tu3mbg@group.calendar.google.com
$(function() {
  $('#calendar').fullCalendar({
    googleCalendarApiKey: "AIzaSyA2qH-FUp6bDfD0dkxBfGVgJK-OwyGM_8g",
    events:{
      googleCalendarId: 'ui76nbmfgmlnfv7mqjm8tu3mbg@group.calendar.google.com',
    },
    defaultView: function() {
      if ($(window).width() <= 768) {
        return defaultView = 'listWeek';
      } else {
        return defaultView = 'month';
      }
    }(),
    height: "parent",
    timeFormat: 'H:mm',
    displayEventEnd: "true"
  })
});
