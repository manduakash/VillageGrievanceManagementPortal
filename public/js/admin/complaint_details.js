$(document).ready(function() {
  $('#complaint-disposal-form').on('submit', function(event) {
    event.preventDefault();

    // Get active button id
    const activeButtonId = $(document.activeElement).attr('id');

    // Set disposal type
    const disposalType = activeButtonId === 'resolve' ? 'resolve' : 'forward';
    $('#disposal_type').val(disposalType);

    // Submit form
    event.currentTarget.submit();
  });
});