import React, { Component } from 'react';
//import 'tachyons';

// class SearchBox extends Component {
//     render({ searchChange }) {
//         return (
//             <div className='pa2'>
//                 <input className='pa3 ba b--green bg-lightest-blue'
//                     type='search'
//                     placeholder='search robots'
//                     onChange={searchChange} />
//             </div>
//         );
//     }
// }
// export default SearchBox;


const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search robots'
                onChange={searchChange} />
        </div>
    );
}
export default SearchBox;