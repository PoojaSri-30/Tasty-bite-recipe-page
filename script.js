


var popupoverlay = document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})     

var cancelpopup = document.getElementById("cancel popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})

var container = document.querySelector(".container")
var Addrecipe = document.getElementById("add recipe")
var recipenameinput = document.getElementById("recipe name-input")
var Highlightofthedishinput = document.getElementById("Highlight of the dish-input")
var recipedescriptioninput = document.getElementById("recipe-description-input")

Addrecipe.addEventListener("click",function(event){
        event.preventDefault()
        var div = document.createElement("div")
        div.setAttribute("class","recipe-container")
        div.innerHTML=` <h2>${recipenameinput.value}</h2>
            <h5>${Highlightofthedishinput.value}</h5>
            <p> ${recipedescriptioninput.value}</p>
            <button onclick="deleterecipe(event)">Delete</button>`
        container.append(div)
        popupoverlay.style.display="none"
        popupbox.style.display="none"

    })

    function deleterecipe(event)
    {
        event.target.parentElement.remove()

    }


