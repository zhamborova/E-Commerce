import React from 'react';
import CollectionItem from "../collection-item/collection-item.component";
import './collection-preview.styles.scss'


const CollectionPreview=({title, items, routeName,history, match})=>{
    return(
        <div className='collection-preview'>
        <h1 onClick={ () => {history.push(`${match.path}/${routeName}`)}} className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
        {items.slice(0,4).map((item) => {
        return <CollectionItem key={item.id} item={item}/>})}
         </div>
        </div>
    )};

export default CollectionPreview;