import dynamic from 'next/dynamic';

// Needs to be imported here as 'dynamic' component as it needs the DOM and can't use SSR.
const DaypilotWrapper = dynamic(
    () => import('./DaypilotWrapperComponent'),
    { ssr: false }
);

export default DaypilotWrapper;