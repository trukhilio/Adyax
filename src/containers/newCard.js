import React, { Component } from 'react';
import Button from '../components/button/index';
import CardForm from '../components/formCard/index';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../styles/newCard.scss';

class NewCard extends Component {
    render(){
        const { itemArr, addNewCard, fetching, addCardSave, getCards, cancelCardSave } = this.props;
        return(
            <div className={s.container}>
                { addNewCard ?
                    fetching ?
                        <div className={s.spinner}>
                            <div className={s.rect1}></div>
                            <div className={s.rect2}></div>
                            <div className={s.rect3}></div>
                            <div className={s.rect4}></div>
                            <div className={s.rect5}></div>
                        </div>
                        :
                        <CardForm
                            itemArr={itemArr}
                            cancelCardSave={cancelCardSave}
                            addCardSave={addCardSave}
                        />
                    :
                    <Button
                        className={s.buttonAdd}
                        onClick={getCards}>
                        Add a card
                    </Button>
                }
            </div>
        )
    }
}

export default withStyles(s)(NewCard);