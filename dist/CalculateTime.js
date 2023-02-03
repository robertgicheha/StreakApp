export class CalculateTime {
    constructor(start) {
        this.startDate = start;
    }
    getTimeDifference() {
        return new Date().getDate() - new Date(this.startDate).getDate();
    }
}
