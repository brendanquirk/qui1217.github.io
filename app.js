$(() => {

  let apiData;
  let getPage = 2;

  $(window).on('scroll', () => {
    let scrollTop = $(document).scrollTop();
    let windowHeight = $(window).height();
    let bodyHeight = $(document).height() - windowHeight;
    let scrollPercentage = (scrollTop / bodyHeight);

    if (scrollPercentage > 0.9) {
      if (getPage <= 25) {
        getData(getPage);
        getPage++;
      }

    }
  })


  const getData = (pageNum) => {
    $.ajax({
      url: 'https://rickandmortyapi.com/api/character/?page=' + pageNum
    }).then(
      (data) => {
        apiData = console.log(data);
        apiData = data.results;
        for (let i = 0; i < data.results.length; i++) {
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
    );
  }

  getData(1);


})
