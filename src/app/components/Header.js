"use client"

import { Row, IconButton } from "@narmi/design_system";

const Header = () => {
   return (
      <header className="padding--x--xl padding--y">
         <Row>
            <Row.Item>
               Narmi
            </Row.Item>
            <Row.Item shrink>
               <IconButton 
                  kind="plain"
                  textSize="l"
                  name="shopping-bag"
                  label="Shopping bag"
               />
            </Row.Item>
         </Row>
      </header>
   );
}


export default Header;