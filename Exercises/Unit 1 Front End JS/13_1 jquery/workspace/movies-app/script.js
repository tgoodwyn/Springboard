$(document).ready(function() {
  $('#myForm').submit(function(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from input fields
    var title = $('#titleInput').val();
    var rating = $('#ratingInput').val();

    // Append title, rating, and remove button to the list
    var listItem = $('<div>').addClass('list-item');
    listItem.append('<span class="title">' + title + ' </span>');
    listItem.append('<span class="rating">' + rating + '</span>');
    listItem.append('<button class="remove-btn">Remove</button>');
    $('#myList').append(listItem);

    // Clear input fields
    $('#titleInput').val('');
    $('#ratingInput').val('');
  });

  // Handle remove button click
  $('#myList').on('click', '.remove-btn', function() {
    $(this).closest('.list-item').remove();
  });
});
