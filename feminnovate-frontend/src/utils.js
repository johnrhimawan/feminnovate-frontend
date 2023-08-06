import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';

export const parseLastModified = (date) => {
    dayjs.extend(relativeTime)
    return dayjs(date).fromNow()
}
