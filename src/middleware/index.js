export const customMiddleWare = store => next => action => {
  console.log("Middleware Triggered:", action);
  next(action);
}

export const incrementMiddleware = store => next => action => {
  if(action.type === 'INCREMENT') {
    console.log(`Increment button was clicked, current state is ${store.getState()} \nI will now add to it`);
  }
  
  next(action);
}
