import React from 'react';

import MainBlock from '../../components/UI/MainBlock';

import styles from './SpecificHomePage.module.css';

const SpecificHomePage = (props) => {
  const ComponentToShow = props.page;
    return(
      <MainBlock className={styles.middle_block}>
        <ComponentToShow />
      </MainBlock>
    );
}

export default SpecificHomePage;