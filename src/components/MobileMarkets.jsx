import { MobileMarket } from "./MobileMarket"

export const MobileMarkets = ({isVisible, markets, matchCode, rowIndex}) => {

    if(!isVisible){
        return null
    }

    return markets.map((market)=>{
        return <MobileMarket key={`${matchCode}_${market.ID}`} market={market} matchCode={matchCode} rowIndex={rowIndex}/>
    })
}