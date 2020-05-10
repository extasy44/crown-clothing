import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';
import {
  CollectionItemContatiner,
  AddButton, CollectionFooterContainer, BackgroundImage
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    return (
      <CollectionItemContatiner>
        <BackgroundImage className='image' imageUrl={imageUrl} />
        <CollectionFooterContainer>
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItem(item)} inverted>
          ADD TO CART
        </AddButton>
      </CollectionItemContatiner>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);