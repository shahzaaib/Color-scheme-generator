let wrapContainer = document.getElementById("container")
let colorContainer = document.getElementById("color-container-display")
let colorNumbers = document.getElementById("color-numbers-display")
let colorApi = document.getElementById("color-api")
let colorInput = document.getElementById("color-input")
const colorBtn = document.getElementById("color-submit")


colorBtn.addEventListener("click",(event)=>{
    event.preventDefault();

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput.value.slice(1)}&mode=${colorApi.value}&count=5`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
            //console.log(data)
    
   let colorHtml = ""
   data.colors.map(color =>{
   colorHtml += 
   //colorContainer.innerHTML +=
    `<div class="color-container">
                        <div class="bg-color" style="background:${color.hex.value}"></div>
                        <p class="color-name">
                        <span class="tooltiptext" id="myTooltip">Copy</span>
                        <span class="name-El">${color.hex.value}</span></p>
                    </div>
            `
   })
   colorContainer.innerHTML = colorHtml;


        })   
            
    })


//GET https://www.thecolorapi.com/id?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=html
//GET https://www.thecolorapi.com/scheme?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=html&mode=analogic&count=6
//fetch(`https://www.thecolorapi.com/scheme?hex=${pickedColor.value.replace('#','')}&mode=${scheme.options[scheme.selectedIndex].value}&count=5`


/*

 Challenge:
 With the 5 blog post objects, display the `title` and `body`
properties of the first 5 posts on the browser page.
 Hints: 
 * Create a `div` in the HTML file to store these items
 * Loop over the items creating a string of HTML elements you 
   can then put into the div with `innerHTML`

   fetch("https://apis.scrimba.com/jsonplaceholder/posts")
   .then(res => res.json())
   .then(data => {
       const postsArr = data.slice(0, 5)
       let html = ""
       for (let post of postsArr) {
           html += `
           <h3> ${post.title} </h3>
           <p> ${post.body} </p>
           `
       }
       document.getElementById("blog-list").innerHTML = html
       
   })
*/

