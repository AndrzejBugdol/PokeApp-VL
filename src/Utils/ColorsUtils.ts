export const CardBackgroundColor = {
    normal:"linear-gradient(135deg, #BB98A6 40%, #A2ADB8)",
    fighting:"linear-gradient(135deg, #EE4D4D 40%, #F17171)",
    flying:"linear-gradient(135deg, #71DDFF 40%, white)",
    ground:"linear-gradient(135deg, #E57A45 40%, #E5B045)",
    rock:"linear-gradient(135deg, #7D8995 40%, #8B98A6)",
    bug:"linear-gradient(135deg, #E5B045 40%, #FF884D)",
    ghost:"linear-gradient(135deg, #8B98A6 40%, #ffffff)",
    steel:"linear-gradient(135deg, #8B98A6 40%, #A2aDB8)",
    fire:"linear-gradient(135deg, #D64545 40%, #EE4D4D)",
    water:"linear-gradient(135deg, #40C4FF 40%, #71DDFF)",
    grass:"linear-gradient(135deg, #8BC94D 40%, #A2D471)",
    electric:"linear-gradient(135deg, #FFC44D 40%, #FFD071)",
    psychic:"linear-gradient(135deg, #9065E5 40%, #A071FF)",
    ice:"linear-gradient(135deg, #71DDFF 40%, #71E2D0)",
    dragon:"linear-gradient(135deg, #D64545 40%, #EE4D4D)",
    dark:"linear-gradient(135deg, #000000 40%, #7D8995)",
    fairy:"linear-gradient(135deg, #FF4DA5 40%, #FF71B7)",
    unknown:"linear-gradient(135deg, #FF4DA5 40%, #FF71B7)",
    shadow:"linear-gradient(135deg, #9065E5 40%, #A071FF)",
    poison:"linear-gradient(135deg, #4DDBC4 40%, #71E2D0)"
}

export type PokemonType =  keyof typeof CardBackgroundColor;