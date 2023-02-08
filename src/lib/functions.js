export const toProperCase = (word) =>
    (word.charAt(0).toUpperCase() + word.slice(1));

export const formatDate = (date) =>
    new Date(date).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });