let authToken = '';

$(document).ready(() => {
    $('#login-btn').click(async () => {
        const username = $('#username').val();
        const password = $('#password').val();

        try {
            const res = await $.post('https://your-app-name.herokuapp.com/api/users/login', { username, password });
            authToken = res.token;
            $('#auth').hide();
            $('#logout-btn').show();
            loadNotes();
        } catch (error) {
            alert('Login failed');
        }
    });

    $('#register-btn').click(async () => {
        const username = $('#username').val();
        const password = $('#password').val();

        try {
            const res = await $.post('https://your-app-name.herokuapp.com/api/users/register', { username, password });
            authToken = res.token;
            $('#auth').hide();
            $('#logout-btn').show();
            loadNotes();
        } catch (error) {
            alert('Registration failed');
        }
    });

    $('#logout-btn').click(() => {
        authToken = '';
        $('#auth').show();
        $('#logout-btn').hide();
        $('#notes-list').empty();
    });

    $('#save-note-btn').click(async () => {
        const title = $('#note-title').val();
        const content = $('#note-content').val();
        const tags = $('#note-tags').val().split(',').map(tag => tag.trim());
        const dueDate = $('#note-due-date').val();

        try {
            await $.ajax({
                url: 'https://your-app-name.herokuapp.com/api/notes',
                method: 'POST',
                headers: { 'Authorization': authToken },
                contentType: 'application/json',
                data: JSON.stringify({ title, content, tags, dueDate })
            });
            loadNotes();
        } catch (error) {
            alert('Failed to save note');
        }
    });

    async function loadNotes() {
        try {
            const res = await $.ajax({
                url: 'https://your-app-name.herokuapp.com/api/notes',
                method: 'GET',
                headers: { 'Authorization': authToken }
            });
            $('#notes-list').empty();
            res.forEach(note => {
                $('#notes-list').append(`
                    <div class="note">
                        <h2>${note.title}</h2>
                        <p>${note.content}</p>
                        <p>Tags: ${note.tags.join(', ')}</p>
                        <p>Due Date: ${note.dueDate ? new Date(note.dueDate).toLocaleDateString() : 'None'}</p>
                    </div>
                `);
            });
        } catch (error) {
            alert('Failed to load notes');
        }
    }
});