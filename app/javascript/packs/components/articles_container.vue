<template>
  <div id="articles-container">
    <button type="submit" @click="signOut">ログアウト</button>
    <router-link to="/post_articles">投稿する</router-link>
    <ul>
      <li v-for="article in articles" :key="article.id">
          <div class="article__title">{{article.title}}</div>
          <div class="article-body">{{article.body}}</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import axios from "axios"
  import { Vue, Component } from "vue-property-decorator"
  import VueRouter from 'vue-router'

  /* devise-auth-tokenで設定したヘッダー情報 */
  const config = {
    headers: {
      'Authorization': 'Bearer',
      'Access-Control-Allow-Origin': '*',
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'uid': localStorage.getItem('uid')
    }
  }

  Vue.use(VueRouter);

  @Component
  export default class ArticlesContainer extends Vue {
    articles: String[] = []

    async mounted(): Promise<void> {
      await this.fetchArticles();
    }

    async fetchArticles(): Promise<void> {
      await axios.get("/api/v1/articles").then((response) => {
        response.data.data.map((article: any) => {
          this.articles.push(article.attributes);
        })
      })
    }

    async signOut(): Promise<void> {
      await axios.delete('/api/v1/auth/sign_out', config).then(() => {
        alert('ログアウトしました')
        localStorage.clear();
        this.$router.push('/sign_in')
      }).catch(() => {
        console.log(config);
        alert('ログアウトに失敗しました')
      })
    }
  }
</script>

<style lang="scss" scoped>
  li {
    list-style: none;
  }
  div:nth-of-type(2) {
    margin: 20px 0;
    border-bottom: rgba(0,153,255,0.5) dotted 2px;
  }
  .article__title {
    font-size: 1.5em;
  }
</style>
