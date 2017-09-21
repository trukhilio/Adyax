import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Button from '../components/button/index';

class App extends Component {
    render(){
        const { main } = this.props;
        return(
            <div>
                <Button>Hello</Button>
            </div>

        )
    }
}

function mapStateToProps (state) {
    return {
        main: state.main
    }
}

// function mapDispatchToProps(dispatch){
//     return {
//         mainActions: bindActionCreators(mainActions, dispatch)
//     }
// }

export default connect(mapStateToProps)(App);
    // , mapDispatchToProps)

