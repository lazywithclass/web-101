let getAllPosts = () => {
  $.get('http://localhost:3000/api/posts', (posts) => {
    console.log(JSON.stringify(posts, null, '  '))
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
    success: () => console.log('yay'),
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
    success: () => console.log('yay'),
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
    success: () => console.log('yay'),
    error: console.log
  });
}

$(() => {
  console.log('oh hai!')

  $('.js-get-posts').click(getAllPosts)
  $('.js-create-post').click(createPost)
  $('.js-update-post').click(updatePost)
  $('.js-delete-post').click(deletePost)
})
