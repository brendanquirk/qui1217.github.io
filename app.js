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
      url: 'https://rickandmortyapi.com/api/character/?page=' + pageNum,
    }).then(
      (data) => {
        // console.log(data);
        apiData = data.results;
        for (let i = 0; i < apiData.length; i++) {
          const $charDiv = $('<div>').addClass('character').attr('id', apiData[i].id);
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
        $('.character').on('click', (event) => {
          event.stopPropagation();
          const $modal = $('<div>').css('z-index', 1).text('Episdoe Information').addClass('modal');
          $('body').append($modal);
          const $closeBtn = $('<button>').text('Close');
          $modal.append($closeBtn);
          $closeBtn.on('click', (event) => {
            event.stopPropagation();
            $modal.remove();
          })
          $.ajax({
            url: 'https://rickandmortyapi.com/api/character/' + $(event.currentTarget).attr('id'),
          }).then(
            (data) => {
              for (let i = 0; i < data.episode.length; i++) {
                const $episodes = $('<li>').text(data.episode[i]).addClass('epInfo');
                $modal.append($episodes);
              }
            }
          )
        })
      },
      () => {
        console.log('Error');
      }
    );
  }

  getData(1);

})
