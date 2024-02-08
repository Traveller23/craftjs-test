import React, {useRef, useState} from "react";
import {InputText} from "primereact/inputtext";
import {InputSwitch} from "primereact/inputswitch";
import {Button} from "primereact/button";
import {Toast} from "primereact/toast";
import {Dialog} from "primereact/dialog";
import copy from "copy-to-clipboard";
import {useEditor} from "@craftjs/core";
import styles from "./Topbar.module.css";

export const Topbar = () => {
    const {actions, query, enabled, canUndo, canRedo} = useEditor(
        (state, query) => ({
            enabled: state.options.enabled,
            canUndo: state.options.enabled && query.history.canUndo(),
            canRedo: state.options.enabled && query.history.canRedo(),
        })
    );

    const [dialogVisible, setDialogVisible] = useState<boolean>(false);
    const [stateToLoad, setStateToLoad] = useState<string>('');
    const toast = useRef<Toast>(null);

    return (
        <div className={styles.wrapper}>
            <div className={styles.readonlySwitch}>
                <InputSwitch checked={enabled}
                             onChange={e =>
                                 actions.setOptions(options => options.enabled = e.value)}/>
                <span>Editor {enabled ? 'enabled' : 'disabled'}</span>
            </div>
            <Button label="Copy current state"
                    onClick={() => {
                        const json = query.serialize();
                        copy(json);
                        toast.current?.show({severity: 'info', summary: 'Info', detail: 'State copied to clipboard'});
                    }}/>

            <Button label="Load State"
                    onClick={() => setDialogVisible(true)}/>

            <Dialog header={<span>Load state</span>}
                    footer={<>
                        <Button label="Cancel"
                                onClick={() => setDialogVisible(false)}/>
                        <Button label="Load"
                                onClick={() => {
                                    const beginTime = performance.now();
                                    setDialogVisible(false);
                                    actions.deserialize(stateToLoad);
                                    toast.current?.show({severity: 'info', summary: 'Info', detail: 'State loaded'});
                                    const elapsed = (performance.now() - beginTime);
                                    console.log(`The loading operation took ${elapsed.toFixed(2)} ms`);
                                }}/>
                    </>}
                    visible={dialogVisible}
                    onHide={() => setDialogVisible(false)}>
                <InputText value={stateToLoad}
                           onChange={e => setStateToLoad(e.target.value)}/>
            </Dialog>
            <Toast ref={toast}/>
        </div>
    );
};
