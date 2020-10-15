import React from 'react';
import { useSelector } from 'react-redux';

import { selectSections } from '../../redux/directory/directorySelectors';

import MenuItem from '../MenuItem';

import './styles.scss';

const Directory = () => {
  const sections = useSelector(selectSections);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
  );
};

export default Directory;
