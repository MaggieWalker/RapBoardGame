let allRappers = document.getElementsByClassName('rapper');

document.getElementById('game-board').addEventListener('click', (event) => {
    const twochainzAud = document.getElementById('twochainzAud');
    const bigseanAud = document.getElementById('bigseanAud');
    const efortyAud = document.getElementById('efortyAud');
    const chanceAud = document.getElementById('chanceAud');
    const tpainAud = document.getElementById('tpainAud');
    const wakaAud = document.getElementById('wakaAud');
    if (event.target.matches('#twochainz')) {
        twochainzAud.play()
    } else if (event.target.matches('#bigsean')){
        bigseanAud.play()
    } else if (event.target.matches('#eforty')) {
        efortyAud.play()
    } else if (event.target.matches('#chance')) {
        chanceAud.play()
    } else if (event.target.matches('#tpain')) {
        tpainAud.play()
    } else if (event.target.matches('#waka')) {
        wakaAud.play()
    }
})

document.getElementById('guess-options').addEventListener('click', (event) => {
    const twochainzImg = document.getElementById('blanktwochainz');
    if (event.target.id === 'twochainz-guess') {
        twochainzImg.id = 'twochainz';
    }
})
function winGame(num){
        document.getElementById('score').textContent = `You Win Level ${num}!`;
}