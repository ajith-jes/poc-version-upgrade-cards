import { createContainer } from "@/util/context"
import { useRouter } from "next/router"
import { useState } from "react"

const Test = () => {
    const router = useRouter();
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(false)
    const testRouter = () => {
        return router.push('/')
    }
    return {
        count, setCount, show, setShow, testRouter
    }
}
export const TestStore = createContainer(Test)