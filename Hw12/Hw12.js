
class Service {
  constructor () {
      this.key = 'c3e52c407cfe4d5eab37e580249b2e9f';
     
  }
  sendRequest(keyWord, sort) {
      
      return fetch(`https://newsapi.org/v2/everything?q=${keyWord}&${sort}&apiKey=${this.key}`)
          .then((response) => { return response.json()})
          .catch((err) => { console.error('Моя ошибка - ', err) })
  }
  
}

class UI {
  constructor () {
      this.service = new Service();
      this.layout = new LayoutNews();
      this.keyWord = document.querySelector('#search');
  }
  init() {
      const country = document.querySelector('#country');
      const category = document.querySelector('#category');
      const sortPopular = document.querySelector('#popular')
     
      this.keyWord.addEventListener('change', this.keyWordSearch.bind(this))
      sortPopular.addEventListener('click', this.sort.bind(this))
  }
  
  sort(event) {
     if (event.target.checked) {
        
      this.service.sendRequest(this.keyWord.value, 'sortBy=popularity')
      .then((response) => {
      this.layout.renderAll(response.articles)
          })
      }
  }
      
      
  
  keyWordSearch(event) {
      this.service.sendRequest(event.target.value, undefined)
          .then((response) => {
          this.layout.renderAll(response.articles)
      })
  }
 
}

class LayoutNews {
  constructor() {
      this.divRow = document.querySelector('#row');
  }
  renderAll(newsList) {
      this.divRow.innerHTML = '';

      newsList.forEach((news) => {
          const html = this.render(news);
          this.divRow.insertAdjacentHTML('beforeend', html);
      })
  }
    render (news) {
      return `<div class="col s12 m6">
              <div class="card"> 
                <div class="card-image">
                   <img src="${news.urlToImage}"> 
                </div>
                <div class="card-content">
                   <span class="card-title">${news.title || ''}</span>
                   <p>${news.description || ''}</p> 
                </div>
                <div class="card-action">
                   <a href="${news.url}" target="_blank">Read more</a> 
                </div> 
              </div>
          </div>`;
  }
}

const myUI = new UI();
myUI.init();
