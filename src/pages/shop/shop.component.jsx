import React from 'react';
import {Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from'../collection/collection.component'
const ShopComponent=({match , path,location, history})=>  {
  console.log('path loction history', path,location, history)
    return(
            <div className='shop-page'>
              <Route exact path={`${match.path}`} component={CollectionOverview}/>
              <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
      
            </div>
        )};        
export default withRouter(ShopComponent);