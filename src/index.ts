import nftCollectionGeneration from "./actions/nftCollectionGeneration.ts";
import mintNFTAction from "./actions/mintNFTAction.ts";

export async function sleep(ms = 3000) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export const nftGenerationPlugin = {
    name: "nftCollectionGeneration",
    description: "Generate NFT Collections",
    actions: [nftCollectionGeneration, mintNFTAction],
    evaluators: [],
    providers: [],
};
