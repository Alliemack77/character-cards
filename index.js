document.addEventListener('readystatechange', (event) => {
    if(event.target.readyState === 'complete') {
        initApp();
    }
})

const initApp = async () => {
    const entries  = await getAllEntries();

    if (entries.length) {
        processEntries(entries)
    }
}

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
    
    createH2ColorClass()
    
}


const buildCard = (entry) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const title = createTitle(entry)
    card.append(title)

    const image = createImage(entry)
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

const createTitle = ({name}) => {
    const title = document.createElement('h2')
    title.classList.add('title')
    title.textContent =`${name}`

    return title
}

const createImage = (entry) => {
    const image = document.createElement('img')
    image.classList.add('image')
    image.src = "https://source.unsplash.com/random"
    image.alt = `Doctor Who companion ${entry.name}`

    return image
}


const createH2ColorClass = () => {
    const titles = document.querySelectorAll('.card h2')
    const colors = [
        'gold', 
        'pink', 
        'teal', 
        'purple', 
        'green', 
        'blue',
        'gold', 
        'pink', 
        'teal', 
        'purple', 
        'green', 
        'blue',
    ]
    let index = 0;

    Array.from(titles).forEach(title => {
        title.classList.add(`${colors[index]}`)
        // index = index % colors.length;
        index += 1
    })
}









