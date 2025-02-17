import { PageProps } from 'fresh/server.ts';
import { FreshContextState } from '/lib/types.ts';
import { defaultDescription, defaultTitle } from '/lib/utils/misc.ts';
import Header from '/components/Header.tsx';
import DarkModeToggle from '/islands/DarkModeToggle.tsx';

interface Data {}

export default function App({ route, Component, state }: PageProps<Data, FreshContextState>) {
  return (
    <html class='h-full bg-slate-800'>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{defaultTitle}</title>
        <meta name='description' content={defaultDescription} />
        <link rel='stylesheet' href='/styles.css' />
      </head>
      <body class='h-full'>
        <Header route={route} user={state.user} />
        <div class='p-4'>
          <DarkModeToggle />
        </div>
        <Component />
      </body>
    </html>
  );
}
