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
        // apiData = console.log(data);
        apiData = data.results;
        for (let i = 0; i < apiData.length; i++) {
          const $charDiv = $('<div>').addClass('character');
          $('.content').append($charDiv);
          const $image = $('<img>').attr('src', apiData[i].image);
          $charDiv.append($image);
          const $list = $('<ul>')
          $charDiv.append($list);
          const $name = $('<li>').text('Name: ' + apiData[i].name);
          $list.append($name);
          const $location = $('<li>').text('Location: ' + apiData[i].location.name);
          $list.append($location);
          const $origin = $('<li>').text('Origin: ' + apiData[i].origin.name);
          $list.append($origin);
          const $status = $('<li>').text('Status: ' + apiData[i].status);
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
