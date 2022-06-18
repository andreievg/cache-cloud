import { CacheClient, defaultCacheClient } from "@actions/cache";
import { logObject } from "./utils/actionUtils";

export function clientOverride(): CacheClient {
    return {
        ...defaultCacheClient(),
        saveCache: async (cacheId: number, archivePath: string, options) => {
            logObject({ updated: "updated", cacheId, archivePath, options });
        }
    };
}
