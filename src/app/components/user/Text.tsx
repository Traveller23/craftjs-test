import React, {useEffect, useState} from "react";
import {useNode} from "@craftjs/core";
import ContentEditable from "react-contenteditable";

export const Text = ({text, fontSize, textAlign}: {
    text: string;
    fontSize?: number;
    textAlign?: string;
}) => {
    const {connectors: {connect, drag}, actions: {setProp}, selected} = useNode(node => ({
        selected: node.events.selected,
    }));

    const [editable, setEditable] = useState(false);

    useEffect(() => {
        if (!selected) setEditable(false);
    }, [selected]);

    return (
        <div ref={ref => connect(drag(ref!))}
             onClick={() => selected && setEditable(true)}>
            <ContentEditable
                style={{fontSize, textAlign}}
                disabled={!editable}
                html={text}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        document.execCommand('insertLineBreak');
                        event.preventDefault();
                    }
                }}
                onChange={e => setProp((props: any) => props.text = e.target.value, 500)}
            />
        </div>
    );
};

const TextSettings = () => {
    return <div></div>;
};

export const TextDefaultProps = {
    text: 'Hi',
    fontSize: 16,
};

Text.craft = {
    props: TextDefaultProps,
    related: {
        settings: TextSettings,
    },
};
