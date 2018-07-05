
export const BLACK = 0;
export const WHITE = 1;

function initialCellColorChecked(x, y) {
	if (x % 2 === 0 && y % 2 === 0){
		return WHITE;
	}else if (x % 2 !== 0 && y % 2 !== 0){
		return WHITE;
	}else{
		return BLACK;
	}
}

function initialCellColorWhite(x, y) {
	return WHITE;
}

function initialCellColorBlack(x, y) {
	return BLACK;
}


class Node{
	constructor(color){
		this.color = color;
		this.top = null;
		this.bottom = null;
		this.left = null;
		this.right = null;
	}
}

export class InfiniteGrid{
	constructor(initialCellColorFunction = initialCellColorChecked){
		this.visited = {};
		// callback function to give the option to the user for which color 
		// should be the background of the grid (white, black or checked)
		this.initialCellColorFunction = initialCellColorFunction;
	}

	/*this function returns the current color of each cell*/
	getCellColor(x, y){
		if (this.visited[x] === undefined || this.visited[x][y] === undefined){
			let cellColor = this.initialCellColorFunction(x, y);
			return cellColor
		}
		return this.visited[x][col].color;
	}

	/*toggling the color of each cell. if the cell has been visited before just toggling the color 
	otherwise the node should be added to the nested dictionary. the node will be created and the
	initial color will be set there*/
	toggleCellColor(x, y){
		if (this.visited[x] !== undefined && this.visited[x][y] !== undefined){
			node.color = node.color === WHITE ? BLACK : WHITE;
			return;
		}

		if (this.visited[x] === undefined){
			this.visited[x] = {};
		}

		let cellColor = this.initialCellColorFunction(x, y);
		cellColor = cellColor === WHITE ? BLACK : WHITE;
		const node = new Node(cellColor)
		this.visited[x][y] = node;

	}

	print(){
		for(const [x, value] of Object.entries(this.visited)){
			for(const [y, node] of Object.entries(this.visited[x])){
				console.log([[x, y], node.color])
			}
		}
	}

}








