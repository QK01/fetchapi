document.querySelector('#button1').addEventListener('click', loadData)
document.querySelector('#button2').addEventListener('click', loadJSON)
document.querySelector('#button3').addEventListener('click', loadAPI)
document.querySelector('#button4').addEventListener('click', loadTest)


function loadData(){
     fetch('../data.txt')
     .then((response) =>  response.text())
     .then((data) => {
        document.querySelector('#result').innerHTML = data
     })
}

function loadJSON(){
    fetch('../employees.json')
    .then((response) => response.json())
    .then((json) => {
        let html = ''

        json.forEach(person => {
            html += `
                <li>
                <b>Name </b> = ${ person.name} __ 
                <b>Job </b> = ${ person.job}
                </li>           
            `
        document.querySelector('#result').innerHTML = html
        });
    })
}

function loadAPI(){
    fetch('https://picsum.photos/list')
    .then((response) => response.json())
    
    .then((images) => {
        let html = ''
        images.forEach(image => {
            html +=`
            <li>
                <a href="${image.post_url}">view image</a>
            </li>             
            `            
        });
        document.querySelector('#result').innerHTML = html
    })
}

function loadTest(){
    document.querySelector('#result').innerHTML = ''
    
}