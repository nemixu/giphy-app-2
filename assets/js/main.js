const apiKey = "xxtzYtFHPixwGNodSmDJPr2HWGi3gVdU";
let input = document.getElementById("input").value;
const img = document.createElement('img');
const images = document.getElementById('image');
let gifResults = [];

const search = () => {
    gifResults = [];
    let input = document.getElementById("input").value;
    const url = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${apiKey}&limit=50`;
        fetch(url)
            .then(result => result.json())
            .then(data =>{
                let gifResults = data.data;
                gifResults.forEach((result,i) => {
                    result = gifResults;
                
                    let img = document.createElement('img');
                    let images = document.getElementById('image').appendChild(img);
                    images.setAttribute('src', result[i].images.original.url);
                    images.setAttribute('class', 'gif-images');
                });
            })
            clear();
}
 
const clear = () => {
    if(!images){
        console.log('help');
    }else {
        images.innerHTML = '';
    }
}
clear();