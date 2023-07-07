const imageContainer = document.getElementsByClassName('image-container')[0];
const loader = document.getElementsByClassName('loader')[0];

let photosArray = [];
let ready = true;
let countImageLoad = 0; 
// Unsplash API
const count = 10;
const apiKey = '-pkwqDA4GAgr5OPAXNM8RpGgq5ins623yrZGqjbecUw';
const apiUrl =`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Helper function
function setAttributes(element, attributes){
    for (const key in attributes){
        element.setAttribute(key, attributes[key])
    }
}

function setLoaderHidden(){
    if (countImageLoad == count) {
        loader.hidden = true;
    }

}
// Create Element for link
function displayPhotos(){
    photosArray.forEach((photo) => {
        
        const item = document.createElement('a');
        setAttributes(item,{
            'href' : photo.links.html,
            'target': '_blank'
        })

        const img = document.createElement('img');
        setAttributes(img, {
            'src' : photo.urls.regular,
            'alt' : photo.alt_description,
            'title': photo.alt_description
        })

        item.appendChild(img);
        imageContainer.appendChild(item);
        countImageLoad ++;
        img.addEventListener('load',setLoaderHidden)
    });
    console.log(countImageLoad);
    ready = true;
}

// get Photo
async function getPhoto(){
    try{
        const response = await fetch(apiUrl);
        photosArray= await response.json();
        displayPhotos();
        
        
    } catch(error){
        alert("there was error in network or limit try again later")
    }
}
// Check to see if scrolling near bottom of page, Load More Photos

window.addEventListener('scroll', ()=> {
    if (window.innerHeight + window.scrollY > document.body.offsetHeight - 1000 && ready == true ){
        ready = false;
        console.log('hello');
        getPhoto();
    }
})
// onload
document.addEventListener('DOMContentLoaded', getPhoto);
