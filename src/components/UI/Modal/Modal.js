import  React,{Component} from 'react';
import classes from  './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';


class Modal extends Component {

    //re-render only if show is changed [true: display, false:close]
    shouldComponentUpdate = (nextProps, nextState) =>{
        return nextProps.show !== this.props.show || nextProps.reRender !== this.props.reRender;
        
    } 
    
    // --- lifecycle debug ---
    //componentDidUpdate = () => console.log('[Modal Did update]');
         
        

    render(){
        return (
                    <React.Fragment>
                        <Backdrop 
                            show={this.props.show} 
                            close={this.props.close}/>
                        <div 
                            className = {classes.Modal} 
                            style={{
                                display: this.props.show? null : 'none' ,
                                ...this.props.style
                            }} >
                            <span 
                                className={classes.Closer}
                                onClick={this.props.close}
                                >&times;</span>
                            {this.props.children}
                        </div>
                    </React.Fragment>
                )
    }
} 

export default Modal;