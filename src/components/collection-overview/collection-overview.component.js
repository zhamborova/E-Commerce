import React from 'react';
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";


const CollectionOverview = ({collections,history,match}) => (
    <div className='collection-overview'>
        {collections.map(({id, ...otherCollectionProps})=>{
            return <CollectionPreview key={id} match={match} history={history} {...otherCollectionProps} />})}
    </div>
);


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);