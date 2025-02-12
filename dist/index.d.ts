import * as _elizaos_core from '@elizaos/core';

declare function sleep(ms?: number): Promise<unknown>;
declare const nftGenerationPlugin: {
    name: string;
    description: string;
    actions: _elizaos_core.Action[];
    evaluators: any[];
    providers: any[];
};

export { nftGenerationPlugin, sleep };
