class Block {
  public id: string;
  public title: string;
  public displayHtml: string = "Ala ma kota";
  public valueId: string;

    constructor(title: string) {
        this.title = title;
        this.id = "block - " + Math.floor(Math.random() * 1234).toString();
        this.valueId = "value - " + Math.floor(Math.random() * 1234).toString();
        this.parseHtml();
        console.log(this.displayHtml);
    }

    private parseHtml() {
        this.displayHtml = `<div class="block" id="${this.id}">\n<div>[ ${this.title} ] </div>\n<span type="text" id="${this.valueId}">\n</div>\n`;
    }

  setDisplay(){
    let value = document.getElementById(this.valueId);
    if(value){
      value.innerHTML = "demo";
    }
  }
}

class Row {
  blocks: Block[];
  title: string;
  displayHtml: string = "";

  constructor(blocks: Block[], title: string) {
      this.blocks = blocks;
      this.title = title;
      this.parseHtml();
  }

  addBlock(block: Block) {
      this.blocks.push(block);
  }

  private parseHtml() {
      this.displayHtml = `<div class="row">\n<p>${this.title}</p>\n<div class="blocks">\n`;
      this.blocks.forEach(block => {
          this.displayHtml += block.displayHtml;
          console.log(block.displayHtml);
      });
      this.displayHtml += `</div>\n</div>\n`;
  }

}

class Terminal {
    public displayHtml: string = "";
    public rows: Row[];

    constructor() {
        this.rows = [];
    }
  
    addRow(row: Row) {
      this.rows.push(row);
      this.parseHtml();
    }

    parseHtml() {
        this.displayHtml = `<div class="terminal">\n`;
        this.rows.forEach(row => {
            this.displayHtml += row.displayHtml;
        });
        this.displayHtml += `</div>\n`;
    }
  }

// Create a new row
let row = new Row([], "Row 1");

// Create a new blocks
let block1 = new Block("Block 1");
let block2 = new Block("Block 2");

// Add the blocks to the row
row.addBlock(block1);
row.addBlock(block2);

// Create a new terminal
let terminal = new Terminal();

// Add the row to the terminal
terminal.addRow(row);

// Display the terminal
const terminalElement = document.getElementById("body");
if (terminalElement) {
  terminalElement.innerHTML = terminal.displayHtml;
}