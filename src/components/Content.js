////////// DEPENDENCIES //////////
import React from 'react';
import { Global } from '../utils/Global';

////////// COMPONENT //////////
export default function Content(props) {
  const { checkPage } = React.useContext(Global);
  React.useEffect(() => { checkPage(); });

  return (<>
    <main id="content">
      <section id="content-section">
        
      </section>
    </main>
  </>)
}