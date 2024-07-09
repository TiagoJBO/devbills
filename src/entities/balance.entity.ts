type BalanceProps = {
    _id?: string | number[] | null;
    incomes: number;
    expense: number;
    balance: number;

}
export class Balance {
    public _id?: string | number[] | null;
    public incomes: number;
    public expense: number;
    public balance: number;

    constructor({ _id, incomes, expense, balance }: BalanceProps) {
        this._id = _id
        this.incomes = incomes
        this.expense = expense
        this.balance = balance
    } 
}