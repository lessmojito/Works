const likeButton = document.getElementById('likeButton');

likeButton.addEventListener('click', function (event) {
  event.preventDefault(); 
  this.querySelector('.like').classList.toggle('filled');
});

const repost = document.getElementById('repost');

repost.addEventListener('click', function (event) {
  event.preventDefault(); 
  this.querySelector('.repost').classList.toggle('filled');
});

const save = document.getElementById('save');

repost.addEventListener('click', function (event) {
  event.preventDefault(); 
  this.querySelector('.save').classList.toggle('filled');
});
