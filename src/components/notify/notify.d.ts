
declare interface NotifyTypeInput {
    title?: string,
    message?: string,
    timestamp?: Date,
    type?:'info' | 'error' | 'success' | 'warning'
}

declare interface NotifyType extends NotifyTypeInput{
    timestamp:Date
}