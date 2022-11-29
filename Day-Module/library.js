export let message = "This is for module concept";
console.log("this is lib");
export let display = (name)=>{return console.log(`My name is ${name}`)}


export class Game{

    constructor(name,platform,technology){
        this.name = name;
        this.platform = platform;
        this.technology = technology
    }

    gameDetails(){
        console.log(`Game is called ${this.name}, ${this.name} runs on ${this.platform}, this game is build using ${this.technology}`);
    }
}