export const BASE_URL = 'https://rent-cars-api.herokuapp.com/admin/car'

export const addNewCar = async (data: FormData) => {
    try {
        const response = await fetch(BASE_URL, {
            // mode: 'no-cors',
            method: 'POST',
            headers: { 'Content-Type': 'multipart/form-data', 'accept' : '*/*' },
            body: data
        })
        return await response.json();
    } catch (error) {
        if (error instanceof Error) console.log(error.message);
    }
}