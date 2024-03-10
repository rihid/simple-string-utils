function lowercase(str) {
    return str.toLowerCase();
  }
  
  function uppercase(str) {
    return str.toUpperCase();
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  module.exports = {
    lowercase,
    uppercase,
    capitalize,
  };
  