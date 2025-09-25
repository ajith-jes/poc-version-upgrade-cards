import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { TestStore } from '../../../stores/test'
import { Model } from '@backspace-tech/bst-ui-lib'

const Button = () => {
    const router = useRouter();
    const testStore = TestStore.useContainer();

    console.log('count', testStore.count)
    return (
        <div className='p-20'>
            <button style={{ background: "red", color: "white" }} onClick={() => {
                // testStore.setCount(prev => prev + 1)
                // router.push({
                //     pathname: '/text',
                //     query: {
                //         name: "Ajith"
                //     }
                // })
                testStore.setShow(true)
            }} >
                Click Me
            </button>
            {
                testStore.count
            }
            <Link href={{
                pathname: '/text',
                query: {
                    id: '123'
                }
            }}>go to text</Link>
          

        </div>
    )
}


const ButtonPage = () => {


    return (
        <TestStore.Provider>
            <Button />
        </TestStore.Provider>
    )
}
export default ButtonPage