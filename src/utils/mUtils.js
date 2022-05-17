export const setTitle = (title) => {
    title = title ? `${title}` : 'Admin'
    window.document.title = title
}