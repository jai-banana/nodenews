import axios from 'axios';
import express from 'Express';
import fs from 'fs';
import cors from 'cors';

var app = express();
app.use(cors());

var getFileContent = ()=>{
  var content = fs.readFileSync('newslist.json', 'utf8');
  console.log(content);
  return content;
}

app.get('/', (req, res)=>{
  var filee = getFileContent();
  res.send(filee);
});

app.listen(80, ()=>{
  console.log('Listenning');
})

var config = {
  params:{
      "action": "getArticles",
      "keyword": "Barack Obama",
      "articlesPage": 1,
      "articlesCount": 100,
      "articlesSortBy": "date",
      "articlesSortByAsc": false,
      "articlesArticleBodyLen": -1,
      "resultType": "articles",
      "dataType": [
        "news",
        "pr"
      ],
      "apiKey": "a934b23b-966e-46d9-bdfc-c6abcafd01a7",
      "forceMaxDataTimeWindow": 31
    },
  headers: {"content_type": "application/JSON" }
}

// axios.get('http://eventregistry.org/api/v1/article/getArticles', config)
// .then((res)=>{
//   console.log(res.data.articles.results);
//   fs.writeFile('newslist.json', JSON.stringify(res.data.articles.results), ()=>{
//     console.log('success - File written');
//   });
// })
// .catch((err)=>{
//   console.log(err);
// });