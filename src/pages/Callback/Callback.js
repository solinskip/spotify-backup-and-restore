import React, {Fragment, useEffect, useMemo} from "react";

const Callback = (props) => {
    const channel = useMemo(() => new BroadcastChannel('access-token'), []);

    useEffect(() => {
        channel.postMessage(props.location.hash.slice((props.location.hash.indexOf('=') + 1)));
        window.close();
    }, [channel, props.location.hash]);

    return (<Fragment/>);
}

export default Callback;