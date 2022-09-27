$.getJSON('../db/pricing.json', (data) => {
  var items = [];
  $.each(data, function (key, val) {
    items.push(
      `<tr>
          <th>${key + 1}</th>
          <th>${val.product}</th>
          <td>${val.minOrder}</td>
          <td>${val.materials}</td>
          <td>₱${val.price}.00</td>
        </tr>`
    );
  });

  $('<tbody/>', {
    class: 'items',
    html: items.join('')
  }).appendTo('table');
});
