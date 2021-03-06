import React , {Component} from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDraw from '../../components/Navigation/SideDraw/SideDraw';

class Layout extends Component {
    state ={
        isSideDrawOpen:false
    }

    closeSideDraw = () => {
        this.setState({isSideDrawOpen:false})
    }

    toggleSideDraw = () => {
        this.setState((prevState) => ({isSideDrawOpen: !prevState.isSideDrawOpen}))
    }

    render(){

        return(
            <Aux>
                <div> 
                    <Toolbar toggleSideDraw = {this.toggleSideDraw}/>
                    <SideDraw 
                        closeSideDraw = {this.closeSideDraw} 
                        open={this.state.isSideDrawOpen}
                        toggleSideDraw={this.toggleSideDraw}
                        />
                </div>
                <main className ={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )

    }


}
export default Layout;