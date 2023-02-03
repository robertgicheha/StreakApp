export class CalculateTime{
    public startDate:string;

    constructor(start:string){
      this.startDate = start
    }


    getTimeDifference():number{
       return new Date().getDate() - new Date(this.startDate).getDate()
    }
}