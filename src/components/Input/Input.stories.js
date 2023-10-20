import React from "react";
import Input from "./Input";


export default {
    title: 'Form/InputSample',
    component: Input
}

export const Large = () => <Input size='large' placeholder='Large' />
export const Medium = () => <Input size='medium' placeholder='Medium' />
export const Small = () => <Input size='small' placeholder='Small' />

