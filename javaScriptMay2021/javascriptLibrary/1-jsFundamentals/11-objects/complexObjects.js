//JSON - JavaScript Object Notation
varjson = {
    "workbench.colorTheme": "One Dark+ (Sublime)",
    "window.zoomLevel": 3,
    "files.exclude": {
    "**/.git": true,
    "**/.DS_Store": true,
    "**/*.js": {
    "when": "$(basename).ts"
    },
    "**/*.js.map": {
    "when": "$(basename)"
    }
    },
    "editor.fontFamily": "Monaco, 'Courier New', monospace",
    "editor.detectIndentation": false,
    "editor.letterSpacing": 0,
    "editor.tabSize": 2,
    "files.autoSave": "off",
    "editor.wordWrap": "on",
    "extensions.ignoreRecommendations": true,
    "[html]": {},
    "files.associations": {
    "*.html": "html",
    "*.js": "javascriptreact"
    },
    "html.format.indentInnerHtml": true,
    "editor.fontSize": 11,
    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.port": 3500,
    "[javascriptreact]": {}
    }

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

console.log(Object.keys(spaceJam)); //Object.keys returns an array consisting of the keys of our object
console.log(Object.keys(spaceJam.toonSquad)); //will return as an array
console.log(Object.keys(spaceJam.toonSquad).toString()); //gives you a single string with all of the keys separated by commas
//doesn't only work for arrays - objects, functions, numbers (maybe)

console.log(Object.values(spaceJam)); //Object.values returns an array consisting of the values of our object
console.log(Object.values(spaceJam.toonSquad));

let garden = {
    vegetable: 'zucchini',
    flower: 'sunflower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

console.log(garden.vegetable);

let inc = 'fruit';
console.log(garden[inc]);

let baking = {};
baking['zucchini'] = 'better make some bread!';
baking.bestKeyEver = 'zucchini'

console.log(baking.zucchini);
console.log(baking.bestKeyEver);
console.log(baking[baking.bestKeyEver]);

let g = 'flower';

Object.keys(garden).forEach(key => {
    if (key == g){
        console.log(garden[key]);
    }
})