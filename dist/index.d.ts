declare function sleep(ms?: number): Promise<unknown>;
declare const nftGenerationPlugin: {
    name: string;
    description: string;
    actions: any[];
    evaluators: any[];
    providers: any[];
};

export { nftGenerationPlugin, sleep };
