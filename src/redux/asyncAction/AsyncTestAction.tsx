export const asyncChangeName = () => {
    return async (dispatch: any) => {
      const countDown: Promise<any> = new Promise((resolve: any, reject: any) => {
        setTimeout(() => {
          resolve({
            name: 'Obtained by simulating network request name'
          })
        }, 1000)
      })
      const data: any = await countDown;
      const params: any = {
        type: 'ASYNC_CHANGE_NAME',
        payload: {
          name: data.name
        }
      };
      dispatch(params);
    }
  }
  