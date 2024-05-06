// import { useState } from 'react';
import { Button } from '@/components/ui/button';
// import { Bookmark } from 'lucide-react';
import { Tooltip } from 'react-tooltip';

function App() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex justify-center items-center gap-6 border-2 border-primary w-9/12 p-4">
          <article className="button-default">
            <h1>Default</h1>
            <Button>Click Me</Button>
          </article>
          <article>
            <h1>Secondary</h1>
            <Button variant={'secondary'}>Signup</Button>
          </article>
          <article>
            <h1>Destructive</h1>
            <Button variant={'destructive'}>Logout</Button>
          </article>
          <article>
            <h1>Small Size</h1>
            <Button variant={'secondary'} size={'sm'}>
              Signup
            </Button>
          </article>
          <article>
            <h1>Large Size</h1>
            <Button variant={'destructive'} size={'lg'}>
              Logout
            </Button>
          </article>
          <article>
            <h1>Button with Icon</h1>
            <Button
              className="mr-2"
              Icon="bookmark"
              Size={20}
              iconPlacement="right"
            >
              Bookmark
            </Button>
          </article>
          <article>
            <h1>Button with Tooltip</h1>
            <Button
              data-tooltip-id="explore"
              data-tooltip-content="Click here to find out more"
            >
              Explore
            </Button>
            <Tooltip id="explore" place="right" />
          </article>
        </div>
      </div>
    </>
  );
}

export default App;
