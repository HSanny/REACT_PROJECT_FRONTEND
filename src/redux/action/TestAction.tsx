export const changeName = (name: string) => {
    return {
      type: 'CHANGE_NAME',
      payload: {
        name
      }
    }
  }
  
  export const changeAge = (age: number) => {
    return {
      type: 'CHANGE_AGE',
      payload: {
        age
      }
    }
  }
  