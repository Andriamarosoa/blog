import React, { useState } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import { MenuOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import "./header.css"
import { Link } from "react-router-dom";
import Logo from "../logo";
const { Header } = Layout;

export default function Headers({className}:any) {
    const [visible, setVisible] = useState(false);
    return <>
        <Header className={`${className} bg-white mx-auto border-b border-gray-200`}>
            <div className="flex lg:justify-between align-items-center py-0">
                {/* Mobile Menu Button */}
                <Button
                    type="text"
                    icon={<MenuOutlined />}
                    className="d-lg-none flex justify-content-start"
                    onClick={() => setVisible(true)}
                />

                {/* Navbar Logo */}
                <Logo />

                {/* Desktop Menu */}
                <Menu
                    mode="horizontal"
                    className="d-none d-lg-flex uppercase"
                >
                    <Menu.Item key="news"><Link to="/blog" >All Post</Link></Menu.Item>
                    <Menu.Item key="writers">Writers</Menu.Item>
                </Menu>

                {/* Right Side Icons */}
                <div className=" align-items-center hidden lg:flex ">
                    <Link to={'/app/save-blog'} className="!no-underline !text-white"> 
                        <Button type="primary" className="me-3 bg-blue-900 hover:bg-blue-900 transition  ">
                            New Blog 
                        </Button>
                    </Link>
                        
                    <Button type="text" icon={<SearchOutlined />} />
                    
                    <Link to={'/app/profile'} className="!no-underline !text-white"> 
                        <Button type="text" icon={<UserOutlined />} />
                    </Link>
                </div>
            </div>

            {/* Mobile Drawer Menu */}
            <Drawer
                title="Menu"
                placement="left"
                onClose={() => setVisible(false)}
                open={visible}
            >
                <Menu mode="vertical">
                    <Menu.Item key="news"><Link to="/blog" >All Post</Link></Menu.Item>
                    <Menu.Item key="news"><Link to="/app/login" >Login</Link></Menu.Item>
                    <Menu.Item key="news"><Link to="/app/save-blog" >New Blog </Link></Menu.Item>
                    <Menu.Item key="news"><Link to="/" >Disconnect </Link></Menu.Item>
                    <Menu.Item key="writers">Writers</Menu.Item>
                </Menu>
            </Drawer>
        </Header>
    </>
}