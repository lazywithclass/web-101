let getAllPosts = () => {
  $.get('http://localhost:3000/api/posts', (posts) => {
    console.log(JSON.stringify(posts, null, '  '))
    showGif('get')()
  })
}

let createPost = () => {
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/posts',
    data: JSON.stringify({
      name: $('.js-create-post-form input:nth(0)').val(),
      description: $('.js-create-post-form input:nth(1)').val()
    }),
    success: showGif('create'),
    error: console.log,
    contentType: 'application/json',
    dataType: 'json'
  });
}

let updatePost = () => {
  const id = $('.js-update-post-form input:nth(0)').val()
  $.ajax({
    type: 'PUT',
    url: `http://localhost:3000/api/posts/${id}`,
    data: JSON.stringify({
      description: $('.js-update-post-form input:nth(1)').val()
    }),
    success: showGif('update'),
    error: console.log,
    contentType: 'application/json',
    dataType: 'json'
  });
}

let deletePost = () => {
  const id = $('.js-delete-post-form input:nth(0)').val()
  $.ajax({
    type: 'DELETE',
    url: `http://localhost:3000/api/posts/${id}`,
    success: showGif('delete'),
    error: console.log
  });
}

let showGif = (operation) => () => {
  const gifs = {
    delete: 'https://media0.giphy.com/media/26gYPjuK6O0H63GyQ/giphy.gif',
    update: 'https://media3.giphy.com/media/wFbI8gwCfCxeo/giphy.gif',
    create: 'https://media4.giphy.com/media/UqRjmjfhkVxEQ/giphy.gif',
    get: 'https://media0.giphy.com/media/3o7TKqGAZAbdKoaxu8/giphy.gif'
  }
  const body = $('body').html()
  setTimeout(function() {
    $('img')
      .attr('src', gifs[operation]);
  }, 0);
  $('body').html('<img style="position: absolute; display: none;" />')
  $('img').show()
  setTimeout(() => $('body').html(body), 2000)
}

let emergency = () => {
  $('body').html('<img style="position: absolute;" src="https://media4.giphy.com/media/XesbluNw5YMPS/giphy.gif" />')
}

let random = () => {
  const top = Math.floor(Math.random() * 400);
  const left = Math.floor(Math.random() * 400);
  const url = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=rick+and+morty'
  $.get(url, (image) => {
    $('#random-gif').attr('src', image.data.image_url).css({top: top + 'px', left: left + 'px'});
    $('#random-gif').show()
    setTimeout(() => $('#random-gif').hide(), 4000)
  })
}

$(() => {
  console.log('oh hai!')

  $('.js-get-posts').click(getAllPosts)
  $('.js-create-post').click(createPost)
  $('.js-update-post').click(updatePost)
  $('.js-delete-post').click(deletePost)

  setTimeout(() => $('.js-emergency').show(), 120000)
})
