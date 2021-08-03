//target dom elements
const stories = document.querySelector('#stories');
const container = document.querySelector('.container')
let top100 = []
//fetch data 
const stuff = fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
.then((rawData) => {
    return rawData.json()
})
.then((data) => {
    for (let i = 0; i < 100; i++) {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`)
       .then((reponse) => {
           
           return reponse.json()
       })
       .then((data) => {
           top100.push(data)
           top100.forEach((item) => {
               //create li
            const li = document.createElement('li');
            li.setAttribute('class', 'list-group-item');
            //create anchor
            const aTag =document.createElement('a');
            aTag.setAttribute('href', data.url);
            aTag.setAttribute('class', 'text-decoration-none');
            aTag.setAttribute('style', 'color:#black;');
            //create div
            const title = document.createElement('h3')
            title.innerHTML = data.title
            const div = document.createElement('div');
            div.setAttribute('class', 'small light')
            div.innerHTML = `${data.score}  by ${data.by}  comments ${data.descendants} `

            aTag.appendChild(title)
            li.appendChild(aTag)
            li.appendChild(div)
            stories.appendChild(li)

           })
       })
    }
})
console.log(top100)


//create list item 
//append to DOM (ol)

