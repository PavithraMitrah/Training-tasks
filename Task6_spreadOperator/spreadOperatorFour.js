const stock = {
	pencil: {
		name: 'natraj',
        type: ['HB', '2H', 'H'],
        rate: [3, 5, 5],
        available_stock: 250
    },
    note_book: {
        name: 'class mate',
        type: ['long size', 'king size'],
        rate: [35, 20],
        available_stock: 500
    }
};
const newStock={
    ...stock
}
const {pencil}=newStock;
const {rate}=pencil;
const pencilRate=[...rate,...[6,10]];
pencil.rate=pencilRate;

const {note_book}=newStock;
const {type}=note_book;
const noteType=[...type,...['small size', 'ruled', 'un ruled']];
note_book.type=noteType;
console.log(newStock);
