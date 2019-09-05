import React from "react";
import { connect} from 'react-redux';

import { createStructuredSelector} from 'reselect'

import { selectDirectorySelections } from '../../redux/directory/directory.selector';

import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

const Directory = ({sections}) => {
    
    let sectionItem = sections.map(({ id, ...otherSectionProps }) => {
      return <MenuItem key={id} subtitle="Shop now" {...otherSectionProps} />;
    });

    return <div className="directory-menu">{sectionItem}</div>;
  
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySelections
}) 

export default connect(mapStateToProps)(Directory);
