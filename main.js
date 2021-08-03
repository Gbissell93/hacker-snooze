//target dom elements
const stories = document.querySelector('#stories');
const container = document.querySelector('.container')
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
               //create li
            const li = document.createElement('li');
            li.setAttribute('class', 'list-group-item');
            //create anchor
            const aTag =document.createElement('a');
            aTag.setAttribute('href', data.url);
            aTag.setAttribute('class', 'text-decoration-none');
            aTag.setAttribute('style', 'color:#0CA5AD;');
            //create div
            const title = document.createElement('h3')
            title.innerHTML = data.title
            const div = document.createElement('div');
            div.setAttribute('class', 'small light')
            div.setAttribute('style', ' color:light gray;')
            div.innerHTML = `Score ${data.score} Submutted by ${data.by}  Comments ${data.descendants} `

            aTag.appendChild(title)
            li.appendChild(aTag)
            li.appendChild(div)
            stories.appendChild(li)

           
       })
    }
})
console.log(top100)


//create list item 
//append to DOM (ol)

