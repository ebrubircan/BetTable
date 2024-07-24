
export const extractMBS = (ocg) => {
    return Object.values(ocg).find(market => market.MBS)?.MBS || null;
};

export const extractOdds = (ocg, marketId, ocId) => {
    const market = ocg?.[marketId];
    if (market?.OC) {
        return market.OC?.[ocId] || null;
    }
    return null;
};