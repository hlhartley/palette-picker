export const palettesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PALETTES':
      let allPalettes = [...state, ...action.palettes.palettes];
      let sortedPalettes = allPalettes.sort((a, b) => {
        return a.id - b.id
      })
      return sortedPalettes;
    case 'ADD_PALETTE':
      let updatedPalettes = [...state, action.palette];
      return updatedPalettes;
    case 'DELETE_PALETTE':
      let previousPalettes = state.filter((palette) => {
        return action.id !== palette.id
      })
      return previousPalettes;
    default:
      return state;
  }
};