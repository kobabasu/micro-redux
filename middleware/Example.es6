export default store => next => action => {
  console.log('by middleware/Example:', store);
  return next(action);
}
