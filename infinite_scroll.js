// access key = WS3HmHu2MfMspYiEeKl9NaqTR-gq3bc2IoLMwUKuf7M
// secret key = AD93z3Kjsran2rvYLZyLNg8OKMWqd93ChJ_llmnfVAI

// to connect with the unsplash API we need to get a access key and secret key by logging in and creating anew app
//read the documentation to get the url using which we can fetch the data. documentation->list photos->hotlinking -> public authentication
//after connect with the API and making a fetch call, the API will returna list of images data in JSON format. We have to convert the JSON data
// into javascript object. we use .json() method of response object. Note that despite the method being named json(), the result is not JSON 
// but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.

const imageContainer = document.getElementById('imagecontainer')
const myLoader = document.getElementById('loader')
function controlLoader(){
    myLoader.hidden = false
}
async function getImages(){
    const response = await fetch ('https://api.unsplash.com/photos/?client_id=WS3HmHu2MfMspYiEeKl9NaqTR-gq3bc2IoLMwUKuf7M')
    // console.log(response);
    const imagesData = await response.json()
    console.log(imagesData);
    imagesData.map((image)=>{
        let imageUrl = image.urls.full
        const myImageElement = document.createElement('img')
        // console.log(myImageElement);
        myImageElement.setAttribute('src', imageUrl)
        // console.log(myImageElement);
        imageContainer.append(myImageElement)
    })
}
setTimeout(()=>{getImages();
    myLoader.hidden = true
},1000);

window.addEventListener('scroll', function(){
    let myClientHeight = document.documentElement.clientHeight
    //clientheight is the height of the client device window
    let myScrollHeight = document.documentElement.scrollHeight
    //scroll height is the total height of the scroll
    let myScrollTop = document.documentElement.scrollTop
    //scroll top is the distance the scroll has moved from the top
    console.log(myClientHeight,myScrollHeight,myScrollTop)
    if(myClientHeight+myScrollTop >= myScrollHeight){
        getImages();
    }
})
