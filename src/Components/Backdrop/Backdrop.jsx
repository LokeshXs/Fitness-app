import { Box } from "@mui/material";

const Backdrop = ({ isOpen, closeMobileDrawer }) => {

  return (
    <div className="backdropContainer" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: '#000', opacity: 0.5, transition: 'all 0.3s', visibility: isOpen ? 'visible' : 'hidden',zIndex:99 }} onClick={closeMobileDrawer} />

  )
};

export default Backdrop;