import React,{Component} from 'react';
import Aux from '../Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent,axios) => (

    class extends Component{
        state = {
            error: null
        }
        componentWillMount = () => {
            //catch error and update state
            this.respInterceptor = axios.interceptors.response.use(resp => resp, error => {
                this.setState({error:error})
            });
            //reset error to null before a request
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error:null})
                return req;
            })
        }

        
        componentWillUnmount = () => {
            //cleanup interceptors when component instance is unmounted
            axios.interceptors.response.eject(this.respInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
        }

        errorCloser = () => {
            this.setState({error:null})
        }
        
        render(){
            return (
                <Aux>
                    <Modal 
                        show={this.state.error} 
                        close={this.errorCloser}> 
                            {this.state.error? this.state.error.message: null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
                )
        }
    }

);

export default withErrorHandler;