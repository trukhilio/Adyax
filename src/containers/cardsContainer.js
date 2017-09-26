import React, {Component} from 'react';
import Card from '../components/card/index';

class CardContainer extends Component{
    render(){
        const {basket, itemArr, deleteCard, changeCard, sum} = this.props;
        return(
            <div>
                {basket.map((item,index)=>(
                    <Card
                        id={item.id}
                        url={item.urlImage}
                        title={item.title}
                        subtitle={item.subtitle}
                        price={item.price}
                        min={item.min}
                        max={item.max}
                        key={index}
                        index={index}
                        itemArr={itemArr}
                        deleteCard={deleteCard}
                        changeCard={changeCard}
                        sum={sum}
                        quantity={item.quantity}
                    />
                ))}
                <h2>{basket.reduce((sum, item)=> sum + (item.price*item.quantity),0)} &#8364;</h2>
            </div>
        )
    }
}

export default CardContainer;