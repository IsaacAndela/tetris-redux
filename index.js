import store from 'store/store';
import 'actions/move';
import {boundMove} from 'actions/move';
import {boundDrop} from 'actions/drop';
import {boundNewBlock} from 'actions/newBlock';
import {boundRotate} from 'actions/rotate';

window.store = store;
window.boundMove = boundMove;
window.boundDrop = boundDrop;
window.boundNewBlock = boundNewBlock;
window.boundRotate = boundRotate;