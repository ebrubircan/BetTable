
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

const tableHeadRowHeight = 36; //px
const rowHeight = 36; //px
const matchLineRowCount = 2;
export const buffer = 4;
export const screenRowCount = () => {
    return Math.floor(((window.innerHeight - tableHeadRowHeight) / rowHeight) / matchLineRowCount);
};

export const calculateScreenHeight = (length) => (rowHeight * matchLineRowCount) * length + tableHeadRowHeight;

export const renderStartIndexByScreen = () => {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    var stRowCount = Math.floor(((st / rowHeight) / 2));
    return stRowCount;
};