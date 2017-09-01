import sizeMe from 'react-sizeme'; // eslint-disable-line no-unused-vars

export default function ({ ...args }) {
  return sizeMe({
    monitorWidth: true,
    monitorHeight: true,
    monitorPosition: true,
    ...args,
  });
}
