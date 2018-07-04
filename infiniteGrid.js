
const BLACK = 0;
const WHITE = 1;

function initialCellColorChecked(row, col) {
	if (row % 2 === 0 && col % 2 === 0){
		return WHITE;
	}else if (row % 2 !== 0 && col % 2 !== 0){
		return WHITE;
	}else{
		return BLACK;
	}
}

function initialCellColorWhite(row, col) {
	return WHITE;
}

function initialCellColorBlack(row, col) {
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

class InfiniteGrid{
	constructor(nodes, initialCellColorFunction = initialCellColorWhite){
		this.nodes = nodes;
		this.visited = {};
		this.initialCellColorFunction = initialCellColorFunction;
	}

	getCellColor(row, col){
	
	}

	/*toggling the color of each cell. if the cell has been visited before just toggling the color 
	otherwise the node should be added to the nested dictionary. the node will be created and the
	initial color will be set there*/
	toggleCellColor(row, col){
		if (self.visited[row] !== undefined && self.visited[row][col] !== undefined){
			node.color = node.color === WHITE ? BLACK : WHITE;
			return;
		}

		if (self.visited[row] === undefined){
			self.visited[row] = {};
		}

		let cellColor = this.initialCellColorFunction(row, col);
		cellColor = cellColor === WHITE ? BLACK : WHITE;
		const node = Node(cellColor)
		self.visited[row][col] = node;

	}
}
