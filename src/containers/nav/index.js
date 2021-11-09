import React from 'react';
import "./nav.css";
import MenuList from "../../components/menuList";
import MenuSubList from "../../components/menuSubList";
import icon_1 from "../../assets/icon_1.png";
import icon_2 from "../../assets/icon_2.png";
import icon_3 from "../../assets/icon_3.png";
import icon_4 from "../../assets/icon_4.png";
import icon_5 from "../../assets/icon_5.png";
import icon_7 from "../../assets/icon_7.png";

class Nav extends React.Component {
    render() {
        return (
           <nav>
               <div>
                   <img src={icon_7} alt="" style={{width:"100px", height:"100px", marginLeft: '100px'}}></img>
                   
               </div>
               <div className="section-holder">
                   <MenuList text="New Releases" img={icon_1}/>
                   <MenuList text="Most Popular" img={icon_2}/>
                   <MenuList text="Recommended" img={icon_3}/>
                   <MenuList text="Top Chart" img={icon_4}/>   
               </div>

               <div className="section-holder">
                    <MenuList text="My Collection" img={icon_5}/>  
                    <MenuSubList text="Bookmark" />
                    <MenuSubList text="History" />
                    <MenuSubList text="Subscription" />


               </div>

           </nav>
        );

    }
}

export default Nav;