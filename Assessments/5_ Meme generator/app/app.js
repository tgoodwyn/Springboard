



const submission = document.querySelector("#submission")
const imgInput = document.querySelector("#meme-image-url")
const topInput = document.querySelector("#meme-top-text")
const bottomInput = document.querySelector("#meme-bottom-text")
const meme_container = document.querySelector("#meme-container")

submission.addEventListener("submit", function (event) {
    event.preventDefault()

    const imgURL = imgInput.value
    const top_text = topInput.value
    const bottom_text = bottomInput.value
    add_meme_to_page(imgURL, top_text, bottom_text)
    console.log(`my imgURL is ${imgURL}`)
})


function add_meme_to_page(imgURL, top_text, bottom_text) {
    const new_meme = document.createElement("div")
    new_meme.classList.add("meme")
    const new_img = document.createElement("img")
    new_img.setAttribute("src", imgURL)
    new_img.classList.add("meme-img")
    new_meme.append(new_img)
    meme_container.append(new_meme)
}
