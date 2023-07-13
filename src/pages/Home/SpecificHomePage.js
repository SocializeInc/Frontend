import React from 'react';

import MainBlock from '../../components/UI/MainBlock';
import styles from './SpecificHomePage.module.css';

const SpecificHomePage = (props) => {
  const classes = `${props.className} + ${styles.middle_block}`

  const ComponentToShow = props.page;
    return(
      <MainBlock className={classes}>
        <ComponentToShow />
      </MainBlock>
    );
}

export default SpecificHomePage;