import type { LinksFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';

import stylesUrl from '~/styles/jokes.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

export default function JokesRoute() {
  return (
    <div className="jokes-layout">
      <h1>J🤪KES</h1>
      <main className="jokes-main">
        <Outlet />
      </main>
    </div>
  );
}
