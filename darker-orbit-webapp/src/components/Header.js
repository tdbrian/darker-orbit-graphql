import React from 'react'
import { css } from 'react-emotion';

let transition = css`
  transition: 1500ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export default ({ loading, user }) => {
  return (
    <header className={css`
      background-color: #eee;
      width: 100%;
      ${transition};
      opacity: ${loading ? 0 : 100};
    `}>
      {loading ? 'loading...' : user.email}
    </header>
  )
}
