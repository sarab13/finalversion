var flag=false
var offset=0
var condition=0
const container=document.getElementById('container')

const sortByDate = arr => {
  const sorter = (a, b) => {
     return new Date(b.import_datetime).getTime() - new Date(a.import_datetime).getTime();
  }
  arr.sort(sorter);
};

function apiCalling(){
fetch(`https://api.giphy.com/v1/gifs/search?q=cats&api_key=tv656ue2Z5w8ENrWU9YVpfNUkmdIMFP2&limit=40&offset=${offset}`)
  .then(response => response.json())
  .then(async json => {
    const data=json.data
    if(flag)
    sortByDate(data)
    data.map(gif => {
        let img = document.createElement('img')
        let a=document.createElement('a')
        a.href=gif.url
        img.src = gif.images.original.url;
        a.appendChild(img)
        container.appendChild(a)})

  })
  .catch(error => con.appendChild = error)
  offset+=40
  condition-=800;

}
function fetchMore(){
  const rect=container.getBoundingClientRect();
  if(rect.top<condition)
  {
    apiCalling()
  }
}
function doSorting(btn){
  const relevant=document.getElementById('relevant')
  const newest=document.getElementById('newest')
  if(btn=="relevant"){
    offset=0;
    flag=false;
    relevant.style.color="white";
    relevant.style.backgroundColor="black";
    newest.style.color="black";
    newest.style.backgroundColor="white"
    container.querySelectorAll('*').forEach(n=>n.remove())
    apiCalling()
  }
  else{
    offset=0
    flag=true
    newest.style.color="white"
    newest.style.backgroundColor="black"
    relevant.style.color="black"
    relevant.style.backgroundColor="white"
    container.querySelectorAll('*').forEach(n=>n.remove())
    apiCalling()
  }
}

apiCalling()