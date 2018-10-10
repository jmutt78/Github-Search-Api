const GITHUB_SEARCH_URL = 'https://api.github.com/search/repositories';

function getDataFromApi(searched, callback) {
  const query = {
    q: `${searched} in:name`,
    per_page: 10
  }
  $.getJSON(GITHUB_SEARCH_URL, query, callback);
}


function renderResult(result) {
  return `
    <div>
      <h2>
      <a class="js-result-name" href="${result.html_url}" target="_blank">${result.name}</a> by <a class="user-name" href="${result.owner.html_url}" target="_blank">${result.owner.login}</a></h2>
      <p>Number of watchers: <span class="watchers-count">${result.watchers_count}</span></p>
      <p>Number of open issues: <span class="issues-count">${result.open_issues}</span></p>
    </div>
  `;
}

function displayData(data) {
  const results = data.items.map((item, index) => renderResult(item));
  $('#search-results').html(results);
}

function handleSubmit() {
  $('#search-bar').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('#search-input');
    const query = queryTarget.val();
    // clear out the input
    queryTarget.val("");
    getDataFromApi(query, displayData);
  });
}

$(handleSubmit);
