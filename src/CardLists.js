import React from 'react';
import Cards from './Cards';


const CardLists = ({ robots }) => {

    // if (true) {
    //     throw new Error('Ohh Noooo');
    // }

    const cardComponent = robots.map((user, i) => {
        return <Cards key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    })
    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardLists;

// import React from 'react';
// import Cards from './Cards';
// import './robots';
// import { robots } from './robots';

// function CardLists(props) {
//     const cardComponents = robots.map(function (user) {
//         return <Cards id={user.id} name={user.name} email={user.email} />
//     })
//     return cardComponents;

// }

// export default CardLists;