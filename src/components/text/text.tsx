'use client';
import { useRouter } from 'next/router';
import React, { Suspense, useEffect, useRef, useState } from 'react'

const Text = () => {
    const router = useRouter()
    console.log('router', router.query.name)
    return <div onClick={() => router.push('/')}>
        Text Page


    </div>
}

const TextPage = () => {
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
                </Suspense>
            </div> : <></>}
        </div>
    )
}

export default TextPage
