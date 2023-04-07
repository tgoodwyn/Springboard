



const submission = document.querySelector("#submission")
const imgInput = document.querySelector("#meme-image-url")
const topInput = document.querySelector("#meme-top-text")
const bottomInput = document.querySelector("#meme-bottom-text")
const meme_container = document.querySelector(".meme-container")

submission.addEventListener("submit", function (event) {
    event.preventDefault()

    const imgURL = imgInput.value
    const top_text = topInput.value
    const bottom_text = bottomInput.value
    add_meme_to_page(imgURL, top_text, bottom_text)
    console.log(`my imgURL is ${imgURL}`)
    clear_values()
})

meme_container.addEventListener("click", function (e) {
    e.preventDefault()
    if (e.target.id === "remove_button") {
        e.target.parentNode.remove()
    }
})

function clear_values() {
    imgInput.value = "" 
    topInput.value = "" 
    bottomInput.value = ""
}

function add_meme_to_page(imgURL, top_text, bottom_text) {
    const new_meme = document.createElement("div")
    new_meme.classList.add("meme")
    const new_img = document.createElement("img")
    new_img.setAttribute("src", imgURL)
    new_img.classList.add("meme-img")
    

    const rm_btn = document.createElement("button")
    rm_btn.id = "remove_button"
    rm_btn.classList.add("meme-btn")
    rm_btn.innerText = "remove"
    new_meme.append(new_img)
    new_meme.append(rm_btn)

    meme_container.append(new_meme)
}



