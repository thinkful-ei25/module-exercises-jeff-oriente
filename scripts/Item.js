
'use strict';

const Item = (function() {
  
  const validateName = function(name) {
    console.log('Validate Name Ran', name);
    if (!name || name === undefined) {
      throw new Error('Name must be provided');
    }
  };

  const create = function(name) {
    return {
      id: cuid(),
      name,
      checked: false

    };
  };


  return {
    validateName,
    create
  };

}

)();