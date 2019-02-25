var options = {
    url_list: $('#url-list').attr('href'),
    url_get: $('#url-get').attr('href'),
    otherOptions: {
        minimumInputLength: 3,
        formatNoMatches: 'No author found.',
        formatSearching: 'Looking authors...',
        formatInputTooShort: 'Insert at least 3 characters'
    }
};
$('#book_author').autocompleter(options);