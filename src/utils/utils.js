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

// 2024-06-06T12:00:00
export function fbTime (data) {
    return new Date(data.seconds * 1000)
}

export const fDate = (date) => date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })

export function getDay(day) {
    const suffix = (day >= 11 && day <= 13) ? 'th' : ['th', 'st', 'nd', 'rd'][day % 10] || 'th';
    return day + suffix;
  }
  
export function convertToTime(deadlineObject) {
    const { totalSeconds, nanoseconds } = deadlineObject;

    const deadlineDate = new Date(totalSeconds * 1000);

    deadlineDate.setMilliseconds(deadlineDate.getMilliseconds() + nanoseconds / 1e6);

    const formattedDeadline = deadlineDate.toLocaleString();

    return formattedDeadline;
}


// {
//     subject: 'STA 132',
//     numAssignments: 3,
//     upcomingDates: [
//       { date: 'July 5th' },
//       { date: 'Sept 13th' },
//       { date: 'July 1st' },
//     ],
//     assignments: []
//   },
