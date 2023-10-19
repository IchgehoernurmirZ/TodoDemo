class TodoModel {
    public get rowAssigned(): string {
        return this._rowAssigned;
    }
    public set rowAssigned(value: string) {
        this._rowAssigned = value;
    }
    constructor(private rowNumber: number, 
        private rowDescription: string,
        private _rowAssigned: string) {
    }
}