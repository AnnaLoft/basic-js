  const CustomError = require("../extensions/custom-error");

  module.exports = function countCats(matrix) {
      let cat = '^^';
      let result = [];
      if (matrix.length === 0) {
          return 0;
      } else {
          for (let i = 0; i < matrix.length; i++) {
              for (let j = 0; j < matrix[i].length; j++) {
                  if (matrix[i][j] === cat) {
                      result.push(matrix[i][j]);
                  }
              }
          }
          return result.length;
      }
  };