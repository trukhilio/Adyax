import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cardActions from '../actions/cardAction';
import NewCard from "./newCard";
import CardContainer from "./cardsContainer";
import MainPage from './mainPage';

class App extends Component {
    render(){
        const { main } = this.props;
        const { cancelCardSave, getCards, addCardSave, deleteCard, changeCard, sum} = this.props.cardActions;
        return(
                <MainPage>
                    <NewCard
                        itemArr={main.itemArr}
                        addNewCard={main.addNewCard}
                        fetching={main.fetching}
                        addCardSave={addCardSave}
                        getCards={getCards}
                        cancelCardSave={cancelCardSave}
                    />
                    <CardContainer
                        basket={main.basket}
                        itemArr={main.itemArr}
                        deleteCard={deleteCard}
                        changeCard={changeCard}
                        sum={sum}
                    />
                </MainPage>
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
        cardActions: bindActionCreators(cardActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);