const $arenas = document.querySelector('.arenas');
const $randomBtn = document.querySelector('.button');
    
const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: [
        '',
        ''
    ],
    attack: letFight("Scorpion")
};

const player2 = {
    player: 2,
    name: 'Kitana',
    hp: 100,
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

function createElement(tag,className) {
    const $tag = document.createElement(tag);
    if (className) {
$tag.classList.add(className);
    }
    
    return $tag;
}

function createPlayer(player) {
    const $player = createElement('div','player'+player.player);

    const $progressbar = createElement('div','progressbar');
    $player.appendChild($progressbar);

    const $character = createElement('div','character');
    $player.appendChild($character);

    const $life = createElement('div','life');
    $progressbar.appendChild($life);
    $life.style.width = player.hp+'%';
    
    const $name = createElement('div','name');
    $progressbar.appendChild($name);
    $name.innerText = player.name;

    const $img = createElement('img');
    $character.appendChild($img);
    $img.src = player.img;

    return $player;
    
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player'+player.player+' .life');
    console.log(player.hp -= Math.ceil(Math.random() * 20));
    $playerLife.style.width = player.hp + '%';
    if (player.hp <= 0) {
        
        $playerLife.style.width = 0 + '%';
        $randomBtn.disabled = true;
    };

    if (player1.hp <= 0) {
        $arenas.appendChild(playerWin(player2.name));
    }else if (player2.hp <= 0) {
        $arenas.appendChild(playerWin(player1.name));
    }
     
}

function playerWin(name) {
    const $winTitle = createElement('div', 'winTitle');
    $winTitle.innerText = name + ' win';

    return $winTitle;
}

$randomBtn.addEventListener('click',function () {
    changeHP(player1);
    changeHP(player2);
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
