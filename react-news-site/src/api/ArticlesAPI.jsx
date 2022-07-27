import axios from 'axios'

async function fetchArticleById(articleID) {
  let response = await axios.get('http://hn.algolia.com/api/v1/search?', {
    params: {
      tags: 'story_' + articleID
    }
  })

  return response
}

async function fetchArticlesBySection(section) {
  const date = Math.floor(Date.now()/1000) - 86400

  if(section === 'new') {
    let response = await axios.get('http://hn.algolia.com/api/v1/search_by_date?', {
      params: {
        numericFilters: 'created_at_i>'+date,
        tags: 'front_page'
      }
    })
    return response
  } else if(section === 'past') {
    let response = await axios.get('http://hn.algolia.com/api/v1/search?', {
      params: {
        numericFilters: (`created_at_i<${date},created_at_i>${date-86400}`)
      }
  })
    return response
  } else if(section === 'comments') {
    let response = await axios.get('http://hn.algolia.com/api/v1/search_by_date?', {
      params: {
        tags: 'comment'
      }
    })
    return response
  } else if(section === 'ask_hn') {
    let response = await axios.get('http://hn.algolia.com/api/v1/search_by_date?', {
      params: {
        tags: 'ask_hn'
      }
    })
    return response
  } else if(section === 'show_hn') {
    let response = await axios.get('http://hn.algolia.com/api/v1/search_by_date?', {
      params: {
        tags: 'show_hn'
      }
    })
    return response
  }
}

async function fetchArticles(filters = null) {
  let response = await axios.get('http://hn.algolia.com/api/v1/search?', {
    params:{
        query: filters,
        tags: "story"
    }
  })
  return response
}

export {
  fetchArticleById,
  fetchArticlesBySection,
  fetchArticles
}