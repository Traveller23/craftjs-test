import React from "react";
import {Button as PrimeButton} from "primereact/button";
import {useEditor, Element} from "@craftjs/core";
import {Button} from "./user/Button";
import {Container} from "./user/Container";
import {Text} from "./user/Text";
import styles from "./Toolbox.module.css";

export const Toolbox = () => {
    const {connectors} = useEditor();

    return (
        <div className={styles.wrapper}>
            <div>
                <span>Drag to add</span>
            </div>
            <div ref={(ref) => connectors.create(ref!,
                <Element canvas is={Container} style={{minHeight: "3rem"}}/>
            )}>
                <PrimeButton label="Container"/>
            </div>
            <div ref={(ref) => connectors.create(ref!,
                <Text text="Hi world"/>
            )}>
                <PrimeButton label="Text"/>
            </div>
            <div ref={ref => connectors.create(ref!,
                <Button label="Click me"/>
            )}>
                <PrimeButton label="Button"/>
            </div>
        </div>
    );
};
