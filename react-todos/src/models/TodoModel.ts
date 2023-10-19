class TodoModel {

    public get rowNumber(): number {
        return this.rowNumber;
    }
    public set rowNumber(value: number) {
        this.rowNumber = value;
    }
    public get rowDescription(): string {
        return this.rowDescription;
    }
    public set rowDescription(value: string) {
        this.rowDescription = value;
    }
    public get rowAssigned(): string {
        return this.rowAssigned;
    }
    public set rowAssigned(value: string) {
        this.rowAssigned = value;
    }
    constructor(rowNumber: number, 
        rowDescription: string,
        rowAssigned: string) {
            this.rowNumber = rowNumber;
            this.rowAssigned = rowAssigned;
            this.rowDescription = rowDescription;
    }
}