const player1 = {
    name: 'Scorpion',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: [
        '',
        ''
    ],
    attack: letFight("Scorpion")
};

const player2 = {
    name: 'Kitana',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: [
        '',
        ''
    ],
    attack: letFight('Kitana')
};

function letFight(name) {
    console.log(name + '-Fight...');
}

function createPlayer(playerClass,player) {
    const $player = document.createElement('div');
    $player.classList.add(playerClass);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    $player.appendChild($progressbar);

    const $character = document.createElement('div');
    $character.classList.add('character');
    $player.appendChild($character);

    const $life = document.createElement('div');
    $life.classList.add('life');
    $progressbar.appendChild($life);
    $life.style.width = player.hp+'%';
    
    const $name = document.createElement('div');
    $name.classList.add('name');
    $progressbar.appendChild($name);
    $name.innerText = player.name;

    const $img = document.createElement('img');
    $character.appendChild($img);
    $img.src = player.img;

    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player);
}

createPlayer('player1', player1);
createPlayer('player2', player2);