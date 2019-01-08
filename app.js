$(() => {

  $.ajax({
    url: 'https://rickandmortyapi.com/api/character/'
  }).then(
    (data) => {
      console.log(data);
      for (let i = 0; i < data.results.length; i++){
        const $image = $('<img>').attr('src', data.results[i].image);
        $('.content').append($image);
        const $list = $('<ul>')
        $('.content').append($list);
        const $name = $('<li>').text('Name: ' + data.results[i].name);
        $list.append($name);
        const $location = $('<li>').text('Location: ' + data.results[i].location.name);
        $list.append($location);
        const $origin = $('<li>').text('Origin: ' + data.results[i].origin.name);
        $list.append($origin);
        const $status = $('<li>').text('Status: ' + data.results[i].status);
        $list.append($status);
      }
    },
    () => {
      console.log('Error');
    }
  )


})
