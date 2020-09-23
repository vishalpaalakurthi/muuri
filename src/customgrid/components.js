import React from 'react';
export const Item = () => (
  <div className="item">
    <div className="item-content">
      {/* Safe zone, enter your custom markup */}
      This can be anything.
      {/* Safe zone ends */}
    </div>
  </div>
);

export const generateItems = () => {
     // Items.
    const items = [
        { key: '1', text: 'zl', size: 's', color: 'red' },
        { key: '2', text: 'zg', size: 'l', color: 'blue' },
        { key: '3', text: 'nx', size: 'l', color: 'blue' },
    ];

    return items;

}