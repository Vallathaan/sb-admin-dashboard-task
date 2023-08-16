import React from 'react'

const Footer = ()  => {
  let year = new Date().getFullYear();
  return (
    <footer className="sticky-footer bg-white">
      <div className="container my-auto">
        <div className="copyright text-center my-auto"></div>
        <span>Copyright &copy; Your website {year}</span> 
      </div>
    </footer>
  );
};

export default Footer;