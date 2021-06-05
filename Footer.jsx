import React from "react";
function Footer(){
  var CurrentYear =new Date().getFullYear();
  return(
    <div>
      <footer>
        <p>copyright @ {CurrentYear} </p>
      </footer>
    </div>
  );
}
export default Footer;