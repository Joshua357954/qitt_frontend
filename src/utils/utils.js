export const baseUrl = 'http://localhost:4000'


export const formatCode = code => code.replace(/([a-zA-Z]+)([0-9.]+)/, '$1 $2').toUpperCase();

export const formatTime = (timetableEntry) => {
    const [start, end] = timetableEntry.split('-').map(part => part.trim());
    return `${start}${start.includes('am') ? '' : 'am'} - ${end}${end.includes('am') || end.includes('pm') ? '' : 'pm'}`;
    // return '222'
};

export const formatTimetableEntry = (timeRange) => {
    const [start, end] = timeRange.split('-');
    const formatTime = (time) => {
        const [hour, minute] = time.trim().split(':');
        const period = parseInt(hour, 10) >= 12 ? 'pm' : 'am';
        const formattedHour = (parseInt(hour, 10) % 12 || 12).toString();
        return `${formattedHour}:${minute || '00'}${period}`;
    }
    return `${formatTime(start)} - ${formatTime(end)}`;
};

