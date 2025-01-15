import { AgentRuntime, Plugin } from '@elizaos/core';
import * as _metaplex_foundation_mpl_token_metadata from '@metaplex-foundation/mpl-token-metadata';
import { PublicKey, Connection } from '@solana/web3.js';
import express from 'express';

declare class WalletSolana {
    private walletPublicKey;
    private walletPrivateKeyKey;
    private connection?;
    private cache;
    private umi;
    private cluster;
    constructor(walletPublicKey: PublicKey, walletPrivateKeyKey: string, connection?: Connection);
    fetchDigitalAsset(address: string): Promise<_metaplex_foundation_mpl_token_metadata.DigitalAsset>;
    getBalance(): Promise<{
        value: number;
        formater: string;
    }>;
    get privateKeyUint8Array(): Uint8Array<ArrayBufferLike>;
    createCollection({ name, symbol, adminPublicKey, uri, fee, }: {
        name: string;
        symbol: string;
        adminPublicKey: string;
        uri: string;
        fee: number;
    }): Promise<{
        success: boolean;
        link: string;
        address: string;
        error?: string | null;
    }>;
    mintNFT({ collectionAddress, adminPublicKey, name, symbol, uri, fee, }: {
        collectionAddress: string;
        adminPublicKey: string;
        name: string;
        symbol: string;
        uri: string;
        fee: number;
    }): Promise<{
        success: boolean;
        link: string;
        address: string;
        error?: string | null;
    }>;
    verifyNft({ collectionAddress, nftAddress, }: {
        collectionAddress: string;
        nftAddress: string;
    }): Promise<{
        isVerified: boolean;
        error: string | null;
    }>;
}

declare function createNFTApiRouter(agents: Map<string, AgentRuntime>): express.Router;

declare function sleep(ms?: number): Promise<unknown>;
declare const nftGenerationPlugin: Plugin;

export { WalletSolana, createNFTApiRouter, nftGenerationPlugin, sleep };
