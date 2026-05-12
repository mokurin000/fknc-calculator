// Need unsafeWindow to replace fetch
// For webview, unsafeWindow doesn't exists.
const w = 'undefined' === typeof GM_info ? window : unsafeWindow;

(function () {
    'use strict';

    if (w === undefined || w === null) {
        console.log("Unable to obtain unsafeWindow, early abort!");
        return;
    }

    const origFetch = w.fetch;

    w.fetch = async (...args) => {
        const [input, init] = args;

        const url =
            typeof input === "string" ?
                input :
                input instanceof Request ?
                    input.url :
                    String(input);

        const parsed = new URL(url, location.origin);

        let mockBody = null;
        let returnCode = 200;

        if (parsed.pathname === "/rest/v1/rpc/use_free_query") {
            // Unlock free query
            mockBody = JSON.stringify({
                allowed: true
            });
        } else if (parsed.pathname === "/rest/v1/rpc/log_user_query") {
            // Disable user query log
            mockBody = JSON.stringify({
                ok: true
            });
        } else if ([
            "/rest/v1/crop_daily_stats",
        ].includes(parsed.pathname)) {
            // Disable user query log
            mockBody = "{}";
            returnCode = 400;
        }

        if (mockBody === null) {
            return origFetch.apply(this, args);
        } else {
            return new Response(mockBody, {
                status: returnCode,
                headers: {
                    "Content-Type": "application/json"
                }
            });
        }
    };
})();
