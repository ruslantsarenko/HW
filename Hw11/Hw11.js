/*Сделать запрос к альбомам, получить их список, вывести на экран (в левой колонке на странице)
При клике на альбом делать запрос к фотографиям (которые в относятся к текущему альбому), получать их список, вывести на экран (в правой колонке) */

class MyHttp {
  get(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.addEventListener('load', ()=> callback(xhr.responseText))
  }
}

const http = new MyHttp();

http.get('https://jsonplaceholder.typicode.com/albums', loadAlbums)
http.get('https://jsonplaceholder.typicode.com/albums', (res)=>{
  
  console.log(res)
})

class Album {
  constructor() {
    this.albumsWrap = document.querySelector('.albums-wrap')
    
  }
  handleClick(event) {
    const albumId = event.target.dataset.id
    http.get('https://jsonplaceholder.typicode.com/photos?albumId='+ albumId, (res)=>{
      const parsedList = JSON.parse(res);
      const photosWrap = document.querySelector('.photos-wrap')
      parsedList.forEach((val)=>{
        const photo = document.createElement('div')
        photo.textContent = `albumId: ${val.albumId} id: ${val.id} 
        title: ${val.title} url: ${val.url}`
        photosWrap.append(photo);
      })
    })
    
  }
  render(album) {
      const html = document.createElement('div')
      html.textContent = `userId: ${album.userId} id:${album.id}
      title: ${album.title}` 
      html.setAttribute('data-id', album.id);
      
      html.addEventListener('click', this.handleClick);
      this.albumsWrap.append(html)
  }
}

function loadAlbums(response) {
  const parsedList = JSON.parse(response);
  const albumInstance = new Album();
  parsedList.forEach((album)=>{
    albumInstance.render(album);
  })
}