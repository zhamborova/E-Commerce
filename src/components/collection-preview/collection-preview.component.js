import React from 'react';
import CollectionItem from "../Item/collection-item.component";
import './collection-preview.styles.scss'

const PreviewCollection=({title, items})=>{
    return(
        <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
        {items.slice(0,4).map(({id,...otherItemProps}) => {
        return <CollectionItem key={id} {...otherItemProps}/>})}
         </div>
        </div>
    )};

export default PreviewCollection;