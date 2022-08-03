interface StateType {
    name: string;
    age: number;
  }
  
  const commonState: StateType = {
    name: '',
    age: 0,
  };
  
  const TestReducer = (state = commonState, action: any): any => {
    switch (action.type) {
      case "CHANGE_NAME":
        return {
          ...state,
          name: action.payload.name,
        };
      case "CHANGE_AGE":
        return {
          ...state,
          age: action.payload.age,
        };
      case "ASYNC_CHANGE_NAME":
        return {
          ...state,
          addressObj: action.payload.name,
        };
      default:
        return state;
    }
  };
  
  export default TestReducer;