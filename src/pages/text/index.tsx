import TextPage from "@/components/text/text";
import { TestStore } from "../../../stores/test";

export default function TextPages() {
    return (
        <div className="">
            <TestStore.Provider>
                <TextPage />
            </TestStore.Provider>

        </div>
    )
}