declare interface NotifyType {
    title?: string,
    message?: string,
    timestamp?: Date,
    type?:'info' | 'error' | 'success' | 'warning'
}
