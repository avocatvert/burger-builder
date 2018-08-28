import React , {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDraw from '../Navigation/SideDraw/SideDraw';

class Layout extends Component {
    state ={
        isSideDrawOpen:true
    }

    closeSideDraw = () => {
        this.setState({isSideDrawOpen:false})
    }


    render(){

        return(
            <Aux>
                <div> 
                    <Toolbar/>
                    <SideDraw 
                        closeSideDraw = {this.closeSideDraw} open={this.state.isSideDrawOpen}/>
                </div>
                <main className ={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )

    }


}
export default Layout;