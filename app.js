$(() => {

  $.ajax({
    url: 'https://rickandmortyapi.com/api/character/'
  }).then(
    (data) => {
      console.log(data);
      console.log(data.results[0].image);
      const $image = $('<img>').attr('src', data.results[0].image);
      $('.content').append($image);
      const $list = $('<ul>')
      $('.content').append($list);
      const $name = $('<li>').text(data.results[0].name);
      $list.append($name);
      const $location = $('<li>').text(data.results[0].location.name);
      $list.append($location);
    },
    () => {
      console.log('Error');
    }
  )


})
