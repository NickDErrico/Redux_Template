
// LIVES IN STORE FOLDER :

//1. create initial createStore :
let store = Redux.createStore(reducer, [])

// LIVES IN COMPONENTS FOLDER :
//2. Event Listener :

  //a. Define element location
  let eventLocation = document.querySelector('#event-location')

  //b. Create event listener
  eventLocation.addEventListener('eventType', () => {

    //b.1. if necessary define element location
    let elementLocationValue = document.querySelector('#element-location').value
    //b.2. dispatch fires action creator ** elementLocationValue is the payload
    store.dispatch(actionCreator(elementLocationValue))
  })

    // LIVES IN ACTIONS FOLDER :
    //3. Action Creator :

    //a. create actionCreator function
    function actionCreator(payloadValue) {
      //a.1. return action object
      return {
        //a.2. action type(NEEDED)
        type: 'ACTION_TYPE',
        //a.3. payload and any other key needed only based on what you want to do
        payload: payloadValue
      }
    }

      // LIVES IN REDUCERS FOLDER :
      //4. Reducer :

      //a. create reducer function
      function reducer(state, action) {
        //b. create switch statement where each case is a possible action.type
        switch (action.type) {
          case 'ACTION_TYPE':
            return state.someMethod(action.payload)
          default:
            return state;
        }
      }

        // EFFECTS MULTIPLE COMPONENTS :
        //5. If React then render as you will
