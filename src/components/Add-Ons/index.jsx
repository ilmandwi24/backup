import React from 'react';

import classes from './style.module.scss';
import CheckboxAddOns from '@components/CheckboxAddOns';

const AddOns = () => {
  return (
    <div className={classes.addons}>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <CheckboxAddOns addons="Online Service" description="Access to multiplayer games" price="+$1/mo" />
      <CheckboxAddOns addons="Larger storage" description="Extra 1TB of cloud save" price="+$2/mo" />
      <CheckboxAddOns addons="Customizable profile" description="Custom theme on your profile" price="+$2/mo" />
    </div>
  );
};

export default AddOns;
