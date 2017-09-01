export function updateAppSize(size) {
  return {
    type: 'UPDATE_APP_SIZE',
    payload: size,
  };
}

export function updateHeaderSize(size) {
  return {
    type: 'UPDATE_HEADER_SIZE',
    payload: size,
  };
}

export function updateMainSize(size) {
  return {
    type: 'UPDATE_MAIN_SIZE',
    payload: size,
  };
}

export function updateFooterSize(size) {
  return {
    type: 'UPDATE_FOOTER_SIZE',
    payload: size,
  };
}
