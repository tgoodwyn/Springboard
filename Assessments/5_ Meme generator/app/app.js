



const submission = document.querySelector("#submission")
const imgInput = document.querySelector("#meme-image-url")
const topInput = document.querySelector("#meme-top-text")
const bottomInput = document.querySelector("#meme-bottom-text")
const meme_container = document.querySelector(".meme-container")
const validation_text = document.querySelector("#validation-text")

submission.addEventListener("submit", function (event) {
    event.preventDefault()

    const imgURL = imgInput.value
    const top_text = topInput.value
    const bottom_text = bottomInput.value
    if (!imgURL || !top_text || !bottom_text) {
        validation_text.style.display = "block"
        return
    } else {
        validation_text.style.display = "none"
    }
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
    const new_meme = create_meme(imgURL, top_text, bottom_text)

    const rm_btn = document.createElement("button")
    rm_btn.id = "remove_button"
    rm_btn.classList.add("meme-btn")
    rm_btn.innerText = "remove"
    
    new_meme.append(rm_btn)

    meme_container.append(new_meme)
}

function create_meme(imgURL, top_text, bottom_text) {
    const meme = document.createElement("div")
    meme.classList.add("meme")
    const new_img = document.createElement("img")
    new_img.setAttribute("src", imgURL)
    new_img.classList.add("meme-img")
    
    const top_text_el = document.createElement("div")
    top_text_el.classList.add("meme-top")
    const top_text_p = document.createElement
    top_text_el.classList.add("meme-text")
    top_text_el.innerText = top_text
    const bottom_text_el = document.createElement("div")
    bottom_text_el.classList.add("meme-bottom")
    bottom_text_el.classList.add("meme-text")
    bottom_text_el.innerText = bottom_text
    meme.append(top_text_el)
    meme.append(bottom_text_el)
    meme.append(new_img)
    
    return meme
}


