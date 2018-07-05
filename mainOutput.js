(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

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
			const node = new Node(cellColor);
			this.visited[x][y] = node;

		}

		print(){
			for(const [x, value] of Object.entries(this.visited)){
				for(const [y, node] of Object.entries(this.visited[x])){
					console.log([[x, y], node.color]);
				}
			}
		}

	}

	const UP = 1;
	const RIGHT = 2;
	const DOWN = 3;
	const LEFT = 4;

	class Ant{
		constructor(grid, direction = UP, position = [0, 0]){
			this.direction = direction;
			this.x = position[0];
			this.y = position[1];
			this.grid = grid;
		}

		changeDirection(color){
			if (color === WHITE){
				switch (this.direction){
					case UP:
						this.direction = RIGHT;
						break;
					case RIGHT:
						this.direction = DOWN;
						break;
					case DOWN:
						this.direction = LEFT;
						break;
					case LEFT:
						this.direction = UP;
						break; 
				}
			}
			
			if (color === BLACK){
				switch (this.direction){
					case UP:
						this.direction = LEFT;
						break;
					case LEFT:
						this.direction = DOWN;
						break;
					case DOWN:
						this.direction = RIGHT;
						break;
					case RIGHT:
						this.direction = UP;
						break; 
				}
			}
		}

		changePosition(){
			switch (this.direction) {
				case UP:
					this.y -= 1;
					break;
				case RIGHT:
					this.x += 1;
					break;
				case LEFT:
					this.x -= 1;
					break;
				case DOWN:
					this.y += 1;
					break;
			}
		}

		move(){
			let cellColor = this.grid.getCellColor(this.x, this.y);
			this.grid.toggleCellColor(this.x, this.y);
			this.changeDirection(cellColor);
			this.changePosition();
		}

		moveK(k){
			for(let i = 0; i<k; i++){
				this.move();
			}
		}

	}

	let infiniteGrid = new InfiniteGrid();
	let ant = new Ant(infiniteGrid);
	ant.moveK(5);
	infiniteGrid.print();

})));
