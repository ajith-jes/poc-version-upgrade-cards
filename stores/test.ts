import { createContainer } from "@/util/context"
import { useState } from "react"

const Test = () => {
    const [count, setCount] = useState(0)

    return {
        count, setCount
    }
}
export const TestStore = createContainer(Test)