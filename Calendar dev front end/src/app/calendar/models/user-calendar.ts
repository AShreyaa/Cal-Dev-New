export interface UserCalendar {
    title:{
        title:String;
        type:String;
        account:String;
    };
    description:String;
    date:String;
    editedTimestamp:[];
    targetDate:String;
    targetTime:String;
    tags:[];
    attachmentUrl:[];
    archive:boolean;
    taskOrList:[];

    
}
