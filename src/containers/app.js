import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mainActions from '../actions/mainAction';
import Form from './form';

class App extends Component {
    render(){
        const { main } = this.props;
        const { addItemRequest, cancelItemRequest, addItemSuccess } = this.props.mainActions;
        return(
            <div>
                <Form
                    addNewItem={main.addNewItem}
                    addItemRequest={addItemRequest}
                    addItemSuccess={addItemSuccess}
                    cancelItemRequest={cancelItemRequest}
                />
            </div>

        )
    }
}

function mapStateToProps (state) {
    return {
        main: state.main
    }
}

function mapDispatchToProps(dispatch){
    return {
        mainActions: bindActionCreators(mainActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);