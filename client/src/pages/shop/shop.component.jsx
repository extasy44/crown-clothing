import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fatchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionPageContainer from '../collection/collection.container';
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";

const ShopPage = ( {fatchCollectionsStart, match} ) => {

  useEffect(() => {
    fatchCollectionsStart();
  }, [fatchCollectionsStart]);

  return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );

} 

const mapDispatchToProps = (dispatch) => ({
  fatchCollectionsStart: () => dispatch(fatchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);