import React from 'react';

const SpecificHomePage = (props) => {
  const ComponentToShow = props.page;
    return(
      <div>
        <ComponentToShow />
      </div>
    );
}

export default SpecificHomePage;