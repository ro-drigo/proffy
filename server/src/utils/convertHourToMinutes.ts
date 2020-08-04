export default function convertHourToMinutes(time: string) {
    
    //divide e transforma em numérico
    const [hour, minutes] = time.split(':').map(Number)
    const timeInMinutes = (hour * 60) + minutes;

    return timeInMinutes;
}