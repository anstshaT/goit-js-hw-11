export async function fetchFunction(query) {
    const searchParams = new URLSearchParams({
        key: "47628462-4a8006828a6d084475c3078e6",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
    })

    const response = await fetch(
        `https://pixabay.com/api/?${searchParams}`)
    
        if (!response.ok) {
            throw new Error(response.status)
        }
        return await response.json();
}