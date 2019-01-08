$(() => {

const checkScroll = (elem) => {
  let docTop = $(window).scrollTop();
  let docBot = docTop + $(window).height();

  let elemTop = $(elem).offset().top;
  let elemBot = elemTop + $(elem).height();

  return((elemBot <= docBot) && (elemTop >= docTop));
}

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
      $('body').append('<div>').addClass('last')
    },
    () => {
      console.log('Error');
    }
  );
  $('.last').on('scroll', () => {
    console.log('scroll');
  })

})
