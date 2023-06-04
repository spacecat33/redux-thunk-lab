import React from 'react';
// import CatPic from './CatPic'

const CatList = ({catPics})=> {

    const renderCats = catPics.map(cat =>  <div key={cat.id}><img src={cat.url} alt="Kitty!"/></div>)

    return (
        <div>
            {renderCats}
        </div>
    )

}
  export default CatList;
  