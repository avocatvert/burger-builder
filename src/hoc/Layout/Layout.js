import React , {Component} from 'react';
import classes from './Layout.module.css';
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDraw from '../../components/Navigation/SideDraw/SideDraw';

class Layout extends Component {
    state ={
        willSideDrawOpen:false
    }

    closeSideDraw = () => {
        this.setState({willSideDrawOpen:false})
    }

    toggleSideDraw = () => {
        this.setState((prevState) => ({willSideDrawOpen: !prevState.willSideDrawOpen}))
    }

    render(){

        return(
            <React.Fragment>
                <div> 
                    <Toolbar toggleSideDraw = {this.toggleSideDraw}/>
                    <SideDraw 
                        closeSideDraw = {this.closeSideDraw} 
                        open={this.state.willSideDrawOpen}
                        toggleSideDraw={this.toggleSideDraw}
                        />
                </div>
                <main className ={classes.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        )

    }


}
export default Layout;