export interface Stocks extends StocksHist{
    symbol:string,
}

export interface StocksHist {
    date: Date,
    open:string,
    close:string,
    low:string,
    high:string,
    volume:string
}