"use client";

import React from "react";
import {Editor, Frame, Element} from "@craftjs/core";
import {Topbar} from "@/app/components/Topbar";
import {Toolbox} from "@/app/components/Toolbox";
import {Container} from "@/app/components/user/Container";
import {Text} from "@/app/components/user/Text";
import {Button} from "@/app/components/user/Button";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <Editor resolver={{Container, Text, Button}}
                    onNodesChange={() => console.log('onNodesChange')}>
                <div className={styles.header}>
                    <Topbar/>
                </div>
                <div className={styles.mainArea}>
                    <Toolbox/>
                    <Frame>
                        <Element canvas is="div" className={styles.frame}>
                            <Element canvas is={Container} style={{minHeight: "3rem"}}>
                                <Button label="Click me"/>
                                <Button label="Click me"/>
                                <Button label="Click me"/>
                                <Button label="Click me"/>
                                <Button label="Click me"/>
                                <Button label="Click me"/>
                                <Button label="Click me"/>
                                <Button label="Click me"/>
                                <Button label="Click me"/>
                                <Button label="Click me"/>
                                <Button label="Click me"/>
                                <Button label="Click me"/>
                            </Element>
                        </Element>
                    </Frame>
                </div>
            </Editor>
        </div>
    );
}
