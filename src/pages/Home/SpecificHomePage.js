import React from 'react';

import styles from './SpecificHomePage.module.css';

const SpecificHomePage = (props) => {
  const ComponentToShow = props.page;
    return(
      <div className={styles.middle_block}>
        <ComponentToShow />
      </div>
    );
}

export default SpecificHomePage;