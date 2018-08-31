import  React,{Component} from 'react';
import classes from  './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';


class Modal extends Component {

    //re-render only if show is changed [true: display, false:close]
    shouldComponentUpdate = (nextProps, nextState) => nextProps.show !== this.props.show;
    
    // --- lifecycle debug ---
    // componentWillUpdate(){
    //     console.log('[Modal will update]');
        
    // }

    render(){
        return (
                    <Aux>
                        <Backdrop 
                            show={this.props.show} 
                            close={this.props.closeModal}/>
                        <div 
                            className = {classes.Modal} 
                            style={{
                                display: this.props.show? null : 'none' 
                            }} >
                            <span 
                                className={classes.Closer}
                                onClick={this.props.closeModal}
                                >&times;</span>
                            {this.props.children}
                        </div>
                    </Aux>
                )
    }
} 

export default Modal;