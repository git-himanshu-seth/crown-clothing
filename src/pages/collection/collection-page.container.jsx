import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component'
import {compose} from 'redux';
import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selector';


const mapStateToProps=createStructuredSelector({
isLoading:state=>!selectIsCollectionsLoaded(state)
});

const CollectionPageContainer=compose(connect(mapStateToProps,null),WithSpinner)(CollectionPage) ;

export default CollectionPageContainer;