export const getCurrenciesFetch = async () => {
    const response = await fetch(
        "https://api.currencyapi.com/v3/latest?apikey=cur_live_MA6w5fU5EVQ9zmo0J1WQxZYAwX4GiF9Zh4XFUQBw"
    );

    if (!response.ok) {
        return response.statusText;
    }

    return await response.json();
};