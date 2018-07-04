
const UP = 1;
const RIGHT = 2;
const DOWN = 3;
const LEFT = 4;



class Ant{
	constructor(direction, position = [0, 0], grid){
		this.direction = direction;
		this.x = position[0];
		this.y = position[1];
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
		cellColor = grid.getCellColor(this.x, this.y);
		grid.toggleCellColor(this.x, this.y);
		this.changeDirection(cellColor);
		this.changePosition();
	}

	moveK(k){
		for(let i = 0; i<k; i++){
			this.move();
		}
	}

}


