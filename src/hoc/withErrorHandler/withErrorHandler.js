import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => { //axios instance so that we can setup a global error handler on it.
    return class extends Component { //anonymous class because i never use that class, i return it here. it's a class factory essentially, withErrorHandler creates these classes.
        state = {
            error: null
        }
        UNSAFE_componentWillMount() { //this was didmount. will mount ki jagah constructor bhi same kaam karega. this will be
            // called before the child components are rendered. we are not causing side effects here we are just registeriong
            // the interceptors.
                this.reqInterceptor = axios.interceptors.request.use(req => {
                    this.setState({ error: null });
                    return req;
                });

                this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                    console.log(error);
                    this.setState({ error: error });
                });
                        }

        componentWillUnmount() { // this is executed at the point of time a component isn't required anymore.
        //in case of hooks, you write this in the return function of useEffect as since this function runs whenever cleanup is done for this component.
                // console.log('Will Mount', this.reqInterceptor, this.resInterceptor);
                axios.interceptors.request.eject(this.reqInterceptor);
                axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
         this.setState({ error: null });   
        }

        render() {
            return (
                <Aux>
                    <Modal 
                    show={this.state.error}
                    modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message :  null}
                    </Modal>
                    
                    <WrappedComponent {...this.props} />
    
                </Aux>
            );    
        }
    }
}

export default withErrorHandler;