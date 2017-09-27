import React, {Component} from 'react';
import Card from '../components/card/index';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../styles/container.scss';

class CardContainer extends Component{
    render(){
        const {basket, itemArr, deleteCard, changeCard, sum} = this.props;
        return(
            <div className={s.container}>
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
                <h2 className={s.total}>
                    {basket.length===0 ?
                        <div>
                            No cards
                        </div>
                        :
                        <div>
                            {basket.reduce((sum, item)=> sum + (item.price*item.quantity),0).toFixed( 2 )} &#8364;
                        </div>
                    }
                </h2>
            </div>
        )
    }
}

export default withStyles(s)(CardContainer);