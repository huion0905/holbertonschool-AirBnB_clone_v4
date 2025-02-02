$(() => {
  $('input').css({'margin-right': '10px'}); // Set margin for all inputs
  let amenities = {}; // Store all checked amenities

  /**
   * Listen if an input is checked. If so, store it in amenities
   * If the input is unchecked by the user, make a filter to delete it
   */
  $("input:checkbox").on('change', function () {
    if ($( this ).prop('checked')){
      amenities[$( this ).data('id')] = $( this ).data('name');
    } else {
      delete amenities[$(this).data('id')];
    }
    $('.amenities h4').text(Object.values(amenities).join(', ')); // Join all checked amenities
  });
  
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:5001/api/v1/status/",
    dataType: "json"
  }).done((data) => {
    if (data.status === 'OK')
      $("div#api_status").addClass('available');
    else
      $("div#api_status").removeClass('available');
  });
});
