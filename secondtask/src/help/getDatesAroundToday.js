const getDatesAroundToday = (prev, nextTo) => {
    const today = new Date();
    const dates = [];

    // берет дату -prev дней
    for (let i = prev; i > 0; i--) {
        const pastDate = new Date(today);
        pastDate.setDate(today.getDate() - i);
        dates.push(pastDate.toISOString().split('T')[0]);
    }

    // сегоднящий день
    dates.push(today.toISOString().split('T')[0]);

    // берет дату +next дней
    for (let i = 1; i <= nextTo; i++) {
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + i);
        dates.push(futureDate.toISOString().split('T')[0]);
    }

    return dates;
};

export default getDatesAroundToday;