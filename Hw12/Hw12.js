

class Service {
    constructor () {
        this.key = 'c3e52c407cfe4d5eab37e580249b2e9f';
        this.country = '';
        this.category = '';
    }
    sendRequest({country='', category=''}) {
        if (country !== '') {
            this.country = country;
        }
        if (category !== '') {
            this.category = category;
        }

        return fetch(`https://newsapi.org/v2/top-headlines?country=${this.country}&category=${this.category}&apiKey=${this.key}`)
            .then((response) => { return response.json()})
            .catch((err) => { console.error('Моя ошибка - ', err) })
    }
    sendRequestKey(keyWord, sort) {
      
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
      this.sorting = document.querySelector('#sorting')
  }
  init() {
      const country = document.querySelector('#country');
      const category = document.querySelector('#category');
      
     
      country.addEventListener('change', this.handleSelect.bind(this))
        category.addEventListener('change', this.handleSelect.bind(this))
      this.keyWord.addEventListener('input', this.keyWordSearch.bind(this))
      this.sorting.addEventListener('change', this.sort.bind(this))
      
   
  }
  
  handleSelect(event) {

    const {id: selectName, value: selectValue} = event.target;
    this.service.sendRequest({[selectName]: selectValue})
        .then((response) => {
            this.layout.renderAll(response.articles)
        })
}
  
keyWordSearch(event) {
    this.service.sendRequestKey(event.target.value, undefined)
        .then((response) => {
        this.layout.renderAll(response.articles)
    })
}


  sort(event) {
      if (event.target === this.sorting) {
        this.service.sendRequestKey(this.keyWord.value, 'sortBy=popularity')
        .then((response) => {
        this.layout.renderAll(response.articles)
    })
      }
     
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
