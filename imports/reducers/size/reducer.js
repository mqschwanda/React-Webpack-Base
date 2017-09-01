const defaultSize = {
  height: null,
  width: null,
  position: null,
};

const defaultState = {
  App: defaultSize,
  Header: defaultSize,
  Main: defaultSize,
  Footer: defaultSize,
};

export default function reducer(state = { ...defaultState }, action) {
  switch (action.type) {
    case 'UPDATE_APP_SIZE': return {
      ...state,
      App: {
        ...defaultSize,
        ...action.payload,
      },
    };
    case 'UPDATE_HEADER_SIZE': return {
      ...state,
      Header: {
        ...defaultSize,
        ...action.payload,
      },
    };
    case 'UPDATE_MAIN_SIZE': return {
      ...state,
      Main: {
        ...defaultSize,
        ...action.payload,
      },
    };
    case 'UPDATE_FOOTER_SIZE': return {
      ...state,
      Footer: {
        ...defaultSize,
        ...action.payload,
      },
    };
    default: return { ...state };
  }
}
