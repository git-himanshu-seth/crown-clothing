import React from "react";

import MenuItem from '../menu-item/menu-item.component'

import {connect} from 'react-redux'

import {createStructuredSelector} from 'reselect'

import{selectDirectorySection} from '../../redux/directory/directory.selector'

import './directory.style.scss';
 const Directory =({sections})=>(
    
        <div className="directory-menu">
            {sections.map(({id ,...OtherSectionProps })=>(<MenuItem key={id}{...OtherSectionProps}/>))}
        </div>
    )

    const mapStateToProps= createStructuredSelector({
      sections:selectDirectorySection
    })

export default connect(mapStateToProps)(Directory);
