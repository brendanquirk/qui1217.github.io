$(() => {

  $.ajax({
    url: 'https://rickandmortyapi.com/api/character/'
  }).then(
    (data) => {
      console.log(data);
      console.log(data.results[0].image);
      const $image = $('<img>').
      $('.content').append(data.results[0].img)
    },
    () => {
      console.log('Error');
    }
  )


})
