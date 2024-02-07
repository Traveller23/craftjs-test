import React from "react";
import {useNode} from "@craftjs/core";

export const Container = (props: {
    backgroundColor?: string;
    color?: string;
    fontSize?: number;
    padding?: number;
    margin?: number;
    style?: Omit<React.CSSProperties, 'backgroundColor' | 'color' | 'fontSize' | 'padding' | 'margin'>;
    children?: React.ReactNode;
}) => {
    const {connectors: {connect, drag}} = useNode();

    return (
        <div ref={ref => connect(drag(ref!))}
             style={{
                 backgroundColor: props.backgroundColor,
                 color: props.color,
                 fontSize: props.fontSize,
                 padding: props.padding,
                 margin: props.margin,
                 ...props.style,
             }}>
            {props.children}
        </div>
    );
};

export const ContainerSettings = () => {
    return <div></div>;
};

export const ContainerDefaultProps = {
    backgroundColor: 'rgba(128, 128, 128, 0.05)',
    color: 'var(--color-text-default)',
    fontSize: 16,
    padding: 6,
    margin: 6,
};

Container.craft = {
    props: ContainerDefaultProps,
    related: {
        settings: ContainerSettings,
    },
};
