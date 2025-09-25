
import React, { FC, useEffect, useMemo, useState } from 'react';

import { CopyTextProps } from './index.interface';
import { Iconx } from '../Iconx';

const CopyIndicator = ({ done }: { done: (val: boolean) => void }) => {
    useEffect(() => {
        setTimeout(() => done(false), 3000)
    }, [])
    return (
        // class defined in index
        <span className="flex bg-primaryFont">
            <span>Copied</span>
            <span>!</span>
        </span>
    )
}

/**
 * Primary UI component for user interaction
 */
export const CopyText = (_props: CopyTextProps) => {
    const [copied, setCopied] = useState(false);

    const _copyText = () => {
        if (!_props.noCopy) {
            window.navigator.clipboard.writeText(_props.text)
            .then(() => {
                setCopied(true)
            })
            .catch(_err => {})
        }
    }

    const text = useMemo(() => {
        if (!!_props.max) {
            if (String(_props.text).length > Number(_props.max)) {
                return String(_props.text).slice(0, _props.max).trimEnd() + "..."
            }
        }
        return String(_props.text)
    }, [_props.text, _props.max])

    return (
        <span className={`bst-copy-text`} title={_props.text}>
            {_props.noCopy 
                ? "" 
                : <span onClick={_copyText} className={`bst-copy-text__copyHint`}>
                    {copied 
                    ? <CopyIndicator done={setCopied} />
                    : "Copy!" }
                </span> 
            }
            <span>{text} </span>
        </span>
    )
};


