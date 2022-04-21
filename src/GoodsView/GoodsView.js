import React from "react";
import { useParams } from "react-router-dom";

function GoodsView(props) {
    const data = [
        {
            id: 1,
            name: 'мышка',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eaque nisi! Sequi ab voluptates natus asperiores doloribus. Nisi, maiores officiis.',
        },
        {
            id: 2,
            name: 'коврик',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eaque nisi! Sequi ab voluptates natus asperiores doloribus. Nisi, maiores officiis.',
        },
        {
            id: 3,
            name: 'клавиатура',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eaque nisi! Sequi ab voluptates natus asperiores doloribus. Nisi, maiores officiis.',
        },
    ]

    const params = useParams()
    const id = params.id
    const product = data.find((product) => product.id === +id)

    return (
        <div>
            <h3>{product ? product.name : "Продукт не найден"}</h3>
            <p>{product ? product.description : "Попробуйте выбрать что-то другое"}</p>
        </div>
    )
}

export default GoodsView