
const BLACK = 0;
const WHITE = 1;

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
		if (self.visited[x] === undefined || self.visited[x][y] === undefined){
			cellColor = this.initialCellColorFunction(x, y);
			return cellColor
		}
		return self.visited[x][col].color;
	}

	/*toggling the color of each cell. if the cell has been visited before just toggling the color 
	otherwise the node should be added to the nested dictionary. the node will be created and the
	initial color will be set there*/
	toggleCellColor(x, y){
		if (self.visited[x] !== undefined && self.visited[x][y] !== undefined){
			node.color = node.color === WHITE ? BLACK : WHITE;
			return;
		}

		if (self.visited[x] === undefined){
			self.visited[x] = {};
		}

		let cellColor = this.initialCellColorFunction(x, y);
		cellColor = cellColor === WHITE ? BLACK : WHITE;
		const node = Node(cellColor)
		self.visited[x][y] = node;

	}
}
