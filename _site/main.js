import {InfiniteGrid} from './infiniteGrid';
import {Ant} from './ant';


let infiniteGrid = new InfiniteGrid();
let ant = new Ant(infiniteGrid);
ant.moveK(5);
infiniteGrid.print();
