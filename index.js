document.addEventListener('readystatechange', (event) => {
    if(event.target.readyState === 'complete') {
        initApp();
    }
})

const initApp = async () => {
    const entries  = await getAllEntries();
    console.log("Entries: ", entries)

    if (entries.length) {
        processEntries(entries)
    }
}

// F => get all antries
const getAllEntries = async () => {

    try {
        const response = await fetch('https://the-dr-who-api.herokuapp.com/companions')
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }

}

const processEntries = (entries) => {
    const cards = document.getElementById('cards')
    
    entries.forEach(entry => {
        const card = buildCard(entry)        
        cards.append(card)
    })
}


const buildCard = (entry) => {

    const card = document.createElement('div')
    card.setAttribute('id', `card-${entry.id}`)
    card.classList.add('card')

    const title = createTitle(entry.name)
    card.append(title)

    const image = document.createElement('img')
    image.classList.add('image')
    image.src = "https://source.unsplash.com/random"
    image.alt = `Doctor Who companion ${entry.name}`
    card.append(image)

    const overlay = document.createElement('div')
    overlay.classList.add('overlay')
    card.append(overlay)

    const quote = document.createElement('q')
    quote.classList.add('quote')
    quote.textContent = `${entry.quote}`
    overlay.append(quote)

    return card

}

const createTitle = (name) => {
   
    const title = document.createElement('h2')
    title.classList.add('title')
    title.classList.add('gold');
    title.textContent =`${name}`

    return title
}

