import React from "react";
import Button from "./Button";


export default {
    title: 'buttonSample',
    component: Button
}

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Error = () => <Button variant='error'>Error</Button>
export const Success = () => <Button variant='success'>Success</Button>

