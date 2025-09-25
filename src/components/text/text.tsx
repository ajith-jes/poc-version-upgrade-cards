'use client';
import { Button, Model } from '@backspace-tech/bst-ui-lib';
import { useRouter } from 'next/router';
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { TestStore } from '../../../stores/test';

const Text = () => {
    const testStore = TestStore.useContainer();

    const router = useRouter()
    console.log('router', router.query.name)
    return <div onClick={() => testStore.testRouter()}>
        Text Page
        <Button onClick={() => testStore.setShow(true)}>click</Button>

    </div>
}

const TextPage = () => {
    const testStore = TestStore.useContainer();
    const [mounted, setMounted] = useState(false);
    const div = useRef(null)
    useEffect(() => {
        if (!!div) {
            setMounted(true)
        }
    }, [div])

    return (
        <div ref={div}>
            {mounted ? <div>
                <Suspense fallback={'loading...'}>
                    <Text />
                    <Model close={testStore.setShow} model={testStore.show} >
                        <div style={{ background: "white", width: "500px", height: "400px" }}>
                            ajith
                        </div>

                    </Model>
                </Suspense>
            </div> : <></>}
        </div>
    )
}

export default TextPage
