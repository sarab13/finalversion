var flag=true
var offset=0
var count=1
var condition=0
const con=document.getElementById('container')
//con.setAttribute('onscroll',checkhi)


//console.log(rect)
//while(flag!=false){
function apiCalling(){
fetch(`https://api.giphy.com/v1/gifs/search?q=cats&api_key=tv656ue2Z5w8ENrWU9YVpfNUkmdIMFP2&limit=40&offset=${offset}`)
  .then(response => response.json())
  .then(async json => {
    //var con=document.getElementById('container')
    await json.data
      .map(gif => gif.images.original.url)
      .forEach(url => {
        let img = document.createElement('img')
        img.src = url;
        con.appendChild(img)
      })
  })
  .catch(error => con.appendChild = error)
  offset+=40
  condition-=800;

}
function checkhi(){
  const rect=con.getBoundingClientRect();
  console.log(condition)
  if(rect.top<condition)
  {
    apiCalling()
  }
  console.log(rect)
}

apiCalling()