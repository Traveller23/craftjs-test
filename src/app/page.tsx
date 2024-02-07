"use client";

import React from "react";
import {Editor, Frame, Element} from "@craftjs/core";
import {Topbar} from "@/app/components/Topbar";
import {Toolbox} from "@/app/components/Toolbox";
import {Container} from "@/app/components/user/Container";
import {Text} from "@/app/components/user/Text";
import {Button} from "@/app/components/user/Button";
import styles from "./page.module.css";

const createTestComponents = () => {
    const components: React.JSX.Element[] = [];

    for (let containerIdx = 0; containerIdx < 10; ++containerIdx) {
        const items: React.JSX.Element[] = [];
        for (let itemIdx = 0; itemIdx < 12; ++itemIdx) {
            items.push(<Button key={itemIdx}/>);
        }
        components.push(
            <Element key={containerIdx} canvas is={Container} style={{minHeight: "3rem"}}>
                {items}
            </Element>
        );
    }

    return components;
};

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
                        <Element canvas is="div">
                            {createTestComponents()}
                        </Element>
                    </Frame>
                </div>
            </Editor>
        </div>
    );
}
