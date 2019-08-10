import react from 'react';
import Component2 from '../Component2/C2';
const Component1 = (props) => {
    buttonone=()=>{
        return(<Component2 text ={this.props.btn}/>);
    }
    
    
    return(
        <div>
        <input placeholder="www.placeholder.com"></input>
        <button id="b1" onClick={this.props.btn}></button>
        <button id="b2" onClick={this.props.button}></button>
        </div>
        
    );
}

export default Component1;