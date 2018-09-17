import  React,{Component} from 'react';
import classes from  './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';


class Modal extends Component {

    //re-render only if show is changed [true: display, false:close]
    shouldComponentUpdate = (nextProps, nextState) =>{
        return nextProps.show !== this.props.show || nextProps.reRender !== this.props.reRender;
        
    } 
    
    // --- lifecycle debug ---
    //componentDidUpdate = () => console.log('[Modal Did update]');
         
        

    render(){
        return (
                    <Aux>
                        <Backdrop 
                            show={this.props.show} 
                            close={this.props.close}/>
                        <div 
                            className = {classes.Modal} 
                            style={{
                                display: this.props.show? null : 'none' 
                            }} >
                            <span 
                                className={classes.Closer}
                                onClick={this.props.close}
                                >&times;</span>
                            {this.props.children}
                        </div>
                    </Aux>
                )
    }
} 

export default Modal;