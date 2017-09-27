import React, { Component } from 'react';
import Button from '../components/button/index';
import CardForm from '../components/formCard/index';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../styles/newCard.scss';

class NewCard extends Component {
    render(){
        const { itemArr, addNewCard, fetching, addCardSave, getCards, cancelCardSave } = this.props;
        return(
            <div>
                { addNewCard ?
                        fetching ?
                            <div>Downloading...</div>
                            :
                            <CardForm
                                itemArr={itemArr}
                                cancelCardSave={cancelCardSave}
                                addCardSave={addCardSave}
                            />
                    :
                    <Button onClick={getCards}>
                        Add a card
                    </Button>
                }
            </div>
        )
    }
}

export default withStyles(s)(NewCard);