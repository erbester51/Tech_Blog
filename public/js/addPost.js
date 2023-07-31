async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').Value;
    const post_content = document.querySelector('textarea[name=post-content"]').value.trim();

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler)