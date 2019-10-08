$(document).ready(() => {
  // $('#my-button').on('click', () => {})
  $('#my-button').click(() => {
    const text = $('#my-input').val();
    const $listItem = $('<li>').text(text);
    $('#list-container').prepend($listItem);
    $('#my-input').val('').focus();
  });

});
