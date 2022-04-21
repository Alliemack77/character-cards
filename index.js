document.addEventListener('readystatechange', (event) => {
    if(event.target.readyState === 'complete') {
        initApp();
    }
})

const initApp = async () => {
    // get all entries 
    const entries  = await getAllEntries();
    console.log("Entries: ", entries)

    // process all entries
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

// F => process entries
const processEntries = (entries) => {
    const cards = document.getElementById('cards')

    // for each user in users, create an author
    entries.map(entry => {
        console.log(entry.id) 
        // return user.userId
    })

    return cards
}

