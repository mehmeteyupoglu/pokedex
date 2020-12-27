const checkDarkState = (isDark, darkMode, lightMode) => {
  return isDark ? darkMode : lightMode;
};

const renderAbilities = (arr) => {
  if (arr.length > 0) {
    let abilities = arr.map((item) => {
      return item.ability.name;
    });

    return abilities.join(", ");
  }
  return null;
};

const renderTypes = (arr, index) => {
  if (arr.length) {
    let types = arr.map((item) => {
      return item.type.name;
    });

    return types.join(", ");
  }

  return null;
};

const renderMoves = (arr, index) => {
  if (arr.length) {
    let moves = arr.map((item) => {
      return item.move.name;
    });

    return moves.join(", ");
  }

  return null;
};

module.exports = { checkDarkState, renderAbilities, renderTypes, renderMoves };
