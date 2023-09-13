import { Networks } from "../../constants/blockchain";
import { LPBond, CustomLPBond } from "./lp-bond";
import { StableBond, CustomBond } from "./stable-bond";

import MimIcon from "../../assets/tokens/MIM.svg";
import EthIcon from "../../assets/tokens/WETH.png";
// import EthIcon from "../../assets/tokens/ETH.svg";
import mimSbIcon from "../../assets/tokens/SB-MIM.png";
import EthSbIcon from "../../assets/tokens/SB-ETH.png";
import MimSdogIcon from "../../assets/tokens/SDOG-MIM.svg";
import ethUsdcIcon from "../../assets/tokens/ETH-USDC.png";
import mimEthIcon from "../../assets/tokens/MIM-ETH.png";
import EthFxsIcon from "../../assets/tokens/FXS-ETH.png";

import { StableBondContract, LpBondContract, WethBondContract, StableReserveContract, LpReserveContract } from "../../abi";

export const mim = new StableBond({
    name: "mim",
    displayName: "MIM",
    bondToken: "MIM",
    bondIconSvg: MimIcon,
    bondContractABI: StableBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.BASE]: {
            bondAddress: "0x587bc7775f88d9A190aa02D30f7dF2C9Bb183F5D",
            reserveAddress: "0x130966628846BFd36ff31a822705796e8cb8C18D",
        },
    },
    isActive: false,
});

export const weth = new CustomBond({
    name: "weth",
    displayName: "WETH",
    bondToken: "ETH",
    bondIconSvg: EthIcon,
    bondContractABI: WethBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.BASE]: {
            bondAddress: "0x472c18c4079eCb68629F4FbA1141172404BFEE9C",
            reserveAddress: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",
        },
    },
    isActive: false,
});

export const mimSb = new LPBond({
    name: "mim_sb_lp",
    displayName: "SB-MIM LP",
    bondToken: "MIM",
    bondIconSvg: mimSbIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.BASE]: {
            bondAddress: "0x90A08fdF9f433954930f19E97FE9A1B0bDBf5C5f",
            reserveAddress: "0x425c45adfb53861e5db8f17d9b072ab60d4404d8",
        },
    },
    lpUrl: "https://www.traderjoexyz.com/pool/0x130966628846BFd36ff31a822705796e8cb8C18D/0x7d1232b90d3f809a54eeaeebc639c62df8a8942f",
    isActive: true,
});

// export const ethUsdce = new CustomLPBond({
//     name: "usdce_eth_lp",
//     displayName: "USDC.e-ETH LP",
//     bondToken: "ETH",
//     bondIconSvg: ethUsdcIcon,
//     bondContractABI: LpBondContract,
//     reserveContractAbi: LpReserveContract,
//     networkAddrs: {
//         [Networks.BASE]: {
//             bondAddress: "0x5E831EF7B5B2824B6F327055d0193Ecf8dCAA480",
//             reserveAddress: "0xa389f9430876455c36478deea9769b7ca4e3ddb1",
//         },
//     },
//     lpUrl: "https://www.traderjoexyz.com/#/pool/0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664",
//     isActive: true,
// });

export const mimEth = new LPBond({
    name: "mim_eth_bond",
    displayName: "MIM-ETH LP",
    bondToken: "MIM",
    bondIconSvg: mimEthIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.BASE]: {
            bondAddress: "0x555d0112B1Ca9e468C04dAb37195b2A48c83F43E",
            reserveAddress: "0x781655d802670bba3c89aebaaea59d3182fd755d",
        },
    },
    lpUrl: "https://traderjoexyz.com/pool/ETH/0x130966628846bfd36ff31a822705796e8cb8c18d",
    isActive: true,
});

// export const mimSdog = new LPBond({
//     name: "mim_sdog_lp",
//     displayName: "SDOG-MIM LP",
//     bondToken: "MIM",
//     bondIconSvg: MimSdogIcon,
//     bondContractABI: LpBondContract,
//     reserveContractAbi: LpReserveContract,
//     networkAddrs: {
//         [Networks.BASE]: {
//             bondAddress: "0x0d71d9616f6844f12f1ce1516aa67817754517ff",
//             reserveAddress: "0xa3f1f5076499ec37d5bb095551f85ab5a344bb58",
//         },
//     },
//     lpUrl: "https://traderjoexyz.com/#/pool/0x130966628846BFd36ff31a822705796e8cb8C18D/0xdE9E52F1838951e4d2bb6C59723B003c353979b6",
// });

export const ethSb = new CustomLPBond({
    name: "eth_sb_lp",
    displayName: "SB-ETH LP",
    bondToken: "ETH",
    bondIconSvg: EthSbIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.BASE]: {
            bondAddress: "0x288e6d7f4935c1f4d2862715306d4bdf8dea6592",
            reserveAddress: "0xa3d2cfe49df9d1ea0dc589b69252e1eddc417d6d",
        },
    },
    lpUrl: "https://traderjoexyz.com/pool/ETH/0x7d1232b90d3f809a54eeaeebc639c62df8a8942f",
    isActive: true,
});

export const ethFxs = new CustomLPBond({
    name: "eth_fxs_bond",
    displayName: "FXS-ETH LP",
    bondToken: "ETH",
    bondIconSvg: EthFxsIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.BASE]: {
            bondAddress: "0x8548a41A896e0D1163Bf863c807f3C72409B1432",
            reserveAddress: "0x53942dcce5087f56cf1d68f4e017ca3a793f59a2",
        },
    },
    lpUrl: "https://traderjoexyz.com/pool/ETH/0x214db107654ff987ad859f34125307783fc8e387",
    isActive: true,
});

export default [mim, weth, mimSb, ethSb, mimEth, ethFxs];
