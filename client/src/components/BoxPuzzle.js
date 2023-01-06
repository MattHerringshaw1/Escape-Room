import { useState, useEffect } from 'react'
import '../styles/boxpuz.css'
import { connect } from 'react-redux'


function BoxPuzzle(props) {
    const [puzzle, setPuzzle] = useState([]);
    const [complete, setComplete] = useState(false);
    const [moves, setMoves] = useState(0);
    const [boxSolve, setBoxSolve] = useState(false)


    //-----------------CODE FOR SETTING THE PUZZLE UP---------------------
    // shuffle the puzzle
    const getShuffledPuzzle = () => {
        const values = [0, 1, 2, 3, 4, 5, 6, 7, 8];

        const firstRow = [1,3,6],
            secondRow = [4,2,0],
            thirdRow = [7,5,8];



        return [firstRow, secondRow, thirdRow];
    };

    const flattenarrayay = array => {
        return array.reduce((flatArray, subArray) => flatArray.concat(subArray), []);
    };

    const getInversionsCount = array => {
        array = flattenarrayay(array).filter(n => n !== 0);

        const inversions = [];

        for (let i = 0; i < array.length - 1; i++) {
            const currentValue = array[i];
            const currentInversions = array.filter(
                (val, j) => i < j && val < currentValue
            );
            inversions.push(currentInversions.length);
        }

        const inversionsCount = inversions.reduce((total, val) => total + val, 0);

        return inversionsCount;
    };

    const isSolvable = puzzle => {
        return getInversionsCount(puzzle) % 2 === 0;
    };

    const getPuzzle = () => {
        let puzzle = getShuffledPuzzle();

        while (!isSolvable(puzzle)) {
            puzzle = getShuffledPuzzle();
        }

        return puzzle;
    };

    useEffect(() => {
        setPuzzle(getPuzzle());
    }, []);

    const movePiece = (x, y) => {
        if (!complete) {
            if (checkNeighbours(x, y) || checkNeighbours(x, y, 2)) {
                const emptySlot = checkNeighbours(x, y) || checkNeighbours(x, y, 2);

                const newPuzzle = puzzle.map(row => row.slice());

                if (x === emptySlot.x && y < emptySlot.y) {
                    newPuzzle[emptySlot.x][emptySlot.y] = puzzle[x][y + 1];
                    newPuzzle[x][y + 1] = newPuzzle[x][y];
                    newPuzzle[x][y] = 0;
                } else if (x === emptySlot.x && y > emptySlot.y) {
                    newPuzzle[emptySlot.x][emptySlot.y] = puzzle[x][y - 1];
                    newPuzzle[x][y - 1] = newPuzzle[x][y];
                    newPuzzle[x][y] = 0;
                }

                if (y === emptySlot.y && x < emptySlot.x) {
                    newPuzzle[emptySlot.x][emptySlot.y] = puzzle[x + 1][y];
                    newPuzzle[x + 1][y] = newPuzzle[x][y];
                    newPuzzle[x][y] = 0;
                } else if (y === emptySlot.y && x > emptySlot.x) {
                    newPuzzle[emptySlot.x][emptySlot.y] = puzzle[x - 1][y];
                    newPuzzle[x - 1][y] = newPuzzle[x][y];
                    newPuzzle[x][y] = 0;
                }

                setPuzzle(newPuzzle);

                setMoves(moves + 1);

                checkCompletion(newPuzzle);
            }
        }
    };

    const checkCompletion = puzzle => {
        if (flattenarrayay(puzzle).join("") === "123456780") {
            setComplete(true);
            setBoxSolve(true)
        }
    };

    const checkNeighbours = (x, y, d = 1) => {
        const neighbours = [];

        if (puzzle[x][y] !== 0) {
            neighbours.push(
                puzzle[x - d] && puzzle[x - d][y] === 0 && { x: x - d, y: y }
            );
            neighbours.push(puzzle[x][y + d] === 0 && { x: x, y: y + d });
            neighbours.push(
                puzzle[x + d] && puzzle[x + d][y] === 0 && { x: x + d, y: y }
            );
            neighbours.push(puzzle[x][y - d] === 0 && { x: x, y: y - d });
        }

        const emptySlot = neighbours.find(el => typeof el === "object");

        return emptySlot;
    };

    const resetPuzzle = () => {
        setComplete(false);
        setPuzzle(getPuzzle());
        setMoves(0);
    };

    const handleHideBoxSolveNoti = () => {
        setComplete(false)
    }

    return (
        <div className="main-box">
            {<h3 className='moves-text'>Moves: {moves}</h3>}
            <div className="outter-box" style={{ border: `5px solid ${complete ? "black" : "purple"}` }}>
                {puzzle.map((row, i) => (
                    <div key={i} className="middle-box">
                        {row.map((col, j) => {
                            const color = col === 0 ? "transparent" : "yellow";
                            return (
                                <div
                                    key={`${i}-${j}`}
                                    onClick={() => movePiece(i, j)}
                                    className="inner-box"
                                    style={{
                                        backgroundColor: color,
                                        cursor: complete ? "not-allowed" : "pointer",
                                        userSelect: "none"
                                    }}>
                                    <div className="inside-font">
                                        {col !== 0 && col}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}
                <div className='reset-button'>
                    <button onClick={() => { resetPuzzle() }}>
                    Reset Puzzle
                </button>
                </div>
            </div>

            {complete && props.hasMagnifyingGlass &&(
                <div className='box-solve-noti-container'>
                    <p onClick={handleHideBoxSolveNoti} className='pop-close'>X</p>
                    <p className='noti-text'>The numbers vanish, and you read the display with the magnifying glass</p>
                    <p className='noti-text'>"The gears are all PRIMED and in working ORDER"</p>
                </div>     
            )}

            {complete && !props.hasMagnifyingGlass &&(
                <div className='box-solve-noti-container'>
                    <p onClick={handleHideBoxSolveNoti} className='pop-close'>X</p>
                    <p className='noti-text'>The numbers vanish, and the display shows a note</p>
                    <p className='noti-text'>But the text is too small to read...</p>
                </div>     
            )}


        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        hasMagnifyingGlass: state.hasMagnifyingGlass
    }
}

export default connect (mapStateToProps)(BoxPuzzle)