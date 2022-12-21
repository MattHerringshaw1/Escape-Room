import '../styles/box.css'
import { useEffect } from 'react'

function Box() {

    const state = {}


    const randomGrid = () => {

        // select the list items
        let ul = document.querySelectorAll('li');;
        const letters = ["A", "B", "C", "D", "E", "F", "G", "H", ""]

        // this function sets a unique id for each list item, in the form 'li0' to 'li8'
        const setId = (items) => {
            for (let i = 0; i < items.length; i++) {
                items[i].setAttribute("id", `li${i}`)
            }
        }

        // shuffle the array
        const shuffle = (arr) => {
            const copy = [...arr];
            // loop over the array
            for (let i = 0; i < copy.length; i++) {
                // for each index,i pick a random index j 
                let j = parseInt(Math.random() * copy.length);
                // swap elements at i and j

                let temp = copy[i];
                copy[i] = copy[j];
                copy[j] = temp;
            }
            return copy;
        }

        const fillGrid = (items, letters) => {
            let shuffled = shuffle(letters)

            items.forEach((item, i) => {
                item.innerText = shuffled[i];
            })
        }
        fillGrid(ul, letters)
        

        function setUp() {
            fillGrid(ul, letters);
            setId(ul)
            // set up the droppable and dragabble contents
            setDroppable(ul);
            setDraggable(ul);
        }

        const setDroppable = (items) => {
            items.forEach((item, i) => {
                if (!item.innerText) {
                    item.setAttribute("ondrop", "drop_handler(event);");
                    item.setAttribute("ondragover", "dragover_handler(event);");
                    item.setAttribute("class", "empty");
                }
                return;
            })
        }

        const setDraggable = (items) => {
            items.forEach(item => {
                item.setAttribute("draggable", "true");
                item.setAttribute("ondragstart", "dragstart_handler(event)");
                item.setAttribute("ondragend", "dragend_handler(event)");
            })
        }

        const dragend_handler = (ev) => {
            console.log("dragEnd");
            // Remove all of the drag data
            ev.dataTransfer.clearData();
    
            // set new droppable and draggable attributes
            setDroppable(document.querySelectorAll('li'));
            setDraggable(document.querySelectorAll('li'))
        }

        state.content = letters;
        setUp()
    }







    useEffect(() => {
        randomGrid()
    })

    const dragstart_handler = (ev) => {
        console.log("dragstart")
        ev.dataTransfer.setData("text/plain", ev.target.id)
        ev.dataTransfer.dropEffect = "move";
    }

    const dragover_handler = (ev) => {
        console.log("dragOver");
        ev.preventDefault();
    }

    const drop_handler = (ev) => {
        console.log("drag")
        ev.preventDefault();
        // Get the id of the target and add the moved element to the target's DOM
        const data = ev.dataTransfer.getData("text/plain");
        ev.target.innerText = document.getElementById(data).innerText;

        // once dropped, unempty the cell :)
        ev.target.classList.remove("empty")
        // remove relevant attributes
        ev.target.setAttribute("ondrop", "");
        ev.target.setAttribute("ondragover", "");
        document.getElementById(data).innerText = "";
    }

    const dragend_handler = (ev) => {
        console.log("dragEnd");
        // Remove all of the drag data
        ev.dataTransfer.clearData();
    }

    return (
        <div className='box-component'>
            <div className='box-body'>
                <h4>Box Puzzle</h4>
                <div className='container'>
                    <ul className='box-puzzle'>
                        <li className='box1'></li>
                        <li className='box2'></li>
                        <li className='box3'></li>
                        <li className='box4'></li>
                        <li className='box5'></li>
                        <li className='box6'></li>
                        <li className='box7'></li>
                        <li className='box8' id='li8' draggable="true" onDragStart={dragstart_handler} onDragEnd={dragend_handler}></li>
                        <li className='box9' id='li9' onDrop={drop_handler} onDragOver={dragover_handler}></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Box