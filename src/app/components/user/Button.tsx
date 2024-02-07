import React from "react";
import {Button as PrimeButton, ButtonProps} from "primereact/button";
import {useNode} from "@craftjs/core";

export const Button = ({label, size, icon, severity}: {
    label?: string;
    size?: ButtonProps['size'];
    icon?: ButtonProps['icon'];
    severity?: ButtonProps['severity'];
}) => {
    const {connectors: {connect, drag}} = useNode();
    return (
        <span ref={ref => connect(drag(ref!))}
              style={{display: "inline-block", padding: "0.5rem 1rem"}}>
            <PrimeButton label={label} size={size} icon={icon} severity={severity}/>
        </span>
    );
};

export const ButtonSettings = () => {
    return <div></div>;
};

export const ButtonDefaultProps = {
    label: 'Click me',
    size: undefined,
    icon: 'pi pi-check',
    severity: undefined,
};

Button.craft = {
    props: ButtonDefaultProps,
    related: {
        settings: ButtonSettings,
    },
};
