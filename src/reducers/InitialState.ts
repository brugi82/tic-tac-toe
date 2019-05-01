import { create2DArray } from "../util/create2DArray";
import uuidv4 from 'uuid';

export default {
    id: uuidv4(),
    x: '',
    o: '',
    board: create2DArray(3)
}