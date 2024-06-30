import './Square.css';
import X from '../assets/vanya.png';
import Y from '../assets/vlad.png';
import Z from '../assets/minusone.png';
//import 
const Square = (props) => {
    const id = parseInt(props?.id);
    const callback = props?.callback;
    const state = props?.state; // can be 0, 1, 2, where 0 - nothing, 1 - X, 2 - O

    const image_src = {0:Z, 1:X, 2:Y}[state];
               
    return (
        <div className="square_button" id={`${id}`} onClick = {() => {callback(props.id)}}> 
           <img src = {image_src} width = {50}/>
        </div>
    )
}


export default Square;