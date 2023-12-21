const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMore = document.getElementById("show-more-result-btn");

// 543518 -app id
 const accessKey ="VICd6i4B4IAefIv4Kz62DSrrIDtKRfDldMiEHpPQlT8"; //-access key
// CZhUE_mCQQsnWHiT0H9nLFrlS7M2OPEWRqyJjt6kRP8 - secret key

let keyword="pug";
let page=1;

async function searchImage(){
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data=await response.json();

    if(page==1){
        searchResult.innerHTML="";
        
    }
    const results = data.results;
    results.map((result)=>{
        const image = document.createElement("img");
        image.src=result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        console.log(imageLink);

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
        console.log(searchResult);
    })

    showMore.style.display="block";

    console.log(data);
}


searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImage();
})


showMore.addEventListener("click",()=>{
    page++;
    searchImage();
})