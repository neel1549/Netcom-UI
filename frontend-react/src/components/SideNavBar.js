import React from "react";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";

const SideNavBar =({rendered})=> {

    return (
      <div
        style={{
          backgroundImage:
            "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80",
        }}
      >
        <Sidebar.Pusher style={{ opacity: 0.4 }}>
          <Sidebar
            as={Menu}
            animation="push"
            direction="left"
            icon="labeled"
            inverted
            visible="true"
            vertical
            width="thin"
          >
            <Menu.Item
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              as="a"
            >
              <Icon name="home" />
              Home
            </Menu.Item>
            {rendered ? (
              <>
               <Menu.Item
               onClick={() => {
                 window.scrollTo({ top: 720, behavior: "smooth" });
               }}
               as="a"
             >
               <Icon name="chart line" />
               Statistics
             </Menu.Item>
 
             <Menu.Item
               onClick={() => {
                 window.scrollTo({ top: 1760, behavior: "smooth" });
               }}
               as="a"
             >
               <Icon name="newspaper outline" />
               Scores
             </Menu.Item>
             </>
              
            ):null}
           

            

          </Sidebar>
        </Sidebar.Pusher>
      </div>
    );
  
}

export default SideNavBar;
